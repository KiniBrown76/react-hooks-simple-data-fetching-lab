import React, { useState, useEffect } from 'react';

function App() {
  const [imgUrl, setImgUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        setImgUrl(data.message);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading image...</p>
      ) : (
        <img src={imgUrl} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;