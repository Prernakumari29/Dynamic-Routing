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

// ----------------------------Women Dress-----------------------------------
import WDress1 from "./WomenDress.jsx/WDress1.avif"
import WDress2 from "./WomenDress.jsx/WDress2.webp"
import WDress3 from "./WomenDress.jsx/WDress3.avif"
import WDress4 from "./WomenDress.jsx/WDress4.avif"
import WDress5 from "./WomenDress.jsx/WDress5.jpg"
import WDress6 from "./WomenDress.jsx/WDress6.avif"
import WDress7 from "./WomenDress.jsx/WDress7.avif"
import WDress8 from "./WomenDress.jsx/WDress8.jpg"
import WDress9 from "./WomenDress.jsx/WDress9.avif"
import WDress10 from "./WomenDress.jsx/WDress10.avif"
import WDress11 from "./WomenDress.jsx/WDress11.avif"
import WDress12 from "./WomenDress.jsx/WDress12.avif"
import WDress13 from "./WomenDress.jsx/WDress13.avif"
import WDress14 from "./WomenDress.jsx/WDress14.jpg"
import WDress15 from "./WomenDress.jsx/WDress15.avif"
import WDress16 from "./WomenDress.jsx/WDress16.avif"
import WDress17 from "./WomenDress.jsx/WDress17.avif"
import WDress18 from "./WomenDress.jsx/WDress18.jpg"
import WDress19 from "./WomenDress.jsx/WDress19.avif"
import WDress20 from "./WomenDress.jsx/WDress20.avif"


// --------------------------------------------------------Men Dress--------------------------------------------------

import MDress1 from "./MenDress.jsx/MDress1.avif"
import MDress2 from "./MenDress.jsx/MDress2.avif"
import MDress3 from "./MenDress.jsx/MDress3.avif"
import MDress4 from "./MenDress.jsx/MDress4.avif"
import MDress5 from "./MenDress.jsx/MDress5.avif"
import MDress6 from "./MenDress.jsx/MDress6.avif"
import MDress7 from "./MenDress.jsx/MDress7.avif"
import MDress8 from "./MenDress.jsx/MDress8.avif"
import MDress9 from "./MenDress.jsx/MDress9.avif"
import MDress10 from "./MenDress.jsx/MDress10.avif"
import MDress11 from "./MenDress.jsx/MDress11.avif"
import MDress12 from "./MenDress.jsx/MDress12.avif"
import MDress13 from "./MenDress.jsx/MDress13.avif"
import MDress14 from "./MenDress.jsx/MDress14.avif"
import MDress15 from "./MenDress.jsx/MDress15.avif"
import MDress16 from "./MenDress.jsx/MDress16.avif"
import MDress17 from "./MenDress.jsx/MDress17.avif"
import MDress18 from "./MenDress.jsx/MDress18.jpg"
import MDress19 from "./MenDress.jsx/MDress19.avif"
import MDress20 from "./MenDress.jsx/MDress20.avif"












export let mystore = createContext();

export let ContextProvider = ({children})=>{

    const[product , setProduct] = useState([
  // {
  //   id: 1,
  //   category : "SmartPhone",
  //   title: "Samsung Galaxy M14",
  //   name: "Smartphone",
  //   brand: "Samsung",
  //   description: "6.6-inch display, 6000mAh battery and powerful processor for smooth performance.",
  //   price: 12999,
  //   oldPrice: 20400,
  //   rating: 4.5,
  //   stock: 18,
  //   delivery: "Free Delivery in 2-3 Days",
  //   features: [
  //     "6000mAh Battery , ",
  //     "6.6-inch FHD+ Display",
  //     "5G Support",
  //     "128GB Storage"
  //   ],
  //   image: smartMobile
  // },
  // {
  //   id: 2,
  //   category : "SmartPhone",
  //   title: "Nokia 105 Classic",
  //   name: "Keypad Phone",
  //   brand: "Nokia",
  //   description: "Long-lasting battery with durable design and clear sound quality.",
  //   price: 999,
  //   oldPrice: 1599,
  //   rating: 4.2,
  //   stock: 35,
  //   delivery: "Free Delivery in 4-5 Days",
  //   features: [
  //     "Long Battery Life , ",
  //     "Dual SIM , ",
  //     "Durable Body , ",
  //     "FM Radio."
  //   ],
  //   image: keypad
  // },
  // {
  //   id: 3,
  //   category : "Sm",
  //   title: "Boat Rockerz 450",
  //   name: "Headphones",
  //   brand: "Boat",
  //   description: "Wireless over-ear headphones with deep bass and 15 hours playback.",
  //   price: 2999,
  //   oldPrice: 5999,
  //   rating: 4.6,
  //   stock: 22,
  //   delivery: "Free Delivery in 2 Days",
  //   features: [
  //     "15 Hours Playback , ",
  //     "Deep Bass , ",
  //     "Bluetooth 5.0 , ",
  //     "Lightweight Design."
  //   ],
  //   image: Headset
  // },
  // {
  //   id: 4,
  //   category : "Sm",
  //   title: "Noise ColorFit Pro",
  //   name: "Smart Watch",
  //   brand: "Noise",
  //   description: "Feature-packed smart watch designed to keep up with your active lifestyle.",
  //   price: 4999,
  //   oldPrice: 7999,
  //   rating: 4.3,
  //   stock: 12,
  //   delivery: "Free Delivery Tomorrow",
  //   features: [
  //     "Heart Rate Monitor , ",
  //     "Sleep Tracking , ",
  //     "IP68 Water Resistant , ",
  //     "7 Days Battery."
  //   ],
  //   image: Smartwatch
  // },
  // {
  //   id: 5,
  //   category : "Sm",

  //   title: "JBL Flip 5",
  //   name: "Bluetooth Speaker",
  //   brand: "JBL",
  //   description: "Portable speaker with powerful bass and waterproof design.",
  //   price: 1999,
  //   oldPrice: 2500,
  //   rating: 4.4,
  //   stock: 20,
  //   delivery: "Free Delivery in 3 Days",
  //   features: [
  //     "Powerful Bass , ",
  //     "Waterproof , ",
  //     "12 Hours Playtime , ",
  //     "Portable Design."
  //   ],
  //   image: Bluetoothspeaker
  // },
  // {
  //   id: 6,
  //   category : "Sm",

  //   title: "Lenovo Tab M10",
  //   name: "Tablet",
  //   brand: "Lenovo",
  //   description: "10.1-inch display tablet perfect for entertainment and productivity.",
  //   price: 18999,
  //   oldPrice: 20999,
  //   rating: 4.1,
  //   stock: 9,
  //   delivery: "Free Delivery in 5 Days",
  //   features: [
  //     "10.1-inch Display , ",
  //     "4GB RAM , ",
  //     "Long Battery Life , ",
  //     "Dolby Audio."
  //   ],
  //   image: Tablet
  // },
  // {
  //   id: 7,
  //   category : "Sm",

  //   title: "Logitech Mechanical Keyboard",
  //   name: "Keyboard",
  //   brand: "Logitech",
  //   description: "RGB backlit keyboard with smooth typing experience.",
  //   price: 1499,
  //   oldPrice: 2000,
  //   rating: 4.5,
  //   stock: 28,
  //   delivery: "Free Delivery in 2 Days",
  //   features: [
  //     "RGB Lighting , ",
  //     "Mechanical Keys , ",
  //     "Anti-Ghosting , ",
  //     "Durable Build."
  //   ],
  //   image: Keyboard
  // },
  // {
  //   id: 8,
  //   category : "Sm",

  //   title: "HP Wireless Mouse",
  //   name: "Mouse",
  //   brand: "HP",
  //   description: "Ergonomic wireless mouse with high precision tracking.",
  //   price: 799,
  //   oldPrice: 1599,
  //   rating: 4.2,
  //   stock: 40,
  //   delivery: "Free Delivery in 3 Days",
  //   features: [
  //     "Wireless Connectivity , ",
  //     "Ergonomic Design , ",
  //     "High Precision , ",
  //     "Long Battery Life."
  //   ],
  //   image: Mouse
  // },
  // {
  //   id: 9,
  //   category : "Sm",

  //   title: "Sony PlayStation 5",
  //   name: "Gaming Console",
  //   brand: "Sony",
  //   description: "Next-gen gaming console with ultra-fast SSD and stunning graphics.",
  //   price: 39999,
  //   oldPrice: 45499,
  //   rating: 4.8,
  //   stock: 5,
  //   delivery: "Express Delivery Available",
  //   features: [
  //     "Ultra-fast SSD , ",
  //     "4K Gaming , ",
  //     "Ray Tracing , ",
  //     "DualSense Controller."
  //   ],
  //   image: Gamingconsole
  // },
  // {
  //   id: 10,
  //   category : "Sm",

  //   title: "Canon EOS 1500D",
  //   name: "Camera",
  //   brand: "Canon",
  //   description: "24.1MP DSLR camera with high-quality image capture and WiFi support.",
  //   price: 25999,
  //   oldPrice: 30400,
  //   rating: 4.6,
  //   stock: 7,
  //   delivery: "Free Delivery in 4 Days",
  //   features: [
  //     "24.1MP Sensor , ",
  //     "WiFi Support , ",
  //     "Full HD Recording , ",
  //     "Interchangeable Lens ."
  //   ],
  //   image: Camera
  // },
  ])
   
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
        name:"prerna",
      }, 
      {
        id:2,
        image1: MenDress1,
        image2: MenDress2,
        image3: MenDress3,
        image4: MenDress4,
        name:"usha",
      },
       {
        id:3,
        image1:HomeAplliance,
        image2:HomeDecor,
        image3:Mouse,
        image4:KidDress1,
        name:"isha",
      }

    ])

    const [viewMoreData , setViewMoreData] = useState([
      {
        id:1,
        name:"raamu",
        class:2,
        products:[
         {
    id: 101,
    name: "Floral Summer Dress",
    image:WDress1 ,
    oldPrice: 1299,
    price: 899,
  },
  {
    id: 102,
    name: "Party Wear Gown",
    image: WDress2,
    oldPrice: 2499,
    price: 1799,
  },
  {
    id: 103,
    name: "Casual Cotton Kurti",
    image: WDress3,
    oldPrice: 999,
    price: 699,
  },
  {
    id: 104,
    name: "Denim Midi Dress",
    image: WDress4,
    oldPrice: 1899,
    price: 1399,
  },
  {
    id: 105,
    name: "Ethnic Anarkali Suit",
    image: WDress5,
    oldPrice: 2999,
    price: 2199,
  },
  {
    id: 106,
    name: "Printed Maxi Dress",
    image: WDress6,
    oldPrice: 1599,
    price: 1099,
  },
  {
    id: 107,
    name: "Sleeveless Bodycon Dress",
    image: WDress7,
    oldPrice: 1999,
    price: 1499,
  },
  {
    id: 108,
    name: "Traditional Lehenga",
    image: WDress8,
    oldPrice: 4999,
    price: 3799,
  },
  {
    id: 109,
    name: "Office Wear Formal Dress",
    image: WDress9,
    oldPrice: 1799,
    price: 1299,
  },
  {
    id: 110,
    name: "Stylish Skater Dress",
    image: WDress10,
    oldPrice: 1499,
    price: 999,
  },
  {
    id: 111,
    name: "Long Sleeve Winter Dress",
    image: WDress11,
    oldPrice: 2299,
    price: 1699,
  },
  {
    id: 112,
    name: "Chiffon Saree",
    image: WDress12,
    oldPrice: 2599,
    price: 1899,
  },
  {
    id: 113,
    name: "Boho Style Dress",
    image: WDress13,
    oldPrice: 1399,
    price: 999,
  },
  {
    id: 114,
    name: "Designer Party Kurti",
    image: WDress14,
    oldPrice: 1899,
    price: 1399,
  },
  {
    id: 115,
    name: "Elegant Evening Gown",
    image: WDress15,
    oldPrice: 3499,
    price: 2599,
  },
  {
    id: 116,
    name: "Embroidered Festive Suit",
    image: WDress16,
    oldPrice: 2799,
    price: 1999,
  },
  {
    id: 117,
    name: "A-Line Casual Dress",
    image: WDress17,
    oldPrice: 1599,
    price: 1199,
  },
  {
    id: 118,
    name: "Georgette Party Saree",
    image: WDress18,
    oldPrice: 3199,
    price: 2399,
  },
  {
    id: 119,
    name: "Layered Ruffle Dress",
    image: WDress19,
    oldPrice: 1799,
    price: 1299,
  },
  {
    id: 120,
    name: "Wedding Special Lehenga",
    image: WDress20,
    oldPrice: 5999,
    price: 4599,
  }
        ]
      },
      {
        id:2,
        name:"rajju",
        class:5,
        products:[
          {
      id: 201,
      name: "Casual Cotton Shirt",
      image: MDress1,
      oldPrice: 1299,
      price: 899,
    },
    {
      id: 202,
      name: "Slim Fit Jeans",
      image: MDress2,
      oldPrice: 2499,
      price: 1799,
    },
    {
      id: 203,
      name: "Formal Blazer",
      image: MDress3,
      oldPrice: 3999,
      price: 2999,
    },
    {
      id: 204,
      name: "Printed T-Shirt",
      image: MDress4,
      oldPrice: 999,
      price: 699,
    },
    {
      id: 205,
      name: "Traditional Kurta",
      image: MDress5,
      oldPrice: 1599,
      price: 1199,
    },
    {
      id: 206,
      name: "Denim Jacket",
      image: MDress6,
      oldPrice: 2999,
      price: 2199,
    },
    {
      id: 207,
      name: "Sports Track Suit",
      image: MDress7,
      oldPrice: 1999,
      price: 1499,
    },
    {
      id: 208,
      name: "Winter Hoodie",
      image: MDress8,
      oldPrice: 1799,
      price: 1299,
    },
    {
      id: 209,
      name: "Party Wear Suit",
      image: MDress9,
      oldPrice: 4999,
      price: 3799,
    },
    {
      id: 210,
      name: "Casual Shorts",
      image: MDress10,
      oldPrice: 899,
      price: 599,
    },
    {
      id: 211,
      name: "Formal Trousers",
      image: MDress11,
      oldPrice: 1899,
      price: 1399,
    },
    {
      id: 212,
      name: "Graphic T-Shirt",
      image: MDress12,
      oldPrice: 1099,
      price: 799,
    },
    {
      id: 213,
      name: "Leather Jacket",
      image: MDress13,
      oldPrice: 5999,
      price: 4599,
    },
    {
      id: 214,
      name: "Ethnic Sherwani",
      image: MDress14,
      oldPrice: 6999,
      price: 5499,
    },
    {
      id: 215,
      name: "Summer Linen Shirt",
      image: MDress15,
      oldPrice: 1399,
      price: 999,
    },
    {
      id: 216,
      name: "Jogger Pants",
      image: MDress16,
      oldPrice: 1499,
      price: 1099,
    },
    {
      id: 217,
      name: "Classic Polo T-Shirt",
      image: MDress17,
      oldPrice: 1299,
      price: 899,
    },
    {
      id: 218,
      name: "Denim Cargo Pants",
      image: MDress18,
      oldPrice: 2299,
      price: 1699,
    },
    {
      id: 219,
      name: "Wedding Special Suit",
      image: MDress19,
      oldPrice: 7999,
      price: 6299,
    },
    {
      id: 220,
      name: "Basic White Shirt",
      image: MDress20,
      oldPrice: 1199,
      price: 799,
    }
        ]
      },
      {
        id:3,
        name:"shaymuuu",
        class:9,
        products:[
          {
    id: 301,
    name: "Layered Ruffle Dress",
    image: WomenDress2,
    oldPrice: 1799,
    newPrice: 1299,
  },
  {
    id: 302,
    name: "Wedding Special Lehenga",
    image: WDress20,
    oldPrice: 5999,
    newPrice: 4599,
  }
        ]
      },
    ])

    

    return (
        <mystore.Provider value={{product,setProduct, cart , setCart,isAuth , setIsAuth,userName , setUserName , viewData , setViewData , viewMoreData}}>{children}</mystore.Provider>
    )
}