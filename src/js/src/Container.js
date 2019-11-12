import React from 'react'
import styled from 'styled-components';

const ContainerContainer = styled.div`
    width: 1400px;
    margin: 0 auto;
    text-align: center;
`;

const Container = props => {
    return (
        <ContainerContainer>
            {props.children}
        </ContainerContainer>    
    );
}

export default Container;