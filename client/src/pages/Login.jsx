import styled from "styled-components";
import {mobile} from "../responsive"


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("https://img.freepik.com/free-vector/gradient-glassmorphism-horizontal-banner_23-2149440108.jpg?w=2000"), center;

  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 23%;
  padding: 20px;
  background-color: white;
  ${mobile({width:"75%"})}

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
  color: black;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login=()=>{
    return (
        <Container>
            <Wrapper>
                <Title>Вхід</Title>
                <Form>
                    <Input placeholder="username"/>
                    <Input placeholder="password"/>
                    <Button>
                       Увійти
                    </Button>
                    <Link>Не пам'ятаєте пароль?</Link>
                    <Link to={`/`}>Реєстрація</Link>
                </Form>
            </Wrapper>
        </Container>
    );
}

export default Login;
