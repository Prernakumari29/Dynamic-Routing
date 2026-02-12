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
  [ {
    id: 1,
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

    return (
        <mystore.Provider value={{product,setProduct, cart , setCart,isAuth , setIsAuth,userName , setUserName}}>{children}</mystore.Provider>
    )
}