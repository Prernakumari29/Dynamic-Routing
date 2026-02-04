import { createContext, useState } from "react";

export let mystore = createContext();

export let ContextProvider = ({children})=>{

    const[product , setProduct] = useState(
  [{
    id: 1,
    name: "Smartphone",
    price: 12999,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSYF8Uduw_DvgwdU2MLr6avtAzt5Pgk07mYDar4CCDnYzh8yg7F2DgPitcuWDAIuqiuDHB0epgqqW6fSY8CrVhCHMj4sdcAGUucGkqZ-jGZAsnavJAZrEf52xrGaqQxsTzmlawbxg&usqp=CAc",
  },
  {
    id: 2,
    name: "Laptop",
    price: 54999,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmsGow6BfyXzfJj9jGh6VTn4IrNpVczYBgnw&s",
  },
  {
    id: 3,
    name: "Headphones",
    price: 2999,
    image: "https://dummyimage.com/300x300/87ceeb/000000&text=Product",
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 4999,
    image: "https://via.placeholder.com/300?text=Smart+Watch",
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 1999,
    image: "https://via.placeholder.com/300?text=Speaker",
  },
  {
    id: 6,
    name: "Tablet",
    price: 18999,
    image: "https://via.placeholder.com/300?text=Tablet",
  },
  {
    id: 7,
    name: "Keyboard",
    price: 1499,
    image: "https://via.placeholder.com/300?text=Keyboard",
  },
  {
    id: 8,
    name: "Mouse",
    price: 799,
    image: "https://via.placeholder.com/300?text=Mouse",
  },
  {
    id: 9,
    name: "Gaming Console",
    price: 39999,
    image: "https://via.placeholder.com/300?text=Console",
  },
  {
    id: 10,
    name: "Camera",
    price: 25999,
    image: "https://via.placeholder.com/300?text=Camera",
  },])
   
    const [cart , setCart] = useState([])

    return (
        <mystore.Provider value={{product,setProduct, cart , setCart}}>{children}</mystore.Provider>
    )
}