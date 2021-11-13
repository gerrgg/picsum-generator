import { useState } from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-flow: row wrap;

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;

const ImageWrapper = styled.div`
  width: ${(props) => props.width}px;
  display: flex;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
`;

const Images = ({ width, height, imageUrls }) => {
  // get window width
  // get window hieght

  const images = imageUrls.map((src, i) => (
    <ImageWrapper width={width} height={height}>
      <Image src={src} alt="todo" key={i} />
    </ImageWrapper>
  ));

  console.log(images);

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
