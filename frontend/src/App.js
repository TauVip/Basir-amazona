import { useContext } from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import CartScreen from './screens/CartScreen'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import SigninScreen from './screens/SigninScreen'
import { Store } from './Store'

function App() {
  const { state } = useContext(Store)
  const { cart } = state

  return (
    <BrowserRouter>
      <div className='d-flex flex-column site-container'>
        <header>
          <Navbar bg='dark' variant='dark'>
            <Container>
              <LinkContainer to='/'>
                <Navbar.Brand>amazona</Navbar.Brand>
              </LinkContainer>
              <Nav className='me-auto'>
                <Link to='/cart' className='nav-link'>
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg='danger'>
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className='mt-3'>
            <Routes>
              <Route path='/' element={<HomeScreen />} />
              <Route path='/cart' element={<CartScreen />} />
              <Route path='/signin' element={<SigninScreen />} />
              <Route path='/product/:slug' element={<ProductScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className='text-center'>All right reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  )
}
export default App
