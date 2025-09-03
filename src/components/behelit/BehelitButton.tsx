import { useState } from "react";
import styled from "styled-components";
import behelitImg from "../../assets/Behelito.png";

interface BehelitButtonProps {
  onClick: () => void;
}

const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }
`;

const BehelitImg = styled.img<{ isClicked: boolean }>`
  width: 300px;
  height: 300px;
  transition: transform 0.2s ease;
  transform: ${({ isClicked }) => (isClicked ? "scale(1.2)" : "scale(1)")};

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export default function BehelitButton({ onClick }: BehelitButtonProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    onClick();
    setTimeout(() => setIsClicked(false), 50);
  };

  return (
    <Button onClick={handleClick}>
      <BehelitImg src={behelitImg} alt="Behelit" isClicked={isClicked} />
    </Button>
  );
}
