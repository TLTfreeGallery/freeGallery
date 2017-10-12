import React, { Component } from 'react'
import {
  LogButton,
  LogWrapper
} from '../../ui/components/header/index.jsx'
import _ from 'lodash'
import Modal from '../modal/index.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import { user } from '../../actions/user'

const mapStateToProps = ({ user }) => ({
	isLogin: user.isLogin,
})

const mapDispachToProps = dispatch => bindActionCreators({

}, dispatch)

class AuthBlock extends Component {

  state = {
    ModalToDo: false,
  }


  showLogInModal = () => {
    this.setState({ ModalToDo: 'log' })
  }
  showSignUpModal = () => {
    this.setState({ ModalToDo: 'sign' })
  }
    render() {
			const { isLogin } = this.props
      const { ModalToDo } = this.state

        return (
          !isLogin &&
          <LogWrapper>
            <Modal
              title={
                `Are you wont ${ModalToDo === 'sign' ? 'Log in' :
                ModalToDo === 'log' ? 'Sign up' : null }`}/>
            <LogButton onClick={this.showLogInModal}>
              Log In
            </LogButton>
            <LogButton onClick={this.showSignUpModal}>
              Sign Up
            </LogButton>
          </LogWrapper>
        )
    }
}
export default connect(mapStateToProps, mapDispachToProps)(AuthBlock)
