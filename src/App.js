import "./App.css";
import { useState } from "react";
import styled from "styled-components";
import Form from "./components/Form";
import Background from "./components/Background";

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const getImageUrls = (width, height, limit) => {
  const srcs = [];

  for (let i = 0; i < limit; i++) {
    srcs[i] = `https://picsum.photos/seed/${getRandomInt(
      0,
      10000
    )}/${width}/${height}`;
  }

  console.log(srcs);

  return srcs;
};

function App() {
  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(400);
  const [limit, setLimit] = useState(12);
  const [imageUrls, setImageUrls] = useState(
    getImageUrls(width, height, limit)
  );

  const reroll = () => setImageUrls(getImageUrls(width, height, limit));

  return (
    <Wrapper>
      <Background width={width} height={height} imageUrls={imageUrls} />
      <Form
        width={width}
        setWidth={setWidth}
        height={height}
        setHeight={setHeight}
        reroll={reroll}
        limit={limit}
        setLimit={setLimit}
      />
    </Wrapper>
  );
}

export default App;
