import React, { useState } from 'react';
import './App.css';
import ImageGeneratorForm from './components/ImageGeneratorForm';
import ImageViewer from './components/ImageViewer';

function App() {
  const [imageUrl, setImageUrl] = useState('');

  const generateImage = async (prompt) => {
    try {
      const response = await fetch(`http://localhost:5000/generate?prompt=${prompt}`);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setImageUrl(url);
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };

  return (
    <div className="App">
      <h1>Image Generator</h1>
      <ImageGeneratorForm generateImage={generateImage} />
      {imageUrl && <ImageViewer imageUrl={imageUrl} />}
    </div>
  );
}

export default App;
