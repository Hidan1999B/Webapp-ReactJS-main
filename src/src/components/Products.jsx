

import React from 'react'
import styled from 'styled-components'
import { mostSold } from '../data'
import PopularProducts from './PopularProducts'
const Container = styled.div`
padding: 20px;
display: flex;
align-items: center;
justify-content: center; 
flex-wrap:wrap;
position: relative;
align-items: center;

`

function Products() {
    return(
        <Container>

    {mostSold.map(item=>(
        <PopularProducts item = {item}/>

    ))}
        </Container>
    )
}
export default Products

