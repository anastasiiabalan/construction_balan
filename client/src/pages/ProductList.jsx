import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import {mobile} from "../responsive"

const Container = styled.div`
`;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({width:"0px 20px", display:"flex", flexDirection:"column"})}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({marginRight:"0px"})}

`;

const Select =styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({margin:"10px 0px"})}

`;

const Option = styled.option`
`;

const ProductList=(item)=>{
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>Для консультації і замовлення виробу під ваші заміри перейдіть на вкладку "Чат"</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Фільтри:</FilterText>
                    <Select>
                        <Option disabled selected>Категорія</Option>
                        <Option>Бісер</Option>
                        <Option>Дерево</Option>
                        <Option>Полімерна глина</Option>
                        <Option>Картини</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Сортувати за:</FilterText>
                    <Select>
                        <Option selected>Найновіші</Option>
                        <Option>Ціна (зростанням)</Option>
                        <Option>Ціна (спаданням)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={item.cat}/>
            <Newsletter/>
            <Footer/>
        </Container>
    );
}

export default ProductList;
