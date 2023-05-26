
import ProductCard from '@/components/productCard'
import React from 'react'
import { FindAllProducts } from '../lib/data'

export default async function ProductPages() {

  const prouducts = await FindAllProducts()

  return (
    <div className='container mt-4'>
    <div className='row'>
    <h1 className='mb-4'>Product Sections</h1>
            {
                prouducts.map(res => (
                <ProductCard id={res.id} img={res.images[0]} title={res.title} price={res.price}/>
                ))
            }
    </div>
    </div>
  )
}