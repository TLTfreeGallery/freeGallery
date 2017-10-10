import styled from 'styled-components' 
import React from 'react'

export const FooterWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 75px;
    background: ${props => props.background ? props.background : '#34495e'}
`