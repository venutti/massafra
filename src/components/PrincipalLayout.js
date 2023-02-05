import Carrousel from "./Carrousel";
import Container from "./Container";
import Header from "./Header";
import StyledButton from "./StyledButton";

export default function PrincipalLayout() {
  return (
    <div className="principal">
      <Header />
      <Carrousel />
      <Container>
        <StyledButton>VER MENU</StyledButton>
      </Container>
    </div>
  );
}
