import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import styled from 'styled-components'

const Wrapper = styled.section`
  margin: 0 auto;
  padding: 4rem;
  max-width: 1400px;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Form = styled.form`
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  margin: 15px;
`;

const Images = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const Button = styled.button`
  background: palevioletred;
  color: wheat;
  padding: 20px;
  font-size: 20px;
  border: 0;
  margin: 2rem auto;
  text-align: center;
  
`;

const Center = styled.div`
  text-align: center;
`;

const ImageWrapper = styled.div`
  display: flex;
  max-width: 140px;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
`;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}


const getImages = (width, height) => {
  const srcs = [];

  for(let i = 0; i < 50; i++){
    srcs[i] = `https://picsum.photos/seed/${getRandomInt(0, 10000)}/${width}/${height}`;
  }

  const images = srcs.map((src, i) => {
    return (
      <ImageWrapper>
        <Image src={src} alt="random" key={i}  />
      </ImageWrapper>
    )
  })

  return images
}

function App() {
  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(400);
  const [images, setImages] = useState(getImages(width, height));
  
  const reroll = () => {
    setImages(getImages(width, height));
  }

  return (
    <Wrapper>
      <Title>Picsum Generator</Title>
      <Form>
        <Input type="number" name="width" placeholder="width" value={width} onChange={({target}) => setWidth(target.value) }  />
        <Input type="number" name="height" placeholder="height" value={height} onChange={({target}) => setHeight(target.value) }  />
      </Form>
      <Center>
        <Button onClick={() => reroll()}>Re-roll</Button>
      </Center>
      <Images>
      {images}
      </Images>
    </Wrapper>
  );
}

export default App;
