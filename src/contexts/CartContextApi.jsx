import { createContext, useEffect, useState } from "react";

export let mycart = createContext()

export let CartProvider = ({children})=>{
   const [cart , setCart] = useState(()=>{
         let cartItem = localStorage.getItem("cart")
         return cartItem ? JSON.parse(cartItem):[]
       })
       useEffect(()=>{
         localStorage.setItem("cart", JSON.stringify(cart))
       },[cart])

       const handlecart = (elem) =>{
        const existed = cart.find((item) => item.id == elem.id)
        if(existed){
            let updated = cart.map(function(pro) {
                if(pro.id === elem.id){
                    return {...pro , qty:pro.qty +1}
                }
                return pro
            })
            setCart(updated)
        }
        else {
            setCart((prev) => [...prev , {...elem , qty:1}])
        }
       }

       const increaseQty = (id)=>{
          const increase = cart.map(function(elem){
            if(elem.id == id){
                return {...elem , qty:elem.qty+1}
            }
            return elem
          })
          setCart(increase)
       }

       const decreaseQty = (id)=>{
        const decrease = cart
        .map(function(elem){
           if(elem.id == id){
            return {...elem , qty:elem.qty-1}
           }
           return elem
        })
        .filter ((item) => item.qty > 0)
        setCart(decrease)
       }
        
    return(
        <mycart.Provider value={{cart , setCart , handlecart ,increaseQty , decreaseQty}}>{children}</mycart.Provider>
    )
}