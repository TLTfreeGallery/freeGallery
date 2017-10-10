import React, { Component } from 'react'
// import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import { shouldUpdate } from 'recompose'


import { user } from '../../actions/user'

const mapStateToProps = ({ user, auth }) => ({
	userSettings: user.userSettings,
})

const mapDispachToProps = dispatch => bindActionCreators({

}, dispatch)

// @withRouter
// @connect(mapStateToProps, mapDispachToProps)
class Header extends Component {

	render() {
		// const { userSettings } = this.props

		return (
      <div>
        Header
      </div>
		)
	}
}

export default connect(mapStateToProps, mapDispachToProps)(Header)
