# Path: app.py
from diffusers import DiffusionPipeline, StableDiffusionPipeline, DPMSolverMultistepScheduler
import torch
import random
from flask import Flask, Response, request, jsonify
from flask_cors import CORS
import io
from PIL import Image

app = Flask(__name__)
CORS(app)

model_id = "stabilityai/stable-diffusion-xl-base-1.0"
pipe = DiffusionPipeline.from_pretrained("stabilityai/stable-diffusion-xl-base-1.0", torch_dtype=torch.float32, use_safetensors=True, variant="fp16")
#pipe.scheduler = DPMSolverMultistepScheduler.from_config(pipe.scheduler.config)
pipe = pipe.to("mps")
pipe.enable_attention_slicing()

def generate_image(prompt):
    image = pipe(prompt).images[0]
    return image

@app.route("/generate", methods=["GET"])
def generate():
    prompt = request.args.get("prompt")
    print("prompt:", prompt)
    image = generate_image(prompt)
    image_bytes = io.BytesIO()
    image.save(image_bytes, format= "JPEG")
    image_bytes = image_bytes.getvalue()
    print(f"Generated image of size {len(image_bytes)} bytes.")
    
    # return the response as an image
    return Response(image_bytes, mimetype="image/jpeg")


# Start an http server and expose an api endpoint that takes in a prompt and returns an image.
def main():
    print("Starting server...")
    app.run(host="localhost", port=5000)

if __name__ == "__main__":
    main()
