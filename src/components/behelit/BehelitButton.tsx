import { useState } from "react";
import behelitImg from "../../assets/Behelito.png";

interface BehelitButtonProps {
  onClick: () => void;
}
export default function BehelitButton({ onClick }: BehelitButtonProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    onClick();
    setTimeout(() => setIsClicked(false), 50);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        background: "transparent",
        border: "none",
        cursor: "pointer",
        padding: 0,
      }}
    >
      <img
        src={behelitImg}
        alt="Behelit"
        style={{
          width: 300,
          height: 300,
          transition: "transform 0.2s",
          transform: isClicked ? "scale(1.2)" : "scale(1.1)",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1")}
      />
    </button>
  );
}
