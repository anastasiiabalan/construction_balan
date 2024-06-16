import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import {Add, Remove} from "@mui/icons-material";
import {mobile} from "../responsive";
import { LOCALSTORE_TOTALITEMS } from "../models/constant";


const Container = styled.div`
`;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({padding:"10px"})}

`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props => props.type=== "filled" && "none"};
  background-color: ${props => 
          props.type=== "filled" ? "black" : "transparent"};
  color: ${props => props.type=== "filled" && "white"};
`;

const TopTexts = styled.div`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  ${mobile({display:"none"})}

`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 19px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection:"column"})}
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection:"column"})}

`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
    width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.div`
`;

const ProductId = styled.span`
`;

const ProductSize = styled.span`
    
`;

const ProductType = styled.span`
`;

const PriceDetail = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({margin:"5px 15px"})}

`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({marginBottom:"20px"})}

`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type==="total" && "500"};
  font-size: ${props => props.type==="total" && "24px"};

`;

const SummaryItemText = styled.span`
`;

const SummaryItemPrice = styled.span`
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  
`;

const Cart=()=>{

    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Title>Ваша корзина</Title>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://optim.tildacdn.com/stor6237-6161-4733-b033-633763333834/-/format/webp/77801552.jpg"/>
                                <Details>
                                    <ProductName><b>Виріб: </b>Круглий стіл із горіха та епоксидної смоли</ProductName>
                                    <ProductId><b>ID: </b>25734</ProductId>
                                    <ProductType><b>Тип: </b>Дерево</ProductType>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductPrice>₴ 19 900</ProductPrice>
                            </PriceDetail>
                        </Product>

                    </Info>

                    <Summary>
                        <SummaryTitle>Оформлення замовлення</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Вартість замовлення</SummaryItemText>
                            <SummaryItemPrice>₴ 19 900</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Доставка</SummaryItemText>
                            <SummaryItemPrice>₴ 100</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem type="total" >
                            <SummaryItemText>До оплати: </SummaryItemText>
                            <SummaryItemPrice>₴ 20 000</SummaryItemPrice>
                        </SummaryItem>
                        <Button>Оплатити безпечно</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    );
}

export default Cart;
