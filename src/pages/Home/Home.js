import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  text-align: center;
  
  hr {
    width: 100%;
    height: 2px;
  }
  
  select {
    margin-right: 10px;
  }
  
  button {
    margin-right: 10px;
  }
`;

const Home = () => {
  const [file, setFile] = useState(null);
  const [type, setType] = useState('Image');
  const [count, setCount] = useState(0);
  const inputRef = useRef();

  useEffect(() => {
    const storageCount = localStorage.getItem('count');
    if (storageCount) {
      setCount(parseInt(storageCount));
    }
  }, []);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = (event) => {
    // Increase image counter
    const increaseCount = count + 1;
    setCount(increaseCount);
    const fileName = `${type}${increaseCount}`;

    // Storage image
    localStorage.setItem('count', increaseCount.toString());
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      localStorage.setItem(fileName, reader.result.toString());
      alert('File uploaded successfully');
    };

    // Clear data
    handleClearData();
  };

  const handleClearData = () => {
    setFile(null);
    inputRef.current.value = "";
  }

  return (
    <HomeContainer>
      <h4>Home Page</h4>
      <hr />
      <select value={type} onChange={(event) => setType(event.target.value)}>
        <option value="Image">Image</option>
        <option value="File">File</option>
      </select>
      <input ref={inputRef} type="file" onChange={handleChange} accept="text/csv,image/png" />
      <button onClick={handleUpload}>Upload File</button>
    </HomeContainer>
  )
};

export default Home;
