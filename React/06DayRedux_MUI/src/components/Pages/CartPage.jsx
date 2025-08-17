import { useSelector } from "react-redux"
import ActionCard from "./ActionCard"

function CartPage(){
const cartData=useSelector((store)=>store.cart.cartVal) // test 
console.log(cartData)

    return(
        <>
            <h1>Cart Page</h1>

            {
                cartData.map((element)=><ActionCard {...element}/>) // do this
                
            }

        </>
    )
}

export default CartPage