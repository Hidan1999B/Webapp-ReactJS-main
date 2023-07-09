import react from 'react'
import Annoucements from '../components/Annoucements'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Footer from '../components/Footer'
import BarCategories from '../components/BarCategories'

const Container = styled.div`
 
`
const Title = styled.h1`
 
`
const FilterContainer = styled.div`
 display: flex;
 justify-content: space-between;
`
const Filter = styled.div`
margin: 20px;
`
const FilterText = styled.span`
font-size: 18px;
font-weight: 600px;
`
const Selector = styled.select`
margin: 5px;

`
const Option = styled.option`

`

function ProductPage() {
    return (
       <Container>
       <Annoucements/>    
        <Navbar/>
        <BarCategories/>
        <Title>Title</Title>
        <FilterContainer>
        <Filter><FilterText>Filter by Products:</FilterText>
        <Selector>
            <Option>Black</Option>
            <Option>Blue</Option>
            <Option>White</Option>

        </Selector>
        <Selector>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            </Selector>

        </Filter>
        <Filter><FilterText>Filter by Size:</FilterText>
        <Selector>
            <Option>price (asc)</Option>
            <Option>price (desc)</Option>
            <Option>Newest</Option>
            </Selector>

            </Filter>
            
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
        </Container> 
    )

}
export default ProductPage