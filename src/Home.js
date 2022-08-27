import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
  return (
    <div className='home'>
<img className='home__image' src="https://vertexbazaar.com/wp-content/uploads/2022/04/amazon-prime-video-banner.jpg" alt=""/>

{/* Product id, title, rating, price, image */}
{/* 1st row 2 products */}
<div className='home__row'>
<Product
id="123451"
title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
rating={4}
price={521}
image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"/>

<Product
id="123452"
title="OnePlus 10R 5G (Forest Green, 8GB RAM, 128GB Storage, 80W SuperVOOC)"
rating={5}
price={34999}
image="https://m.media-amazon.com/images/I/716uVx3Wr5L._SL1500_.jpg"/>

</div>

{/* Product id, title, rating, price, image */}
{/* 2nd row 3 products */}
<div className='home__row'>
<Product
id="123453"
title="Samsung 253 L 3 Star with Inverter Double Door Refrigerator (RT28A3453S8/HL, Elegant Inox)"
rating={4}
price={24290}
image="https://m.media-amazon.com/images/I/61r7yN0Nk5L._SL1500_.jpg"/>

<Product
id="123454"
title="American Tourister Casual Backpack"
rating={5}
price={1099}
image="https://m.media-amazon.com/images/I/A1+3Pfdc3IL._UL1500_.jpg"/>

<Product
id="123454"
title="New Apple AirPods Pro with MagSafe Charging Case"
rating={5}
price={20900}
image="https://m.media-amazon.com/images/I/71bhWgQK-cL._SL1500_.jpg"/>

</div>

{/* Product id, title, rating, price, image */}
{/* 3rd row 1 product */}
<div className='home__row'>
<Product
id="123456"
title="Sony Bravia 139 cm (55 inches) 4K Ultra HD Smart LED Google TV KD-55X74K (Black)"
rating={5}
price={63990}
image="https://m.media-amazon.com/images/I/71ZKGDdz1lL._SL1500_.jpg"/>

</div>

    </div>
     
  )
}

export default Home