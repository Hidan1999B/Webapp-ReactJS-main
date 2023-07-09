import styled from "styled-components";
import Annoucements from "../components/Annoucements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Add, Remove } from "@material-ui/icons";
const Container = styled.div`

`
const Wrapper= styled.div`
padding: 20px;

`
const Top= styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;

`
const Title= styled.h1`
text-align: center;

`
const TopBtn= styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props=> props.type === "filled" && "none"};
background-color: ${props=> props.type === "filled" ? "black" : "transparent"};
color: ${props=> props.type === "filled" && "white"};
`
const TopTextSection = styled.div`
`
const TopTexts = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`
const Bottom = styled.div`
display: flex;
justify-content: space-between;
`
const Info = styled.div`
flex: 3;
`
const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height:  50vh;
margin: 50px 0px;
`
const Product = styled.div`
display: flex;
justify-content: space-between;
`
const Details = styled.div`
flex: 2;
display: flex;
`
const Image = styled.img`
width: 200px;

`
const ProductInformation = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;

`
const Id = styled.span`


`
const ProductName = styled.span`


`

const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => props.color}
`
const ProductSize = styled.span`


`
const PriceDetails = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`
const ProductContainer = styled.span`

display: flex;
align-items: center;
margin-bottom: 20px;
`
const ProductAmount = styled.span`
font-size: 24px;
margin: 5px;
`
const ProductPrice = styled.span`
font-size: 15px;

`
const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
`
const SummaryTitle = styled.h1`
font-weight: 200;
`
const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=> props.type ==="total" && "500"};
font-size: ${props=> props.type ==="total" && "24px"};
`
const SummaryItemText = styled.span`
text-align: center;
`
const SummaryItemPrice = styled.span`
`
const SummaryButton = styled.button`
width: 100%;
padding: 10px;
background-color: pink;
color: white;
font-weight: 600;
`
const Cart = () => {
    return(

<Container>
    
    <Navbar/>
    <Annoucements/>
    <Wrapper>
        <Title>CART</Title>
        <Top>
            <TopBtn>Shop More?</TopBtn>
            <TopTextSection>
                <TopTexts>CART (2)</TopTexts>
                <TopTexts>WISH LIST (0)</TopTexts>
            </TopTextSection>
            <TopBtn type= "filled">CHECKOUT</TopBtn>
        </Top>
        <Bottom>
            <Info>
                <Product>
                    <Details>
                        <Image src="https://cld.accentuate.io/5345087946909/1663072745404/Madrid_Black-Black_3-Quarter_Product-Card-1380.png?v=1669163188292&options=w1000"/>
                        <ProductInformation>
                            <ProductName><b>PRODUCT:</b> Nike Air 70s</ProductName>
                            <Id><b>ID: </b>521521512</Id>
                            <ProductColor color= "black"/>
                            <ProductSize><b>SIZE: </b>35.5</ProductSize>
                        </ProductInformation>
                    </Details>
                    <PriceDetails>
                        <ProductContainer>
                            <Add style={{cursor: "pointer"}}/>
                            <ProductAmount>2</ProductAmount>
                            <Remove style={{cursor: "pointer"}}/>
                        </ProductContainer>
                        <ProductPrice>$ 30.00</ProductPrice>
                    </PriceDetails>
                </Product>
                <Hr/>
                <Product>
                    <Details>
                        <Image src="https://cld.accentuate.io/5345087946909/1663072745404/Madrid_Black-Black_3-Quarter_Product-Card-1380.png?v=1669163188292&options=w1000"/>
                        <ProductInformation>
                            <ProductName><b>PRODUCT:</b> Nike Air 70s</ProductName>
                            <Id><b>ID: </b>521521512</Id>
                            <ProductColor color= "black"/>
                            <ProductSize><b>SIZE: </b>35.5</ProductSize>
                        </ProductInformation>
                    </Details>
                    <PriceDetails>
                        <ProductContainer>
                            <Add/>
                            <ProductAmount>2</ProductAmount>
                            <Remove/>
                        </ProductContainer>
                        <ProductPrice>$ 30.00</ProductPrice>
                    </PriceDetails>
                </Product>
            </Info>
            <Summary>
                <SummaryTitle>ORDER DESCRIPTION</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>SUBTOTAL:</SummaryItemText>
                    <SummaryItemPrice>$ 60</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>ESTIMATED SHIPPING:</SummaryItemText>
                    <SummaryItemPrice>$ 5.99</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type = "total">
                    <SummaryItemText >TOTAL:</SummaryItemText>
                    <SummaryItemPrice>$ 66.00</SummaryItemPrice>
                </SummaryItem>
                <SummaryButton>CHECKOUT NOW</SummaryButton>
            </Summary>
        </Bottom>

    </Wrapper>
    <Footer/>
</Container>
)
}

export default Cart