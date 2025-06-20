import { useSate, useState } from "react"
import { useDispatch } from "react-redux"
import { increment, decrement, incrementByAmount } from "../src/cartCountSlice"

export function Store() {
    const [incrementAount, setIncrementAmount] = useState(0)

    let dispatch = useDispatch()

    return (
        <>
          
          <div className="product">
            <h2>protien powder</h2>
            <div className="button-section">
                <button onClick={() => dispatch(increment())} className="button">+</button>
                <button onClick={() => dispatch(decrement())} className="button">-</button>
                <input onChange={(e) => setIncrementAmount(parsetInt(e.target.value))} className="button"></input>
                <button onClick={() => dispatch(incrementByAmount(incrementAount))} className="button">Add X items</button>
            </div>
          </div>
          <h3>Number of items in cart: {}</h3>
        
        </>
    )
}
export default Store;