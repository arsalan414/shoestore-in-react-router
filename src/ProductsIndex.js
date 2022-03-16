import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { shoes } from './shoe'

const ProductsIndex = () => {

    const params = useParams();
    console.log(params.ProductId)
    const shoe = shoes.filter(shoe=> shoe.name === params.ProductId)
    console.log(shoe)
  return (
    <div style={{textAlign: "center"}}>
        <h1>{shoe[0].name}</h1>
        <img src={require(`${shoe[0].url}`)} height={500} width={500} />
        <h1>Buy Now</h1>
    </div>
    
  )
}

export default ProductsIndex