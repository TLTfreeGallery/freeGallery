import React, { Component } from 'react'
import {
  LogButton,
  LogWrapper
} from '../../ui/components/header/index.jsx'

import {
  ModalBackDrop,
  ModalBody,
  ModalInput,
  ModalForm,
  ModalButton,
  ModalNavigationWrap,
  ModalTitle
} from '../../ui/components/modal/index.jsx'
import _ from 'lodash'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import { user } from '../../actions/user'

const mapStateToProps = ({ user }) => ({

})

const mapDispachToProps = dispatch => bindActionCreators({

}, dispatch)

class Modal extends Component {

    render() {
			const { isLogin } = this.props

        return (
          <div>
            <ModalBackDrop />
            <ModalBody>
              <ModalTitle>
                {this.props.title}
              </ModalTitle>
              <ModalForm>
              {this.props.modalBody}
                <ModalNavigationWrap>
                  <ModalButton>
                    {this.props.cancelButtonText}
                  </ModalButton>
                  <ModalButton>
                    {this.props.acceptButtonText}
                  </ModalButton>
                </ModalNavigationWrap>
              </ModalForm>
            </ModalBody>
          </div>
        )
    }
}
export default connect(mapStateToProps, mapDispachToProps)(Modal)
