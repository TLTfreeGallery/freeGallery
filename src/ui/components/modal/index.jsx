import styled from 'styled-components'
import React from 'react'

export const ModalBackDrop = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  display: ${props => props.isShow || 'block'};
  background-color: rgba(100,100,100, 0.7);
  filter: blur(3px)
`

export const ModalBody = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  width: 36%;
  padding-top: 50px;
  z-index: 1001;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  background: rgba(255,255,255, 0.85)
`
export const ModalForm = styled.form`
  position: relative;
  width: 100%;
  padding-left: 55px;
  padding-right: 55px;
  z-index: 102;
  height: 100%;
`

export const ModalInput = styled.input`
  display: flex;
  flex-direction: row;
  width: 100%;
  background: none;
  font-weight: 500;
  border: none;
  border-bottom: 2px;
  border-bottom-color: #FD5B03;
  border-bottom-style: solid;
  margin-top: 25px;
  margin-bottom: 25px;
  font-size: 22px;
  padding-left: 10px;
`
export const ModalNavigationWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 70px;
`
export const ModalButton = styled.button`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    border: none;
    background-color: ${props => props.backgroundColor || 'rgba(70,70,70, 0.4)'};
    border-radius: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 25px;
    padding-right: 25px;
    font-weight: 600;
    cursor: pointer;
    transition-duration: 0.4s;
    &:hover {
        background: rgba(253,91,3,0.7);
        color: #ffffff;
    }

}
`
export const ModalTitle = styled.h1`
  width: 100%;
  margin-left: 55px;
  margun-right: 55px;
  font-size: 36px;
  text-align: center;
`
