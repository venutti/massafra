import Carrousel from "./Carrousel";
import Header from "./Header";
import StyledButton from "./StyledButton";

export default function PrincipalLayout() {
  return (
    <div className="principal">
      <Header />
      <Carrousel />
      <StyledButton>VER MENU</StyledButton>
    </div>
  );
}
