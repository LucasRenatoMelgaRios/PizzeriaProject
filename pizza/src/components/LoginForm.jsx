// LoginForm.js
import styled from 'styled-components';

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoginFormContainer = styled.div`
  width: 300px;
  padding: 50px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #62B24D;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #5ea04e;
  }
`;

const ForgotPasswordLink = styled.a`
  text-align: right;
  display: block;
  color: #ff0000;
  text-decoration: none;
  margin-top: 8px;
  margin-bottom: 10px;
  &:hover {
    text-decoration: underline;
  }
`;

const RegisterContainer = styled.div`
  width: 360px;
  text-align: center;
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const RegisterButton = styled.button`
  width: 310px;
  padding: 10px;
  background-color: #62B24D;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #5ea04e;
  }
`;


const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const LoginForm = () => {
  return (
    <LoginWrapper>
      <FormContainer>
        <LoginFormContainer>
          <Title>Login</Title>
          <form>
            <p></p>
            <Input type="text" placeholder="some@gmail.com" />
            <Input type="password" placeholder="password" />
            <ForgotPasswordLink href="#">Forgot your password?</ForgotPasswordLink>
            <Button type="submit">Log in</Button>
          </form>
        </LoginFormContainer>

        
        <RegisterContainer>
          <p>Don't have an account yet?</p>
          <RegisterButton>Register</RegisterButton>
        </RegisterContainer>
      </FormContainer>
    </LoginWrapper>
  );
};
