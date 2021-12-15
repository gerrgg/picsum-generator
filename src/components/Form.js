import { useState } from "react";
import styled from "styled-components";

const FormWrapper = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.8);
  height: 650px;
  width: 400px;
  border-radius: 20px;
`;

const InnerWrap = styled.div`
  max-width: 75%;
  margin: 0 auto;
`;

const Button = styled.button`
  background: ${(props) => (props.theme === "dark" ? "#000" : "palevioletred")};
  color: wheat;
  padding: 20px;
  font-size: 20px;
  border: 0;
  margin: 2rem 10px;
  text-align: center;
`;

const Center = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: palevioletred;
`;

const InputWrapper = styled.p`
  width: 100%;
  margin: 1rem auto;
  display: flex;
  align-items: flex-end;
`;

const Input = styled.input`
  width: 100%;
  border: 0;
  box-sizing: border-box;
  padding: 10px 15px 2px 15px;
  background: transparent;
  border-bottom: 2.5px solid black;
  font: 400 1.5em/0.5 "Pacifico", cursive;
  margin-right: 15px;
  outline: 0;
  appearance: none;
  -webkit-appearance: none;
  margin: 0;
  -moz-appearance: textfield;
`;

const Label = styled.label`
  font: 400 1.5em/1.2 "Pacifico", cursive;
  margin-right: 15px;
`;

function Form({ width, setWidth, height, setHeight, reroll, limit, setLimit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    reroll();
  };

  const handleDownload = (e) => {
    e.preventDefault(e);
    console.log("download");
  };

  return (
    <FormWrapper>
      <Title>Picsum Generator</Title>
      <InnerWrap>
        <InputWrapper>
          <Label>Width:</Label>
          <Input
            type="number"
            name="width"
            placeholder="width"
            value={width}
            onChange={({ target }) => setWidth(target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Height:</Label>
          <Input
            type="number"
            name="height"
            placeholder="height"
            value={height}
            onChange={({ target }) => setHeight(target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Label># of images:</Label>
          <Input
            type="number"
            name="height"
            placeholder="height"
            value={limit}
            onChange={({ target }) => setLimit(target.value)}
          />
        </InputWrapper>
      </InnerWrap>
      <Center>
        <Button theme={"light"} onClick={(e) => handleSubmit(e)}>
          Get Images
        </Button>
        <Button theme={"dark"} onClick={(e) => handleDownload(e)}>
          Download
        </Button>
      </Center>
    </FormWrapper>
  );
}

export default Form;
