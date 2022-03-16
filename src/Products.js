import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { shoes } from './shoe'

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <div style={{ display: "flex", flexWrap: 'wrap' }}>
      {
      shoes.map(shoe => {
        return (
          
            <Link className='products' to={`/Products/${shoe.name}`}>
                <img src={require(`${shoe.url}`)} height={300} width={300} />
                <h1>{shoe.name}</h1>
            </Link>
          
        )
      })
      }
      </div>

    </div>
    
  )
}

export default Products