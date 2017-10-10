import React from 'react'
import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1960px;
    margin: 0 auto;
`
export const Row = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: calc(100% - 15px);
    min-height: 50px;
    padding: 7.5px;
`

export const ImgWrapper = styled.div`
    width: 30vw;
    height: 18vw;
    border: 2px solid #FD5B03;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 15px;
    margin-bottom: 15px;
    cursor: pointer;
    background-image: url(${props => props.image ? props.image : './images/standart-img.jpg'});
    background-size: cover;
`
