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
import WomenDress1 from "./electronic-Images/WomenDress1.avif"
import WomenDress2 from "./electronic-Images/WomenDress2.avif"
import WomenDress3 from "./electronic-Images/WomenDress3.avif"
import WomenDress4 from "./electronic-Images/WomenDress4.avif"
import MenDress1 from "./electronic-Images/MenDress1.avif"
import MenDress2 from "./electronic-Images/MenDress2.avif"
import MenDress3 from "./electronic-Images/MenDress3.avif"
import MenDress4 from "./electronic-Images/MenDress4.avif"
import HomeAplliance from "./electronic-Images/HomeAplliance.avif"
import HomeDecor from "./electronic-Images/HomeDecor.avif"
import KidDress1 from "./electronic-Images/KidDress1.avif"

















export let mystore = createContext();

export let ContextProvider = ({children})=>{

    const[product , setProduct] = useState(
  [ {
    id: 1,
    category : "SmartPhone",
    title: "Samsung Galaxy M14",
    name: "Smartphone",
    brand: "Samsung",
    description: "6.6-inch display, 6000mAh battery and powerful processor for smooth performance.",
    price: 12999,
    originalPrice: 20400,
    rating: 4.5,
    stock: 18,
    delivery: "Free Delivery in 2-3 Days",
    features: [
      "6000mAh Battery , ",
      "6.6-inch FHD+ Display",
      "5G Support",
      "128GB Storage"
    ],
    image: smartMobile
  },
  {
    id: 2,
    category : "SmartPhone",
    title: "Nokia 105 Classic",
    name: "Keypad Phone",
    brand: "Nokia",
    description: "Long-lasting battery with durable design and clear sound quality.",
    price: 999,
    originalPrice: 1599,
    rating: 4.2,
    stock: 35,
    delivery: "Free Delivery in 4-5 Days",
    features: [
      "Long Battery Life , ",
      "Dual SIM , ",
      "Durable Body , ",
      "FM Radio."
    ],
    image: keypad
  },
  {
    id: 3,
    category : "Sm",
    title: "Boat Rockerz 450",
    name: "Headphones",
    brand: "Boat",
    description: "Wireless over-ear headphones with deep bass and 15 hours playback.",
    price: 2999,
    originalPrice: 5999,
    rating: 4.6,
    stock: 22,
    delivery: "Free Delivery in 2 Days",
    features: [
      "15 Hours Playback , ",
      "Deep Bass , ",
      "Bluetooth 5.0 , ",
      "Lightweight Design."
    ],
    image: Headset
  },
  {
    id: 4,
    category : "Sm",
    title: "Noise ColorFit Pro",
    name: "Smart Watch",
    brand: "Noise",
    description: "Feature-packed smart watch designed to keep up with your active lifestyle.",
    price: 4999,
    originalPrice: 7999,
    rating: 4.3,
    stock: 12,
    delivery: "Free Delivery Tomorrow",
    features: [
      "Heart Rate Monitor , ",
      "Sleep Tracking , ",
      "IP68 Water Resistant , ",
      "7 Days Battery."
    ],
    image: Smartwatch
  },
  {
    id: 5,
    category : "Sm",

    title: "JBL Flip 5",
    name: "Bluetooth Speaker",
    brand: "JBL",
    description: "Portable speaker with powerful bass and waterproof design.",
    price: 1999,
    originalPrice: 2500,
    rating: 4.4,
    stock: 20,
    delivery: "Free Delivery in 3 Days",
    features: [
      "Powerful Bass , ",
      "Waterproof , ",
      "12 Hours Playtime , ",
      "Portable Design."
    ],
    image: Bluetoothspeaker
  },
  {
    id: 6,
    category : "Sm",

    title: "Lenovo Tab M10",
    name: "Tablet",
    brand: "Lenovo",
    description: "10.1-inch display tablet perfect for entertainment and productivity.",
    price: 18999,
    originalPrice: 20999,
    rating: 4.1,
    stock: 9,
    delivery: "Free Delivery in 5 Days",
    features: [
      "10.1-inch Display , ",
      "4GB RAM , ",
      "Long Battery Life , ",
      "Dolby Audio."
    ],
    image: Tablet
  },
  {
    id: 7,
    category : "Sm",

    title: "Logitech Mechanical Keyboard",
    name: "Keyboard",
    brand: "Logitech",
    description: "RGB backlit keyboard with smooth typing experience.",
    price: 1499,
    originalPrice: 2000,
    rating: 4.5,
    stock: 28,
    delivery: "Free Delivery in 2 Days",
    features: [
      "RGB Lighting , ",
      "Mechanical Keys , ",
      "Anti-Ghosting , ",
      "Durable Build."
    ],
    image: Keyboard
  },
  {
    id: 8,
    category : "Sm",

    title: "HP Wireless Mouse",
    name: "Mouse",
    brand: "HP",
    description: "Ergonomic wireless mouse with high precision tracking.",
    price: 799,
    originalPrice: 1599,
    rating: 4.2,
    stock: 40,
    delivery: "Free Delivery in 3 Days",
    features: [
      "Wireless Connectivity , ",
      "Ergonomic Design , ",
      "High Precision , ",
      "Long Battery Life."
    ],
    image: Mouse
  },
  {
    id: 9,
    category : "Sm",

    title: "Sony PlayStation 5",
    name: "Gaming Console",
    brand: "Sony",
    description: "Next-gen gaming console with ultra-fast SSD and stunning graphics.",
    price: 39999,
    originalPrice: 45499,
    rating: 4.8,
    stock: 5,
    delivery: "Express Delivery Available",
    features: [
      "Ultra-fast SSD , ",
      "4K Gaming , ",
      "Ray Tracing , ",
      "DualSense Controller."
    ],
    image: Gamingconsole
  },
  {
    id: 10,
    category : "Sm",

    title: "Canon EOS 1500D",
    name: "Camera",
    brand: "Canon",
    description: "24.1MP DSLR camera with high-quality image capture and WiFi support.",
    price: 25999,
    originalPrice: 30400,
    rating: 4.6,
    stock: 7,
    delivery: "Free Delivery in 4 Days",
    features: [
      "24.1MP Sensor , ",
      "WiFi Support , ",
      "Full HD Recording , ",
      "Interchangeable Lens ."
    ],
    image: Camera
  },])
   
    const [cart , setCart] = useState([])

    const [isAuth , setIsAuth] = useState(false)

    const [userName , setUserName] = useState("")

    const [viewData , setViewData] = useState([
      {
        id:1,
        image1: WomenDress1,
        image2: WomenDress2,
        image3: WomenDress3,
        image4: WomenDress4,
      }, 
      {
        id:2,
        image1: MenDress1,
        image2: MenDress2,
        image3: MenDress3,
        image4: MenDress4,
      },
       {
        id:3,
        image1:HomeAplliance,
        image2:HomeDecor,
        image3:Mouse,
        image4:KidDress1,
      }

    ])

    

    return (
        <mystore.Provider value={{product,setProduct, cart , setCart,isAuth , setIsAuth,userName , setUserName , viewData , setViewData }}>{children}</mystore.Provider>
    )
}