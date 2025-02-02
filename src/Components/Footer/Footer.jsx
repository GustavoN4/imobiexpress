import { FaGithub, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { Container, Copy, Item } from "./FooterStyle";

import gnImoveisImage from "../../assets/gnimoveis.png";
import { Fragment } from "react";

export function Footer() {
  return (
    <Fragment>
        <Container>
      <Item>
        <img src={gnImoveisImage} alt="Logo da empresa de imoveis" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          numquam sit fugiat, culpa amet iusto aliquid fugit hic optio sed harum
          placeat error sunt sequi natus distinctio enim quas minus!
        </p>
        <nav>
          <li>
            <span>
              <FaInstagram size={32} />
            </span>
          </li>
          <li>
            <span>
              <FaGithub size={32} />
            </span>
          </li>
          <li>
            <span>
              <FaLinkedinIn size={32} />
            </span>
          </li>
          <li>
            <span>
              <FaTiktok size={32} />
            </span>
          </li>
        </nav>
      </Item>
      <Item>
        <h3>Our Services</h3>
        <ul>
          <li> <span>Comprar</span>   </li>
          <li> <span>Alugar</span>   </li>
          <li> <span>Vender</span>   </li>
        </ul>
      </Item>
      <Item>
        <h3>Useful Links</h3>
        <ul>
          <li> <span>Comprar</span>   </li>
          <li> <span>Alugar</span>   </li>
          <li> <span>Vender</span>   </li>
        </ul>
      </Item>
      <Item>
        <h3>Contact Info </h3>
        <ul>
          <li> <span>Comprar</span>   </li>
          <li> <span>Alugar</span>   </li>
          <li> <span>Vender</span>   </li>
        </ul>
      </Item>
    </Container>
    <Copy>
        <p>© Copyright 2025 - Workside Tecnologia All Rights Reserved.</p>
        <ul>
            <li><span>Termos de Uso</span></li>
            <li><span>Política de Privacidade</span></li>
            <li><span>Política de Cookies</span></li>
        </ul>
    </Copy>
    </Fragment>
    
  );
}
