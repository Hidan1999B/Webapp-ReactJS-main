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
width: 40%;
background-color: white;
`
const Form = styled.form`
display: flex;
flex-wrap: wrap;
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
const Agreement = styled.span`
font-size 12px;
margin: 20px 0px;
`
const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: pink;
color: white;
cursor:pointer;
`

const Register = () => {
    return(
        <Container>
            <Wrapper>
                <Title>Create your account</Title>
                <Form>
                   <Input placeholder="First name"/>
                   <Input placeholder="Last name"/>
                    <Input placeholder="username"/>
                    <Input placeholder="email"/>
                    <Input placeholder="password"/>
                    <Input placeholder="confirm password"/>
                    <Agreement>
                        By creating an account, I consent to processing of my personal data
                        in accordance with the Privacy Policy.
                    </Agreement>
                    <Button>CONTINUE</Button>
                    
                
                </Form>

            </Wrapper>
        </Container>


    )

}

export default Register