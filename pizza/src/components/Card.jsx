import styled from "styled-components";

import promocion from '../assets/promocion.png'

const CardContainer = styled.div`
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 15px;
`;

const CardName = styled.h3`
  font-weight: bold;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  margin-bottom: 10px;
`;

const CardPrice = styled.p`
  font-weight: bold;
  color: #007bff;
  margin-bottom: 10px;
`;

const BuyButton = styled.button`
  background-color: #28a745;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: #218838;
  }
`;

export const Card = ({ image, name, description, price }) => {
  return (
    <CardContainer>
      <CardImage src={promocion} alt={name} />
      <CardContent>
        <CardName>{name}</CardName>
        <CardDescription>{description}</CardDescription>
        <CardPrice>${price}</CardPrice>
        <BuyButton>Select</BuyButton>
      </CardContent>
    </CardContainer>
  );
};

