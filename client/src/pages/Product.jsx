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
  
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
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
                    <Image src="https://borisstudio.com/wp-content/webp-express/webp-images/uploads/2023/02/dizajn-dvuhkomnatnoj2-1.jpeg.webp"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Двокімнатна квартира (продаж)</Title>
                    <Desc>
                        MANHATTAN БУДИНОК №6 квартира з видом на ОЗЕРО<br/>
                        ЦІНА 60 000$<br/>
                        БЕЗ КОМІСІЙ!<br/>
                        ЗДАЧА БУДИНКУ КІНЕЦЬ 2023 РОКУ!<br/>
                        КВАРТИРА ПІСЛЯ ОБМІРІВ БТІ<br/>

                        Продаж 2 кімнатної квартири!<br/>
                        - Пощею: 49.4м.<br/>
                        - Поверх 8/16й.<br/>
                        - Панорама з вікон на озеро і ГОРИ<br/>
                        - 2 ліфти<br/>
                        - Внутрішнє подвір"я з дитячими майданчиками<br/>
                        - Енергозберігаючі панорамні алюмінієві системи<br/>
                        - Лічильники на всі внутрішні мережі<br/>
                        - Вхідні двері преміум класу<br/>
                        - Простора багатофункціональна кухня<br/><br/>

                        Будинок №6 на етапі будівництва, зараз виконуються такі роботи:<br/><br/>

                        Завершено оздоблення фасаду.<br/>
                        Завершено штукатурення квартир.<br/>
                        Завершено штукатурення сходових.<br/>
                        Завершено влаштування внутрішніх електричних мереж.<br/>
                        Завершено залиття сухих стяжок у коридорах та на балконах.<br/>
                        Виконано оздоблення під’їздів на 85%.<br/>
                        Завершено монтаж ліфтів.<br/>
                        Виконано монтаж конструкцій балконних перил на 70%.<br/>
                        Для того, щоб домоаитися за огляд кімнати ввійдіть в свій акаут під назвою ротиіщення "room1" і наш ріелтор відповість Вам
                    </Desc>
                    <Price>60 000$</Price>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    );
}

export default Product;