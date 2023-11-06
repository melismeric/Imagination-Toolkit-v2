import React, { useState } from 'react';

const ImageGeneratorForm = ({ generateImage }) => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    generateImage(prompt);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Prompt:
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </label>
      <button type="submit">Generate Image</button>
    </form>
  );
};

export default ImageGeneratorForm;
