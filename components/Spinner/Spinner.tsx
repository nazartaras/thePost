import React from 'react';
import styled from 'styled-components';

const StyledSpinnerContainer = styled.div`
    width: 100%;
    display:flex;
    align-items:center;
    justify-content: center;
    z-index:4;
    margin: auto;
`

const Spinner:React.FunctionComponent = () => {
    return <StyledSpinnerContainer>
        <img src="/spinner.gif" alt="..."/>
    </StyledSpinnerContainer>
}

export default Spinner;