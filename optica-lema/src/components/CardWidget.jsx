
import carrito from "../assets/verificar.png" 

const CartWidget = ()=> {
    return (
         <>   
<button type="button" class="btn btn-primary position-relative btn-sm " >
<img src={carrito} alt="carrito" /> <span class="badge bg-warning">1</span>
</button>
         
    </>
       
    )
}

export  default CartWidget;