import styled from "styled-components"

export function LatestDeals (){
    return(
        <Container>
         <Mensaje>Hola</Mensaje>
        </Container>
    )
}

const Container = styled.div`
    background-color: black;
`;

const Mensaje = styled.h1`
    display: flex;

    text-align: center;
`;