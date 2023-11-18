// Sidebar.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SidebarContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 200px;
  padding: 0px;
  background-color: #f8f9fa;
  border-right: 1px solid #ccc;
  height: 100vh;
`;

const UserImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const WelcomeMessage = styled.p`
  text-align: center;
  margin-bottom: 10px;
`;

const SidebarButton = styled(Link)`
  width: 1;
  display: block;
  padding: 10px;
  margin-bottom: 0; /* Quitamos el margen inferior */
  background-color: #ff1100;
  color: #fff;
  text-decoration: none;
  border-radius: 0px;
  transition: background-color 0.3s, color 0.3s; /* Agregamos transición */
  &:hover {
    background-color: #b30000;
    color: #fff;
  }
`;

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <UserImage src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-rouge.png" alt="User" />
      <WelcomeMessage>Welcome, Lucas</WelcomeMessage>
      <SidebarButton to="/latest-deals">Latest Deals</SidebarButton>
      <SidebarButton to="/latest-orders">Latest Orders</SidebarButton>
    </SidebarContainer>
  );
};
