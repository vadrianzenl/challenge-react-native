import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";

const ImagesContainer= styled.div`
  text-align: center;
  
  hr {
    width: 100%;
    height: 2px;
  }
`;

const ImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Images = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    handleLoadImages();
  }, []);

  const handleLoadImages = () => {
    const items = Object.keys(localStorage);
    items.forEach(async item => {
      if (item.includes('Image')) {
        const blob = await (await fetch(localStorage.getItem(item))).blob();
        const file = new File([blob], item, );
        setImages([...images, file]);
      }
    });
  };

  return (
    <ImagesContainer>
      <NavBar />
      <h4>Images Page</h4>
      <hr />
      <ImagesWrapper>
        {images && images.map((image, index) => (
          <div key={index}>
            {image &&  <img alt="File" width={200} height={200} src={URL.createObjectURL(image)} /> }
          </div>
        ))}
      </ImagesWrapper>
    </ImagesContainer>
  );
};

export default Images;
