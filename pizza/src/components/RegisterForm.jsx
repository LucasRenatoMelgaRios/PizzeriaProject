// RegisterForm.js
import styled from 'styled-components';

const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const FormContainer = styled.div`
  width: 400px;
  padding: 70px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 382px;
  padding: 8px;
  margin-bottom: 3px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;

const SelectLabel = styled.p`
  text-align: left;
  margin-bottom: 3px;
`;

const InputLabel = styled.p`
  text-align: left;
  margin-bottom: 2px;
  font-size: 12px;
`;

export const RegisterForm = () => {
    const generateOptions = (start, end) => {
        const options = [];
        for (let i = start; i <= end; i++) {
          options.push(<option key={i} value={i}>{i}</option>);
        }
        return options;
      };

    return (
      <RegisterWrapper>
        <FormContainer>
          <Title>Register here</Title>
          <form>
            <InputLabel>First Name⭐</InputLabel>
            <Input type="text" placeholder="e.g John" required/>
  
            <InputLabel>Surname⭐</InputLabel>
            <Input type="text" placeholder="e.g Ramirez" required/>
  
            <SelectLabel>Gender:</SelectLabel>
            <Select>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select>
  
            <InputLabel>Email Address⭐</InputLabel>
            <Input type="email" placeholder="" required/>
  
            <InputLabel>ID number</InputLabel>
            <Input type="text" placeholder="Accumulate bonus points" />
  
            <InputLabel>Phone Number⭐</InputLabel>
            <Input type="text" placeholder="So we can contact you" required/>
  
            <InputLabel>Password⭐</InputLabel>
            <Input type="password" placeholder="" required/>
  
            <InputLabel>Password Confirmation⭐</InputLabel>
            <Input type="password" placeholder="" required/>
  
            <InputLabel>Birthday⭐</InputLabel>
            <div style={{ display: 'flex', marginBottom: '10px' }}>
              <InputLabel style={{ flex: 1, marginRight: '5px' }}required>Day:</InputLabel>
              <InputLabel style={{ flex: 1, marginRight: '5px' }}required>Month:</InputLabel>
              <InputLabel style={{ flex: 1 }}required>Year:</InputLabel>
            </div>
  
            <div style={{ display: 'flex', marginBottom: '10px' }}>
            <Select style={{ flex: 1, marginRight: '5px' }}>
              <option value="">Día</option>
              {generateOptions(1, 31)}
            </Select>
            <Select style={{ flex: 1, marginRight: '5px' }}>
              <option value="">Mes</option>
              {generateOptions(1, 12)}
            </Select>
            <Select style={{ flex: 1 }}>
              <option value="">Año</option>
              {generateOptions(2000, new Date().getFullYear())}
            </Select>
          </div>

  
            <Button type="submit">Complete Registration</Button>
          </form>
        </FormContainer>
      </RegisterWrapper>
    );
  };

