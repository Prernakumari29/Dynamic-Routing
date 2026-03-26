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

    const[product , setProduct] = useState([])
   
    

    const [isAuth , setIsAuth] = useState(
      localStorage.getItem("auth") === "true"
    )

    const login = () =>{
      setIsAuth(true)
      localStorage.setItem("auth" , "true")
    }

    const logout = () =>{
      setIsAuth(false)
      localStorage.removeItem("auth")
       localStorage.removeItem("username")
       setUserName("") 
    }

    const [userName , setUserName] = useState(
      localStorage.getItem("username") || ""
    )

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

    const [viewMoreData , setViewMoreData] = useState([
      {
        id:1,
        name:"womens",
        products:[
         {
           id: 101,
           category: "Women",
           title: "Floral Summer Dress", 
           name: "Dress", brand: "Zara", 
           description: "Lightweight floral dress perfect for summer outings.", 
           price: 899, 
           oldPrice: 1299, 
           rating: 4.5, 
           stock: 12, 
           delivery: "Free Delivery in 3 Days",
           features: [ "Soft Cotton Fabric", 
                         "Floral Print Design",
                         "Breathable Material", 
                         "Comfortable Fit" ], 
          image: WDress1 },
  {
  id: 102,
  category: "Women",
  title: "Party Wear Gown",
  name: "Gown",
  brand: "Forever 21",
  description: "Stylish party gown designed for evening events.",
  price: 1799,
  oldPrice: 2499,
  rating: 4.6,
  stock: 9,
  delivery: "Free Delivery in 4 Days",
  features: [
    "Premium Fabric",
    "Elegant Party Design",
    "Slim Fit Style",
    "Perfect for Occasions"
  ],
  image: WDress2
},
{
  id: 103,
  category: "Women",
  title: "Casual Cotton Kurti",
  name: "Kurti",
  brand: "Biba",
  description: "Comfortable cotton kurti ideal for daily wear.",
  price: 699,
  oldPrice: 999,
  rating: 4.4,
  stock: 15,
  delivery: "Free Delivery in 3 Days",
  features: [
    "Pure Cotton Fabric",
    "Traditional Pattern",
    "Breathable Material",
    "Perfect Daily Wear"
  ],
  image: WDress3
},
{
  id: 104,
  category: "Women",
  title: "Denim Midi Dress",
  name: "Dress",
  brand: "Levis",
  description: "Trendy denim midi dress suitable for casual styling.",
  price: 1399,
  oldPrice: 1899,
  rating: 4.5,
  stock: 10,
  delivery: "Free Delivery in 3 Days",
  features: [
    "Durable Denim Fabric",
    "Stylish Midi Length",
    "Casual Look",
    "Comfortable Fit"
  ],
  image: WDress4
},
{
  id: 105,
  category: "Women",
  title: "Ethnic Anarkali Suit",
  name: "Anarkali Suit",
  brand: "Libas",
  description: "Elegant ethnic Anarkali suit for festive occasions.",
  price: 2199,
  oldPrice: 2999,
  rating: 4.7,
  stock: 7,
  delivery: "Free Delivery in 4 Days",
  features: [
    "Traditional Design",
    "Festive Wear",
    "Soft Fabric",
    "Elegant Look"
  ],
  image: WDress5
},
{
  id: 106,
  category: "Women",
  title: "Printed Maxi Dress",
  name: "Dress",
  brand: "H&M",
  description: "Stylish printed maxi dress perfect for vacations.",
  price: 1099,
  oldPrice: 1599,
  rating: 4.3,
  stock: 11,
  delivery: "Free Delivery in 3 Days",
  features: [
    "Long Maxi Style",
    "Trendy Prints",
    "Comfortable Fabric",
    "Relaxed Fit"
  ],
  image: WDress6
},
{
  id: 107,
  category: "Women",
  title: "Sleeveless Bodycon Dress",
  name: "Dress",
  brand: "Zara",
  description: "Stylish bodycon dress that enhances your silhouette.",
  price: 1499,
  oldPrice: 1999,
  rating: 4.6,
  stock: 8,
  delivery: "Free Delivery in 3 Days",
  features: [
    "Bodycon Fit",
    "Stretchable Fabric",
    "Sleeveless Design",
    "Modern Look"
  ],
  image: WDress7
},
{
  id: 108,
  category: "Women",
  title: "Traditional Lehenga",
  name: "Lehenga",
  brand: "Manyavar",
  description: "Beautiful traditional lehenga suitable for weddings.",
  price: 3799,
  oldPrice: 4999,
  rating: 4.8,
  stock: 5,
  delivery: "Free Delivery in 5 Days",
  features: [
    "Rich Embroidery",
    "Festive Wear",
    "Premium Fabric",
    "Elegant Bridal Style"
  ],
  image: WDress8
},
{
  id: 109,
  category: "Women",
  title: "Office Wear Formal Dress",
  name: "Dress",
  brand: "Allen Solly",
  description: "Professional formal dress perfect for office wear.",
  price: 1299,
  oldPrice: 1799,
  rating: 4.4,
  stock: 13,
  delivery: "Free Delivery in 3 Days",
  features: [
    "Formal Style",
    "Elegant Fit",
    "Soft Fabric",
    "Professional Look"
  ],
  image: WDress9
},
{
  id: 110,
  category: "Women",
  title: "Stylish Skater Dress",
  name: "Dress",
  brand: "Forever 21",
  description: "Trendy skater dress ideal for casual outings.",
  price: 999,
  oldPrice: 1499,
  rating: 4.3,
  stock: 14,
  delivery: "Free Delivery in 3 Days",
  features: [
    "Skater Style",
    "Lightweight Fabric",
    "Modern Design",
    "Comfortable Wear"
  ],
  image: WDress10
},
{
  id: 111,
  category: "Women",
  title: "Long Sleeve Winter Dress",
  name: "Dress",
  brand: "H&M",
  description: "Warm winter dress designed for colder seasons.",
  price: 1699,
  oldPrice: 2299,
  rating: 4.5,
  stock: 9,
  delivery: "Free Delivery in 4 Days",
  features: [
    "Warm Fabric",
    "Long Sleeve Design",
    "Winter Friendly",
    "Stylish Look"
  ],
  image: WDress11
},
{
  id: 112,
  category: "Women",
  title: "Chiffon Saree",
  name: "Saree",
  brand: "Sabyasachi",
  description: "Elegant chiffon saree with graceful drape.",
  price: 1899,
  oldPrice: 2599,
  rating: 4.6,
  stock: 7,
  delivery: "Free Delivery in 4 Days",
  features: [
    "Lightweight Chiffon",
    "Elegant Design",
    "Festive Wear",
    "Comfortable Draping"
  ],
  image: WDress12
},
{
  id: 113,
  category: "Women",
  title: "Boho Style Dress",
  name: "Dress",
  brand: "Zara",
  description: "Trendy boho dress with relaxed styling.",
  price: 999,
  oldPrice: 1399,
  rating: 4.4,
  stock: 10,
  delivery: "Free Delivery in 3 Days",
  features: [
    "Boho Design",
    "Relaxed Fit",
    "Soft Fabric",
    "Casual Look"
  ],
  image: WDress13
},
{
  id: 114,
  category: "Women",
  title: "Designer Party Kurti",
  name: "Kurti",
  brand: "Biba",
  description: "Stylish designer kurti perfect for festive parties.",
  price: 1399,
  oldPrice: 1899,
  rating: 4.5,
  stock: 11,
  delivery: "Free Delivery in 3 Days",
  features: [
    "Designer Pattern",
    "Festive Wear",
    "Comfortable Fabric",
    "Elegant Look"
  ],
  image: WDress14
},
{
  id: 115,
  category: "Women",
  title: "Elegant Evening Gown",
  name: "Gown",
  brand: "Forever 21",
  description: "Sophisticated evening gown for formal events.",
  price: 2599,
  oldPrice: 3499,
  rating: 4.7,
  stock: 6,
  delivery: "Free Delivery in 4 Days",
  features: [
    "Luxury Fabric",
    "Elegant Fit",
    "Party Ready",
    "Premium Style"
  ],
  image: WDress15
},
{
  id: 116,
  category: "Women",
  title: "Embroidered Festive Suit",
  name: "Suit",
  brand: "Libas",
  description: "Festive suit with beautiful embroidery work.",
  price: 1999,
  oldPrice: 2799,
  rating: 4.6,
  stock: 8,
  delivery: "Free Delivery in 4 Days",
  features: [
    "Embroidery Work",
    "Festive Design",
    "Comfortable Fabric",
    "Elegant Look"
  ],
  image: WDress16
},
{
  id: 117,
  category: "Women",
  title: "A-Line Casual Dress",
  name: "Dress",
  brand: "H&M",
  description: "Simple A-line dress perfect for daily casual wear.",
  price: 1199,
  oldPrice: 1599,
  rating: 4.3,
  stock: 12,
  delivery: "Free Delivery in 3 Days",
  features: [
    "A-Line Shape",
    "Casual Style",
    "Soft Fabric",
    "Comfortable Fit"
  ],
  image: WDress17
},
{
  id: 118,
  category: "Women",
  title: "Georgette Party Saree",
  name: "Saree",
  brand: "Manyavar",
  description: "Stylish georgette saree designed for parties.",
  price: 2399,
  oldPrice: 3199,
  rating: 4.5,
  stock: 7,
  delivery: "Free Delivery in 4 Days",
  features: [
    "Georgette Fabric",
    "Elegant Design",
    "Party Wear",
    "Lightweight"
  ],
  image: WDress18
},
{
  id: 119,
  category: "Women",
  title: "Layered Ruffle Dress",
  name: "Dress",
  brand: "Zara",
  description: "Trendy ruffle dress with layered styling.",
  price: 1299,
  oldPrice: 1799,
  rating: 4.4,
  stock: 10,
  delivery: "Free Delivery in 3 Days",
  features: [
    "Layered Design",
    "Modern Style",
    "Comfortable Fabric",
    "Casual Wear"
  ],
  image: WDress19
},
{
  id: 120,
  category: "Women",
  title: "Wedding Special Lehenga",
  name: "Lehenga",
  brand: "Sabyasachi",
  description: "Premium bridal lehenga designed for weddings.",
  price: 4599,
  oldPrice: 5999,
  rating: 4.9,
  stock: 4,
  delivery: "Free Delivery in 5 Days",
  features: [
    "Bridal Design",
    "Rich Embroidery",
    "Premium Fabric",
    "Luxury Look"
  ],
  image: WDress20
}
        ]
      },
      {
        id:2,
        name:"mens",
        products:[
          {
  id: 201,
  category: "Men",
  title: "Casual Cotton Shirt",
  name: "Shirt",
  brand: "Levis",
  description: "Comfortable cotton shirt perfect for everyday casual wear.",
  price: 899,
  oldPrice: 1299,
  rating: 4.4,
  stock: 12,
  delivery: "Free Delivery in 3 Days",
  features: [
    "Pure Cotton Fabric",
    "Breathable Material",
    "Regular Fit",
    "Comfortable Wear"
  ],
  image: MDress1
},
{
  id: 202,
  category: "Men",
  title: "Slim Fit Jeans",
  name: "Jeans",
  brand: "Wrangler",
  description: "Stylish slim fit jeans designed for a modern look.",
  price: 1799,
  oldPrice: 2499,
  rating: 4.5,
  stock: 10,
  delivery: "Free Delivery in 3 Days",
  features: [
    "Slim Fit Design",
    "Durable Denim Fabric",
    "Modern Style",
    "Comfort Stretch"
  ],
  image: MDress2
},
{
  id: 203,
  category: "Men",
  title: "Formal Blazer",
  name: "Blazer",
  brand: "Allen Solly",
  description: "Elegant formal blazer suitable for meetings and events.",
  price: 2999,
  oldPrice: 3999,
  rating: 4.6,
  stock: 7,
  delivery: "Free Delivery in 4 Days",
  features: [
    "Premium Fabric",
    "Formal Design",
    "Slim Fit",
    "Professional Look"
  ],
  image: MDress3
},
{
  id: 204,
  category: "Men",
  title: "Printed T-Shirt",
  name: "T-Shirt",
  brand: "H&M",
  description: "Trendy printed t-shirt perfect for casual outings.",
  price: 699,
  oldPrice: 999,
  rating: 4.3,
  stock: 15,
  delivery: "Free Delivery in 3 Days",
  features: [
    "Soft Cotton Fabric",
    "Stylish Print",
    "Lightweight",
    "Casual Wear"
  ],
  image: MDress4
},
{
  id: 205,
  category: "Men",
  title: "Traditional Kurta",
  name: "Kurta",
  brand: "Manyavar",
  description: "Elegant traditional kurta suitable for festive occasions.",
  price: 1199,
  oldPrice: 1599,
  rating: 4.5,
  stock: 9,
  delivery: "Free Delivery in 4 Days",
  features: [
    "Ethnic Design",
    "Comfortable Fabric",
    "Festive Wear",
    "Traditional Style"
  ],
  image: MDress5
},
{
  id: 206,
  category: "Men",
  title: "Denim Jacket",
  name: "Jacket",
  brand: "Levis",
  description: "Stylish denim jacket for a rugged casual look.",
  price: 2199,
  oldPrice: 2999,
  rating: 4.6,
  stock: 8,
  delivery: "Free Delivery in 4 Days",
  features: [
    "Durable Denim",
    "Classic Style",
    "Comfort Fit",
    "All Season Wear"
  ],
  image: MDress6
},
{
  id: 207,
  category: "Men",
  title: "Sports Track Suit",
  name: "Track Suit",
  brand: "Nike",
  description: "Comfortable track suit designed for sports and workouts.",
  price: 1499,
  oldPrice: 1999,
  rating: 4.4,
  stock: 11,
  delivery: "Free Delivery in 3 Days",
  features: [
    "Sports Fabric",
    "Flexible Material",
    "Athletic Fit",
    "Workout Friendly"
  ],
  image: MDress7
},
{
  id: 208,
  category: "Men",
  title: "Winter Hoodie",
  name: "Hoodie",
  brand: "Adidas",
  description: "Warm hoodie designed for winter comfort.",
  price: 1299,
  oldPrice: 1799,
  rating: 4.5,
  stock: 10,
  delivery: "Free Delivery in 3 Days",
  features: [
    "Warm Fabric",
    "Hooded Design",
    "Casual Style",
    "Winter Wear"
  ],
  image: MDress8
},
{
  id: 209,
  category: "Men",
  title: "Party Wear Suit",
  name: "Suit",
  brand: "Raymond",
  description: "Premium party wear suit for formal events.",
  price: 3799,
  oldPrice: 4999,
  rating: 4.7,
  stock: 6,
  delivery: "Free Delivery in 5 Days",
  features: [
    "Premium Fabric",
    "Elegant Fit",
    "Formal Design",
    "Luxury Look"
  ],
  image: MDress9
},
{
  id: 210,
  category: "Men",
  title: "Casual Shorts",
  name: "Shorts",
  brand: "Puma",
  description: "Lightweight casual shorts perfect for summer.",
  price: 599,
  oldPrice: 899,
  rating: 4.2,
  stock: 14,
  delivery: "Free Delivery in 3 Days",
  features: [
    "Lightweight Fabric",
    "Relaxed Fit",
    "Summer Wear",
    "Comfortable Style"
  ],
  image: MDress10
},
{
  id: 211,
  category: "Men",
  title: "Formal Trousers",
  name: "Trousers",
  brand: "Allen Solly",
  description: "Professional formal trousers for office wear.",
  price: 1399,
  oldPrice: 1899,
  rating: 4.4,
  stock: 10,
  delivery: "Free Delivery in 3 Days",
  features: [
    "Formal Style",
    "Slim Fit",
    "Soft Fabric",
    "Office Wear"
  ],
  image: MDress11
},
{
  id: 212,
  category: "Men",
  title: "Graphic T-Shirt",
  name: "T-Shirt",
  brand: "H&M",
  description: "Trendy graphic t-shirt with modern design.",
  price: 799,
  oldPrice: 1099,
  rating: 4.3,
  stock: 13,
  delivery: "Free Delivery in 3 Days",
  features: [
    "Graphic Print",
    "Soft Cotton",
    "Casual Style",
    "Comfort Fit"
  ],
  image: MDress12
},
{
  id: 213,
  category: "Men",
  title: "Leather Jacket",
  name: "Jacket",
  brand: "Zara",
  description: "Premium leather jacket for a bold stylish look.",
  price: 4599,
  oldPrice: 5999,
  rating: 4.7,
  stock: 5,
  delivery: "Free Delivery in 5 Days",
  features: [
    "Genuine Leather",
    "Stylish Design",
    "Winter Wear",
    "Premium Look"
  ],
  image: MDress13
},
{
  id: 214,
  category: "Men",
  title: "Ethnic Sherwani",
  name: "Sherwani",
  brand: "Manyavar",
  description: "Traditional sherwani perfect for weddings.",
  price: 5499,
  oldPrice: 6999,
  rating: 4.8,
  stock: 4,
  delivery: "Free Delivery in 5 Days",
  features: [
    "Rich Embroidery",
    "Wedding Wear",
    "Premium Fabric",
    "Traditional Style"
  ],
  image: MDress14
},
{
  id: 215,
  category: "Men",
  title: "Summer Linen Shirt",
  name: "Shirt",
  brand: "Zara",
  description: "Breathable linen shirt perfect for summer days.",
  price: 999,
  oldPrice: 1399,
  rating: 4.4,
  stock: 12,
  delivery: "Free Delivery in 3 Days",
  features: [
    "Linen Fabric",
    "Breathable Material",
    "Summer Friendly",
    "Comfort Fit"
  ],
  image: MDress15
},
{
  id: 216,
  category: "Men",
  title: "Jogger Pants",
  name: "Joggers",
  brand: "Nike",
  description: "Comfortable jogger pants suitable for casual wear.",
  price: 1099,
  oldPrice: 1499,
  rating: 4.3,
  stock: 11,
  delivery: "Free Delivery in 3 Days",
  features: [
    "Elastic Waist",
    "Comfort Fit",
    "Casual Style",
    "Soft Fabric"
  ],
  image: MDress16
},
{
  id: 217,
  category: "Men",
  title: "Classic Polo T-Shirt",
  name: "Polo T-Shirt",
  brand: "Puma",
  description: "Classic polo t-shirt with elegant casual style.",
  price: 899,
  oldPrice: 1299,
  rating: 4.5,
  stock: 13,
  delivery: "Free Delivery in 3 Days",
  features: [
    "Polo Collar",
    "Soft Cotton",
    "Elegant Casual Wear",
    "Comfort Fit"
  ],
  image: MDress17
},
{
  id: 218,
  category: "Men",
  title: "Denim Cargo Pants",
  name: "Cargo Pants",
  brand: "Wrangler",
  description: "Stylish cargo pants with multiple pockets.",
  price: 1699,
  oldPrice: 2299,
  rating: 4.4,
  stock: 9,
  delivery: "Free Delivery in 3 Days",
  features: [
    "Multiple Pockets",
    "Durable Denim",
    "Casual Style",
    "Comfort Fit"
  ],
  image: MDress18
},
{
  id: 219,
  category: "Men",
  title: "Wedding Special Suit",
  name: "Suit",
  brand: "Raymond",
  description: "Luxury wedding suit designed for special occasions.",
  price: 6299,
  oldPrice: 7999,
  rating: 4.8,
  stock: 4,
  delivery: "Free Delivery in 5 Days",
  features: [
    "Premium Fabric",
    "Wedding Wear",
    "Elegant Fit",
    "Luxury Look"
  ],
  image: MDress19
},
{
  id: 220,
  category: "Men",
  title: "Basic White Shirt",
  name: "Shirt",
  brand: "H&M",
  description: "Classic white shirt suitable for formal and casual wear.",
  price: 799,
  oldPrice: 1199,
  rating: 4.4,
  stock: 14,
  delivery: "Free Delivery in 3 Days",
  features: [
    "Classic White Design",
    "Soft Cotton Fabric",
    "Formal & Casual Wear",
    "Comfort Fit"
  ],
  image: MDress20
}
        ]
      },
      {
        id:3,
        name:"items",
        products:[
          {
    id: 301,
    category : "SmartPhone",
    title: "Samsung Galaxy M14",
    name: "Smartphone",
    brand: "Samsung",
    description: "6.6-inch display, 6000mAh battery and powerful processor for smooth performance.",
    price: 12999,
    oldPrice: 20400,
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
    id: 302,
    category : "SmartPhone",
    title: "Nokia 105 Classic",
    name: "Keypad Phone",
    brand: "Nokia",
    description: "Long-lasting battery with durable design and clear sound quality.",
    price: 999,
    oldPrice: 1599,
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
    id: 303,
    category : "Sm",
    title: "Boat Rockerz 450",
    name: "Headphones",
    brand: "Boat",
    description: "Wireless over-ear headphones with deep bass and 15 hours playback.",
    price: 2999,
    oldPrice: 5999,
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
    id: 304,
    category : "Sm",
    title: "Noise ColorFit Pro",
    name: "Smart Watch",
    brand: "Noise",
    description: "Feature-packed smart watch designed to keep up with your active lifestyle.",
    price: 4999,
    oldPrice: 7999,
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
    id: 305,
    category : "Sm",

    title: "JBL Flip 5",
    name: "Bluetooth Speaker",
    brand: "JBL",
    description: "Portable speaker with powerful bass and waterproof design.",
    price: 1999,
    oldPrice: 2500,
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
    id: 306,
    category : "Sm",

    title: "Lenovo Tab M10",
    name: "Tablet",
    brand: "Lenovo",
    description: "10.1-inch display tablet perfect for entertainment and productivity.",
    price: 18999,
    oldPrice: 20999,
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
    id: 307,
    category : "Sm",

    title: "Logitech Mechanical Keyboard",
    name: "Keyboard",
    brand: "Logitech",
    description: "RGB backlit keyboard with smooth typing experience.",
    price: 1499,
    oldPrice: 2000,
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
    id: 308,
    category : "Sm",
    title: "HP Wireless Mouse",
    name: "Mouse",
    brand: "HP",
    description: "Ergonomic wireless mouse with high precision tracking.",
    price: 799,
    oldPrice: 1599,
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
    id: 309,
    category : "Sm",
    title: "Sony PlayStation 5",
    name: "Gaming Console",
    brand: "Sony",
    description: "Next-gen gaming console with ultra-fast SSD and stunning graphics.",
    price: 39999,
    oldPrice: 45499,
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
    id: 310,
    category : "Sm",
    title: "Canon EOS 1500D",
    name: "Camera",
    brand: "Canon",
    description: "24.1MP DSLR camera with high-quality image capture and WiFi support.",
    price: 25999,
    oldPrice: 30400,
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
  },
        ]
      },
    ])


    const[volume , setVolume] = useState(true)
    

    return (
        <mystore.Provider value={{product,setProduct,isAuth , setIsAuth, login , logout ,userName , setUserName , viewData , setViewData , viewMoreData,volume , setVolume}}>{children}</mystore.Provider>
    )
}