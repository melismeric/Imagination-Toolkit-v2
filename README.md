# Imagination-Toolkit-v2
## Running the Stable Diffusion Locally w Apple Silicon (M2)

## Backend

#### /stable diffusion

### Requirements
* Python 3.7 or higher
* Pipenv
* Flask
* A GPU for running the model (tested with Apple Silicon (M2))


### Usage
1. Activate the virtual environment: (backend/stable diffusion)
```
pipenv shell
```

2. Run the Flask app:
```
python app.py
```

The API will be available at http://localhost:5000/generate.

### Endpoints
/generate

Method: GET

* Query Parameters:
  * prompt (required): The text prompt to generate an image from.

* Response: An image in JPEG format.


## Frontend
### Requirements
* React
* Node

### Usage

1. Run the frontend (/frontend)
  npm start
