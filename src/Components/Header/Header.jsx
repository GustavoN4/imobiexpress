import { Container, Logo, Menu } from "./Style";
import gnImoveisImage from "../../assets/gnimoveis.png";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <Logo>
       <Link to='/'><img src={gnImoveisImage} alt="Logo da empresa de imoveis" /></Link> 
      </Logo>
      <Menu>
        <ul>
          <li>
            <Link to="/Login"><span>Login</span></Link>
          </li>
        </ul>
      </Menu>
    </Container>
  );
}
