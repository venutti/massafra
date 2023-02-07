import pescadoImage from "../assets/pescado.jpg";

export default function Carrousel() {
  return (
    <div
      className="carrousel"
      style={{ backgroundImage: `url(${pescadoImage})` }}
    ></div>
  );
}
