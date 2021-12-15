import { useState } from "react";
import { useWindowDimension } from "../hooks/useWindowDimension";
import styled, { css } from "styled-components";

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  &::before {
    pointer-events: none;
    content: "";
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.25);
  }

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;

const ImageRow = styled.div`
  display: flex;
  flex-flow: row;
`;

const ImageWrapper = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  flex-shrink: 0;
  display: flex;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
`;

const Images = ({ width, height, imageUrls }) => {
  const [windowWidth, windowHeight] = useWindowDimension();

  const rows = Math.ceil(windowWidth / width);
  const columns = Math.ceil(windowHeight / height);

  const grid = [];

  let rowCount = 0;
  let imagesAdded = 0;
  let row = [];

  while (imagesAdded < rows * columns) {
    for (let image of imageUrls) {
      if (rowCount < rows) row.push(image);

      if (row.length === rows) {
        imagesAdded += row.length;
        rowCount = 0;
        grid.push(row);
        row = [];
      }
    }
  }

  const images = grid.map((row, i) => (
    <ImageRow>
      {row.map((src, i) => (
        <ImageWrapper width={width} height={height}>
          <Image src={src} alt="todo" key={i} />
        </ImageWrapper>
      ))}
    </ImageRow>
  ));

  return images;
};

const Background = ({ width, height, imageUrls }) => {
  return (
    <Wrapper>
      <Images width={width} height={height} imageUrls={imageUrls} />
    </Wrapper>
  );
};

export default Background;
