import react from 'react'
import Annoucements from '../components/Annoucements'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Footer from '../components/Footer'
import BarCategories from '../components/BarCategories'
import { Add, CardGiftcardOutlined, CheckRounded, GifOutlined, Remove } from '@material-ui/icons'

const Container = styled.div`
 
`
const Wrapper = styled.div`
 padding: 40px;
 display: flex;
`
const AnnoucementsWrapper = styled.div`
background: rgb(246, 255, 240);
display: flex;
justify-content: center;
align-items: center;
border-top: 1px solid;

`
const AnnoucementsTitle = styled.h1`
padding: 10px;
font-family: sans-serif;
font-size: 15px;
`
const AnnoucementsDesc = styled.h1`
padding: 10px;
font-family: sans-serif;
font-size: 10px;
`
const AnnoucementsInfo = styled.div`
flex-direction: column;
display: flex;
justify-content: center;
align-items: center;
`

const ImgContainer = styled.div`
flex: 1;
`
const Img = styled.img`
width: 80%;
height: 70vh;
`
const InfoContainer = styled.div`
flex: 1;
padding: 0px; 50px;
`
const Title = styled.h1`
font-weight: 200;
font-family: sans-serif;
`
const Desc = styled.p`
margin: 20px 0px;
`
const Price = styled.span`
font-weight: 100;
font-size: 25px;
font-family: sans-serif;
margin-left: 25px;
`
const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
`
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`
const Amount= styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 10px 5px; 
`
const Button= styled.button`
padding: 15px;
border: 2px solid teal;
background-color: pink;
cursor: pointer;
font-weight: 500;
margin-right: 120px;
border-radius: 8px;

&:hover {
    background: #f8f4f4;
}
`
function SinglePage() {
    return (
       <Container>
       <Annoucements/>    
        <Navbar/>
        <BarCategories/>
        <AnnoucementsWrapper>
        <AnnoucementsInfo>
        <AnnoucementsTitle> 20% rabat på din ordre</AnnoucementsTitle >
        < AnnoucementsDesc> Denne kampagne udløber om 21 timer. Gælder kun 1 ordre over 199 kr indtil kl. 23.59</AnnoucementsDesc>
        </AnnoucementsInfo>

        </AnnoucementsWrapper>
        <Wrapper>
            <ImgContainer>
            <Img src = "https://img.ltwebstatic.com/images3_pi/2022/10/27/1666864195f08795618f2c965ee6692bde5cd54e6a_thumbnail_750x.webp"/>
            </ImgContainer>
            <InfoContainer>
            <Title>Dress</Title>
            <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Desc>
            <Price>€ 5</Price> 
            <AddContainer>
            <AmountContainer>
            <Remove style = {{cursor: "pointer"}}/>
            <Amount>1</Amount> 
    
            <Add style={{cursor: "pointer"}}/>    
            </AmountContainer>
            <Button>ADD TO CART</Button>  

            </AddContainer>
   
            </InfoContainer>
           

        </Wrapper>
        <Newsletter/>
        <Footer/>
        </Container> 
    )

}
export default SinglePage