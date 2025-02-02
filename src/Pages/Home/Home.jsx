import { Fragment } from "react";
import { Header, Wrapper } from "./HomeStyle";
import { Cards } from "../../Components/Cards/Card";
import { Banners } from "../../Components/Banner/Banners";

export function HomeScreen() {
    let Card = [];
    for (let i = 0; i < 4; i++){
        Card.push( <Cards key={i}/>)
    }

  return (
    <Fragment>
      <Banners />
        <Header>
            <h2>Find the property of your dreams!</h2>
        </Header>
        <Wrapper>
          {Card}
        </Wrapper>
    </Fragment>
  );
}