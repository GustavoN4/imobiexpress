import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
--roxo: #6A0DAD ;
--cinza: #18181B;
--cinza-500: #71717a83;
--background: #d1d5db;
--blue-600: #2563eb;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
    body{
    background-color: var(--background);
    font-family: "Poppins", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1.2rem;

    }
    a{
    text-decoration: none;
    }
    ul,nav{
    list-style-type:none;
    }
`;
