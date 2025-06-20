import { useSelector } from "react-redux"
export function Navbar() {

    let cartCount = useSelector(state => state.cartCount.value)
    return (
        <div className="navbar">
        <h2 className="Cart-container">Number of items in cart: {cartCount}</h2>
        </div>
    )
}