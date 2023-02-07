export default function StyledButton({ children }) {
  const scrollIntoMenu = () => {
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <button onClick={scrollIntoMenu} className="styled-button">
      {children}
    </button>
  );
}
