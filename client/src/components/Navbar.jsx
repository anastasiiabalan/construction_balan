import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import {ShoppingCartOutlined} from "@mui/icons-material";
import FavoriteIcon from '@mui/icons-material/Favorite';

import {mobile} from "../responsive"
import {Link} from "react-router-dom";

const Container =styled.div`
  height: 90px;
  ${mobile({height:"85px"})}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({padding:"10px 0px"})}
`;

const Left =styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language =styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display:"none"})}

`;

const SearchContainer =styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: 0;
  ${mobile({width:"40px"})}

`;

const Center =styled.div`
  flex: 1;
  text-align: center;
`;

const LogoText = styled.h1`
  font-weight: bold;
  font-size: 20px;
  ${mobile({fontSize:"25px"})}
  

`;

const Right =styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex:2, justifyContent:"center"})}

`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({fontSize:"12px", marginLeft:"10px"})}
`;

const Navbar=()=>{
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>UA</Language>
                    <SearchContainer>
                        <Input placeholder="Пошук"/>
                        <SearchIcon style={{color:"grey", fontSize: 16}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Link to={`/`}>
                        <LogoText>Садиба ручної роботи</LogoText>
                    </Link>
                </Center>
                <Right>
                    <Link to={`/register`}>
                        <MenuItem>Реєстрація</MenuItem>
                    </Link>
                    <Link to={`login`}>
                        <MenuItem>Вхід</MenuItem>
                    </Link>
                    <Link to={`chatWindow`}>
                        <MenuItem>Чат</MenuItem>
                    </Link>
                    <Link to={`/cart`}>
                        <MenuItem>
                            <Badge badgeContent={1} color="primary">
                                <ShoppingCartOutlined/>
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    );
}

export default Navbar;
