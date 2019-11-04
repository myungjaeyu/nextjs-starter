import '../../static/styles/components/header.scss'

import { Component } from 'react'

import Link from 'next/link'

import { connect } from 'react-redux'

import { authLogout } from '../../store/modules/auth'

import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Collapse } from 'shards-react'

class Header extends Component {

    state = {
        collapseOpen: false
    }

    toggleNavbar = () => this.setState({ ...this.state, ...{ collapseOpen: !this.state.collapseOpen } })

    handleLogout = () => this.props.authLogout()

    render() {

        const { token, user: { username } } = this.props

        return (
            <header>

                <Navbar type='light' expand='sm'>

                    <Link href='/' >
                        <NavbarBrand>
                            Starter
                        </NavbarBrand>
                    </Link>

                    <NavbarToggler onClick={ this.toggleNavbar } />

                    <Collapse open={ this.state.collapseOpen } navbar>

                        <Nav navbar>

                            <NavItem>
                                <Link href='/profile/[username]' as={`/profile/${ username }`}>

                                    <NavLink>
                                        Profile
                                    </NavLink>

                                </Link>
                            </NavItem>

                        </Nav>

                        <Nav navbar className='ml-auto'>

                            <NavItem>

                                { token ? 
                                    <NavLink onClick={ this.handleLogout } >
                                        Logout
                                    </NavLink>
                                    : 
                                    <Link href='/login' >

                                        <NavLink>
                                            Login
                                        </NavLink>

                                    </Link>
                                }

                            </NavItem>

                        </Nav>

                    </Collapse>

                </Navbar>

            </header>
        )

    }

}

const mapState = ({ auth: { token, user }}) => {

    return ({
        token,
        user
    })
}

const mapDispatch = {
    authLogout
}

export default connect(
    mapState,
    mapDispatch
)(Header)