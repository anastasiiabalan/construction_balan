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
                <Title>Ваше Вподобане</Title>
                <Top>
                    <TopButton>Продовжуй шукати</TopButton>
                    <TopTexts>
                        <TopText>Вподобане(2)</TopText>
                    </TopTexts>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://dim.lviv.ua/files/09-2018/ad2876/15382297501192883891_large.jpg"/>
                                <Details>
                                    <ProductName><b>Приміщення: </b>Трьохкімнатна квартира (оренда)</ProductName>
                                    <ProductId><b>ID: </b>12456556</ProductId>
                                    <ProductSize><b>Кількість кімнат: </b>3</ProductSize>
                                    <ProductType><b>Тип: </b>Оренда</ProductType>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>₴ 12000</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image src="https://borisstudio.com/wp-content/webp-express/webp-images/uploads/2023/02/dizajn-dvuhkomnatnoj2-1.jpeg.webp"/>
                                <Details>
                                    <ProductName><b>Приміщення: </b>Двокімнатна квартира (продаж)</ProductName>
                                    <ProductId><b>ID: </b>4573339939</ProductId>
                                    <ProductSize><b>Кількість кімнат: </b>2</ProductSize>
                                    <ProductType><b>Тип: </b>Продаж</ProductType>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>60 000$</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    );
}

export default Cart;
