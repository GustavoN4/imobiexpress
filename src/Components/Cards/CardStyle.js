import styled from "styled-components";

export const  Container = styled.div`
    width: 24%;
    margin-bottom: 12px;
    background-color: #fff;
    box-shadow: 5px 5px 4px 4px rgba(0,0,0,0.1); 
`;
export const  Img = styled.div`
    width: 100%;
    img{
        width: 100%;
        height: auto;
    }
`;
export const  Description = styled.div`
    padding: 12px;
    a{
        display: flex;
        justify-content: space-between;
        align-content: center;
        color: var(--cinza);
    }
        h4{
            font-size: 0.9rem;
            font-weight: 800;
            margim-bottom: 10px;
        }
`; 
export const  Itens = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column ;
    span{
    margin-bottom: 10px;
    }
`;
