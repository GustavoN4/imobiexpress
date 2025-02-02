import { Link } from "react-router-dom";
import { Button } from "../../Components/Button/Button";
import { Inputs } from "../../Components/Input/Input";
import { Container, ContainerForm, Form, Label, SubTitle } from "./CadastroScreenStyle";

export function CadastroScreen() {
  return (
    <Container>
      <h2>Crie sua conta</h2>
      <p>Cadastre-se para acessar a plataforma!</p>
      <ContainerForm>
        <Form action="#">
          <Label htmlFor="">Nome</Label>
          <Inputs type="text" placeholder="Informe seu  Nome" />
          <Label htmlFor="">E-mail</Label>
          <Inputs type="text" placeholder="Informe seu  E-mail" />
          <Label htmlFor=""> Senha</Label>
          <Inputs type="text" placeholder="Informe sua senha" />
          <Button> Fazer cadastro </Button>
        </Form>
      </ContainerForm>
      <SubTitle>
        <Link to="/Login">
          <span> Fazer Login!</span>
        </Link>
      </SubTitle>
    </Container>
  );
}
