import styled from "styled-components";

export function LatestDeals() {
  return (
    <Container>
      <Mensaje>Hola</Mensaje>
      <Titulo>Este es el título</Titulo>
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  margin-left: 200px; /* Ancho del Sidebar */
  padding: 20px; /* Añade espacio interno si es necesario */
  color: #000000; /* Agregamos color de texto */
`;

const Mensaje = styled.h1`
  text-align: center;
`;

const Titulo = styled.h2``;
