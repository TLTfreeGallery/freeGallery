import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header/index'
import Footer from './components/footer/index'
import Category from './components/category/index'
import { Wrapper, Row, ImgWrapper } from './ui/core/index.jsx'

class App extends Component {

  render() {
    var image = [{name: 'images1', src: './images/standart-img.jpg'},
    {name: 'images2', src: './jcnjs/.'},
    {name: 'images3', src: './images/standart-img.jpg'},
    {name: 'images4', src: './jcnjs/.'},
    {name: 'images1', src: './jcnjs/.'},];
    return (
      <Wrapper>
          <Header />
          <Category />
          <Row>
          {image.map(key => (
            <ImgWrapper image={key.src}>{key.name} {key.src}</ImgWrapper>
          ))}
          </Row>
          {/*<Grid />*/}
          <Footer />
      </Wrapper>
    );
  }
}


export default App;
