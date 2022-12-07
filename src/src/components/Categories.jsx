import styled from 'styled-components';
import React from 'react';
import { categories } from '../data';
import CategoriesItems from './CategoryItems';

const Container = styled.div`
display: flex;
justify-content: space-between;
@media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0px;
    }
`

function Categories() {
    return(
        <Container>
            {categories.map((item) =>(
                <CategoriesItems item={item}/>
            ))}


        </Container>
    )
}

export default Categories