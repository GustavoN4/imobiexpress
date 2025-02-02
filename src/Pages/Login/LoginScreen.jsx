import { Link } from "react-router-dom";
import { Button } from "../../Components/Button/Button";
import { Inputs } from "../../Components/Input/Input";
import {
  Container,
  ContainerForm,
  Form,
  Label,
  SubTitle,
} from "./LoginScreenStyle";

export function LoginScreen() {
  return (
    <Container>
      <h2>Acesse sua conta</h2>
      <p>Entre com seu e-mail e senha!</p>
      <ContainerForm>
        <Form action="#">
          <Label htmlFor="">E-mail</Label>
          <Inputs type="text" placeholder="Informe seu  E-mail" />
          <Label htmlFor=""> Senha</Label>
          <Inputs type="text" placeholder="Informe sua senha" />
          <Button> Fazer Login </Button>
        </Form>
      </ContainerForm>
      <SubTitle>
        <Link to="/Cadastro">
          <span> Criar conta!</span>
        </Link>
      </SubTitle>
    </Container>
  );
}
