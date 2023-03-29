import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="NavBar" >
        <Link to='/'>Charitos Cake</Link>
        <div className="Categories">
            <NavLink to='/category/tortas' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Tortas</NavLink>
            <NavLink to='/category/galletas' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Galletas</NavLink>
            <NavLink to='/category/tartas' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Tartas</NavLink>
            <NavLink to='/category/alfajores' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Alfajores</NavLink>
        </div>
        <CartWidget />
    </nav>
  )
}

export default NavBar