import { Fragment } from "react";
import { TopBanner } from "../../Components/Banner/TopBanner";

import {Inputs} from "../../Components/Input/Input";
import { TextArea } from "../../Components/TextArea/TextArea";
import {Button } from "../../Components/Button/Button"

import {
  Container,
  Description,
  Left,
  Profile,
  ProfileContact,
  ProfileDescription,
  ProfileFormContact,
  ProfileImg,
  Rigth,
  Thumb,
} from "./ImobiStyle";

export function Imoveis() {
  return (
    <Fragment>
          
        <TopBanner></TopBanner>
      <Container>
        <Left>
          <Thumb>
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Imagem do imovel"
            />
          </Thumb>
          <Description>
            <h2>Apartamento / Alugar</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
              porro voluptatem sed dicta error pariatur similique commodi,
              debitis totam. Quia quo quidem fugiat, sed distinctio corrupti.
              Itaque dicta possimus recusandae.
            </p>
          </Description>
        </Left>
        <Rigth>
          <Profile>
            <ProfileImg>
              <img
                src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
                alt="Imagem de perfil do usuario"
              />
            </ProfileImg>
            <ProfileDescription>
              <h3>Jhon Due</h3>
              <p>Descrição do Usuario</p>
            </ProfileDescription>
          </Profile>
          <ProfileContact>
            <h3>Informações para Contato</h3>
            <p>(11) 9 1111-1111</p>
            <p>test@tes.com</p>
          </ProfileContact>
          <ProfileFormContact>
            <h3>Contate o anuciante</h3>
            <form>
             <Inputs type="text" placeholder="Nome" />
             <Inputs type="text" placeholder="E-mail:"/>
              <TextArea placeholder="Mensagem:"></TextArea>
             <Button> Enviar Mensagem </Button>
            </form>
          </ProfileFormContact>
        </Rigth>
      </Container>
    </Fragment>
  );
}
