import styled from "styled-components";

const ConfirmPurchasePage = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 0px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const AdressContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 0px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #000000;
`;

const Subtitle = styled.h2`
  margin-bottom: 10px;
  color: #ff0000;

`;

const CartItem = styled.div`
  margin-bottom: 20px;
`;

const CartItemName = styled.p`
  font-weight: bold;
  color: #000000;

`;

const CartItemDetail = styled.p`
  margin: 5px 0;
  color: #000000;

`;

const Total = styled.p`
  font-weight: bold;
  margin-top: 20px;
  color: #ff0000;

`;

const DeliverySection = styled.div`
  margin-top: 30px;
`;

const DeliveryTitle = styled.h2`
  margin-bottom: 10px;
  color: #000000;

`;

const CurrentAddressText = styled.p`
  font-weight: bold;
  color: #000000;

`;

const DeliveryInput = styled.input`
  background-color: #ffffff;
  border-color: white;
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  box-sizing: border-box;
`;

const Mensaje = styled.p`
    color: red;
`;

const PaymentTitle = styled.h2`
  text-align: center;
  margin-bottom: 10px;
  color: #000000;
`;

const PaymentContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 0px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;



const PaymentText = styled.p`
  color: #000000;
`;

const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
`;

const PaymentOption = styled.label`
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


export const ConfirmPurchase = () => {
  const cartItems = [
    {
      id: 1,
      name: "Producto 1",
      quantity: 2,
      price: 19.99,
    },
    {
      id: 2,
      name: "Producto 2",
      quantity: 1,
      price: 29.99,
    },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <><ConfirmPurchasePage>
          <Title>Confirm Purchase</Title>
          <Subtitle>Your cart contains:</Subtitle>
          {cartItems.map((item) => (
              <CartItem key={item.id}>
                  <CartItemName>Product Name: {item.name}</CartItemName>
                  <CartItemDetail>Quantity: {item.quantity}</CartItemDetail>
                  <CartItemDetail>Price: ${item.price}</CartItemDetail>
              </CartItem>
          ))}
          <Total>Total: ${total.toFixed(2)}</Total>
          </ConfirmPurchasePage>
      <AdressContainer>
      <DeliverySection>
        <DeliveryTitle>Where shall we take it?</DeliveryTitle>
        <CurrentAddressText>Your current address:</CurrentAddressText>
        <DeliveryInput type="text" placeholder="Fovani II Ed. A18" />
        <Mensaje>Change your adress if necessary</Mensaje>
      </DeliverySection>
      </AdressContainer>
      
      <PaymentContainer>
            <PaymentTitle>Payment method ⭐</PaymentTitle>
            <PaymentText>Choose your favorite payment method</PaymentText>
            <PaymentOptions>
                <PaymentOption>
                <input type="radio" id="payWithCash" name="paymentMethod" />
                <label htmlFor="payWithCash" style={{ color: 'black' }}>Pay with cash</label>
                </PaymentOption>
            <PaymentOption>
              <input type="radio" id="payWithCard" name="paymentMethod" />
              <label htmlFor="payWithCard" style={{ color: 'black' }}>Pay with card</label>
            </PaymentOption>
                </PaymentOptions>
                <BuyButton>Confirm Order</BuyButton>
            
      </PaymentContainer>
      </>
  );
};
