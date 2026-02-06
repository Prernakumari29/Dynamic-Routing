import { createContext, useState } from "react";
import smartMobile from "./electronic-Images/SmartMobile.avif"
import keypad from "./electronic-Images/Keypad.webp"
import Headset from "./electronic-Images/Headset.avif"
import Smartwatch from "./electronic-Images/Smartwatch.avif"
import Bluetoothspeaker from "./electronic-Images/Bluetoothspeaker.avif"
import Tablet from "./electronic-Images/Tablet.avif"
import Keyboard from "./electronic-Images/Keyboard.avif"
import Mouse from "./electronic-Images/Mouse.avif"
import Gamingconsole from "./electronic-Images/Gamingconsole.avif"
import Camera from "./electronic-Images/Camera.avif"









export let mystore = createContext();

export let ContextProvider = ({children})=>{

    const[product , setProduct] = useState(
  [{
    id: 1,
    name: "Smartphone",
    price: 12999,
    image:smartMobile ,
  },
  {
    id: 2,
    name: "Keypad Phone",
    price: 999,
    image: keypad,
  },
  {
    id: 3,
    name: "Headphones",
    price: 2999,
    image: Headset,
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 4999,
    image: Smartwatch,
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 1999,
    image: Bluetoothspeaker,
  },
  {
    id: 6,
    name: "Tablet",
    price: 18999,
    image: Tablet,
  },
  {
    id: 7,
    name: "Keyboard",
    price: 1499,
    image: Keyboard,
  },
  {
    id: 8,
    name: "Mouse",
    price: 799,
    image: Mouse,
  },
  {
    id: 9,
    name: "Gaming Console",
    price: 39999,
    image: Gamingconsole,
  },
  {
    id: 10,
    name: "Camera",
    price: 25999,
    image: Camera,
  },])
   
    const [cart , setCart] = useState([])

    return (
        <mystore.Provider value={{product,setProduct, cart , setCart}}>{children}</mystore.Provider>
    )
}