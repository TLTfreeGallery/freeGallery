import React, { Component } from 'react'
import { HeaderWrapper, NavMenu, NavLink, CartIcon, CartIconCounter } from '../../ui/components/header/index.jsx'
import MiniFavorite from './miniFavorite'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { user } from '../../actions/user'

const mapStateToProps = ({ user }) => ({
	userSettings: user.userSettings,
	isShow: user.isShow,
	userFavorite: user.userFavorite
})

const mapDispachToProps = dispatch => bindActionCreators({
	showInform: user.showInform,
}, dispatch)

class Header extends Component {
	showInform = () => {
		this.props.showInform()
	}
	showEvent = (event) => {
		console.log(this.props)
		console.log(event)
	}
    render() {
			const { isShow, userFavorite } = this.props
        return (
            <HeaderWrapper>
                <NavMenu>
                    <NavLink isActive>Home</NavLink>
                    <NavLink onClick={this.showEvent}>Home</NavLink>
                    <NavLink>aboute</NavLink>
                    <NavLink onClick={() => this.showInform()}>ckmcz</NavLink>
                </NavMenu>
								{isShow &&
								<div>
								</div>}
								<MiniFavorite />
            </HeaderWrapper>
        )
    }
}
export default connect(mapStateToProps, mapDispachToProps)(Header)
