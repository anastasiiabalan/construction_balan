import styled from "styled-components";
import {Facebook, Google, Instagram, MailOutline, Payment, Phone, Room} from "@mui/icons-material";
import {mobile} from "../responsive"


const Container = styled.div`
  display: flex;
  ${mobile({flexDirection:"column"})}

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
`;

const Desc = styled.p`
    margin: 20px 0px;  
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 40%;
  color: white;
  background-color: #${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({display:"none"})}

`;

const Title = styled.h3`
    margin-bottom: 30px;
  
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;    
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({backgroundColor:"#eee"})}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payments = styled.img`
    width: 100%;
  
`;

const Footer=()=>{
    return (
        <Container>
            <Left>
                <Logo>Садиба ручної роботи</Logo>
                <Desc>Садиба ручної роботи</Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Google/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Корисні посилання</Title>
                <List>
                    <ListItem>Головна сторінка</ListItem>
                    <ListItem>Купівля</ListItem>
                    <ListItem>Повернення</ListItem>
                    <ListItem>Чат</ListItem>
                    <ListItem>Кошик</ListItem>
                    <ListItem>Умови</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Контактні дані:</Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}}/>
                    Адреса: вулиця Макухи, 2-Б, Івано-Франківськ, Івано-Франківська область, 76000
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/>Телефон: 0342 559 189
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}}/>Email: handmade_garden@gmail.com
                </ContactItem>
                <Payments src="https://clipground.com/images/credit-card-logos-png-15.png"/>
            </Right>
        </Container>
    );
}

export default Footer;
