import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header/index'
import Footer from './components/footer/index'
import Category from './components/category/index'
import { Wrapper, Row, ImgWrapper, ImgInform, Picture, ImgName, ImgNavigations, AddToFavorite } from './ui/core/index.jsx'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { user } from './actions/user'

const mapStateToProps = ({ user }) => ({

})

const mapDispachToProps = dispatch => bindActionCreators({
	addToCard: user.addToCard,
}, dispatch)

class App extends Component {
  addToFavorite = () => {
    this.props.addToCard()
  }
  render() {
    var image = [{name: 'images1', src: './images/standart-img.jpg'},
    {name: 'images2', src: './jcnjs/.'},
    {name: 'images3', src: './images/standart-img.jpg'},
    {name: 'images4', src: ''},
    {name: 'images1', },];
    return (
      <Wrapper>
          <Header />
          <Category />
          <Row>
          {image.map(key => (
            <ImgWrapper>
              <Picture image={key.src} />
              <ImgInform>
                <ImgName>{key.name}</ImgName>
                <ImgNavigations>
                  <AddToFavorite onClick={() => this.addToFavorite()} />
                </ImgNavigations>
              </ImgInform>
            </ImgWrapper>
          ))}
          </Row>
          {/*<Grid />*/}
          <Footer />
      </Wrapper>
    );
  }
}
export default connect(mapStateToProps, mapDispachToProps)(App)
