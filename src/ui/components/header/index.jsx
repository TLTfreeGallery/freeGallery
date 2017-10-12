import styled from 'styled-components'

export const HeaderWrapper = styled.header`
    width: 100%;
    min-height: 75px;
    background: ${props => props.background ? props.background : '#ecf0f1'};
    display: flex;
    align-items: center;
`

export const NavMenu = styled.nav`
    display: flex;
    max-width: 700px;
    align-items: center;
    min-height: 75px;
`

export const NavLink = styled.a`
    flex-grow: 1;
    display: flex;
    text-align: center;
    border-radius: 17px;
    box-shadow: none;
    padding: 5px 15px;
    margin-left: 7.5px;
    margin-right: 7.5px;
    border-style: solid;
    background: ${props => props.isActive ? '#2ecc71' : '#ffffff'};
    border-color: ${props => props.isActive ? '#2ecc71' : '#ffffff'};
    border-width: 2px;
    color: ${props => props.isActive ? '#ffffff' : '#2ecc71'};
    text-decoration: none;
    text-transform: uppercase;
    transition-duration: 0.4s;
    &:hover {
        border-color: #ffffff;
        background: #2ecc71;
        color: #ffffff;
        cursor: pointer;
    }
`

export const CartIcon = styled.div`
    position: relative;
    width: 60px;
    height: 60px;
    background-image: url(/images/header/cart.svg);
    background-repeat: no-repeat;
    cursor: pointer;
    &:hover {

    }
`

export const CartIconCounter = styled.div`
    position: absolute;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    border: 2px solid #ffffff;
    background: #2ecc71;
    color: ${props => props.background ? props.background : '#ffffff' };
    transition-duration: 0.4s;
    &:hover {
        border-style: solid;
        background: #ffffff;
        border-color: #2ecc71;
        color: #2ecc71;
    }
`

export const MiniFavoriteList = styled.ul`
  position: absolute;
  width: calc(150px - 20px);
  min-height: 30px;
  left: -105px;
  bottom: -80px;
  display: flex;
  flex-direction: column;
  border: 2px solid #2ecc71;
  background: rgba(255, 255, 255, 1);
  z-index: 10;
`

export const MiniFavoriteItems = styled.li`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
`
export const MiniFavoritePreview = styled.div`
  width: 60px;
  height: 50px;
  background-image: url(${props => props.img ? props.img : './images/default/default.png' });
  background-size: contain;
  background-repeat: no-repeat;

`
export const MiniFavoriteName = styled.div`
  text-transform: uppercase;
  text-align: center;
`
