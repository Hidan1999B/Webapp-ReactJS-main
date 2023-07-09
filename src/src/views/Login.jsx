import styled from "styled-components";


const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background-color: pink;
`
const Wrapper = styled.div`
padding: 20px;
width: 25%;
background-color: white;
`
const Form = styled.form`
display: flex;
flex-direction: column;
`
const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`

const Button = styled.button`
width: 25%;
border: none;
margin: 15px 0px;
padding: 15px 15px;
background-color: pink;
color: white;
cursor:pointer;
`
const Link = styled.a`
margin: 5px 0px;
font-size: 15px;
text-decoration: underline;
cursor: pointer;

`
const Login = () => {
    return(
        <Container>
            <Wrapper>
                <Title>Sign In</Title>
                <Form>

                    <Input placeholder="username"/>
                    <Input placeholder="password"/>
                    <Button>LOG IN</Button>
                    <Link>Forgot Password?</Link>
                    <Link>Don't have an account?</Link>
                    
                
                </Form>

            </Wrapper>
        </Container>


    )

}

export default Login