import behelitImg from "../../assets/Behelito.png";

interface BehelitButtonProps {
  onClick: () => void;
}
export default function BehelitButton({ onClick }: BehelitButtonProps) {
  return (
    <button
      onClick={onClick}
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
          width: 100,
          transition: "transform 0.2s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1")}
      />
    </button>
  );
}
