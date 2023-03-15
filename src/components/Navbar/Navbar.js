import './Navbar.css'
import Button from '../Button/Button'

import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav className="Navbar">
            <h1>Charitos Cake</h1>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                {/* <button className="btn btn-primary me-md-2">Tortas</button>
                <button className="btn btn-primary me-md-2">Galletas</button>
                <button className="btn btn-primary me-md-2">Tartas</button>
                <button className="btn btn-primary me-md-2">Alfajores</button> */}
                <Button label="Tortas" callback={() => console.log('Tortas')} />
                <Button label="Galletas" callback={() => console.log('Galletas')}/>
                <Button label="Tartas" callback={() => console.log('Tartas')}/>
                <Button label="Alfajores" callback={() => console.log('Alfajores')}/>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar