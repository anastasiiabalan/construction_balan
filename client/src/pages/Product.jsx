import React, {useState} from "react";

import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import {Add, Remove} from "@mui/icons-material";
import {mobile} from "../responsive"


const Container = styled.div`
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({padding:"10px", flexDirection:"column"})}

`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({height:"40vh"})}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({padding:"10px"})}
`;

const Title = styled.h1`
    font-weight: 200;
    font-size: 30px;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 30px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({width:"100%"})}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterSize = styled.select`
  //width: 20px;
  //height: 20px;
  //border-right: 50px;
  //background-color: #fff;
  //margin: 0px 5px;
  //cursor: pointer;

  margin-left: 10px;
  padding: 10px;
`;

const FilterSizeOption = styled.option`
`;

const FilterType = styled.select`
  margin-left: 10px;
  padding: 13px;
  
`;

const FilterTypeOption = styled.option`
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({width:"100%"})}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  
  &:hover{
    background-color: #f8f4f4;
  }
`;


const Product=()=>{
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImgContainer>
                    <Image src="https://optim.tildacdn.com/stor6237-6161-4733-b033-633763333834/-/format/webp/77801552.jpg"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Круглий стіл із горіха та епоксидної смоли</Title>
                    <Desc>
                        Даний варіант столу виглядає дуже ніжно та елегантно. Він стане уюбленим  місцем на вашій кухні чи вітальні. Тож якщо ви шукали оригінальний, якісний та надійний стіл - цей точно стане таким, а ще він є в наявності, тож мерщій замовляй, поки він не приглянувся якійсь іншій леді.

                        <br/><br/>На фото стіл розміром: 90 см. ідеально для 4 персон ✔️
                        <br/>Металеві ніжки білого кольору, покриті якісною порошковою фарбою максимально захищені і стійкі до пошкоджень.

                        <br/><br/>Можемо виконати такий стіл у потрібних вам розмірах та кольорі. Для цього перейдіть в вкладку "Чат" і введіть "room7". Також разом зі столом можна замовити стільці і отримати кухню, наче з Pinterest

                        <br/><br/><b>Даний стіл є в наявності і готовий до відправки.</b>

                    </Desc>
                    <Price><b>19 990 ₴</b></Price>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>У кошик</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    );
}

export default Product;
