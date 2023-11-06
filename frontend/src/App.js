import React, { useState } from 'react';
import './App.css';
import ImageGeneratorForm from './components/ImageGeneratorForm';
import ImageViewer from './components/ImageViewer';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const generateImage = async (prompt) => {
    setIsLoading(true); // Set loading state to true while fetching the image
    try {
      const response = await fetch(`http://localhost:5000/generate?prompt=${prompt}`);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setImageUrl(url);
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      setIsLoading(false); // Set loading state to false after fetching the image
    }
  };

  return (
    <div className="App">
      <h1>Image Generator</h1>
      <ImageGeneratorForm generateImage={generateImage} />
      {isLoading && <p>Loading...</p>}
      {imageUrl && !isLoading && <ImageViewer imageUrl={imageUrl} />}
    </div>
  );
}

export default App;
