import styled from "styled-components";
import {mobile} from "../responsive"
import {Link} from "react-router-dom";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("https://img.freepik.com/free-vector/gradient-spheres-background_52683-76367.jpg?w=2000"), center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;


const Wrapper = styled.div`
  width: 35%;
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
  flex-wrap: wrap;

`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register=()=>{
    return (
        <Container>
            <Wrapper>
                <Title>Створити акаунт</Title>
                <Form>
                    <Input placeholder="name"/>
                    <Input placeholder="last name"/>
                    <Input placeholder="username"/>
                    <Input placeholder="email"/>
                    <Input placeholder="password"/>
                    <Input placeholder="confirm password"/>
                    <Agreement>Створюючи обліковий запис, я даю згоду на обробку моїх персональних даних відповідно до <b>ПОЛІТИКИ КОНФІДЕНЦІЙНОСТІ</b>
                    </Agreement>
                    <Button>
                        <Link to={`/`}>Створити</Link>
                    </Button>
                </Form>
            </Wrapper>
        </Container>
    );
}

export default Register;
