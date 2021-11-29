import React from 'react'
import { Navbar, Nav, Container,NavDropdown} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../redux/actions/LoginActions'




const Header = () => {

    const userLogin = useSelector(state =>state.userLogin)
    const {userInfo} = userLogin
    const dispatch = useDispatch()
   const logoutHandler =() =>{
      dispatch(logout())
   }


    return (
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Ecommerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>

             {userInfo ? (
                <NavDropdown title= {userInfo.name} id='username'>
                 <Link to ='/profile'>
                   <NavDropdown.Item>
                     Profile
                   </NavDropdown.Item>
                 </Link>

                 <NavDropdown.Item onClick={logoutHandler}>  
                     Logout
                   </NavDropdown.Item>
                </NavDropdown>
              ):(

                             <Nav.Link href="/login"><i className="fas fa-user"></i>Login</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header
