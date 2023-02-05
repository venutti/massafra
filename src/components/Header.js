import hoja from "../assets/hoja.png";

export default function Header() {
  return (
    <header className="header">
      <h1 className="logo-title">
        <img src={hoja} alt="logo" />
        MASSAFRA
      </h1>
      <h4 className="logo-subtitle">MERCADO GASTRONOMICO</h4>
    </header>
  );
}
