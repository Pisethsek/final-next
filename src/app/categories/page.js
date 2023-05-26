import React from 'react'
import { FindAllCategories } from '../lib/data'
import CategoryCard from '@/app/components/categoryCard'

export default async function CategoriesPages() {

  const categories = await FindAllCategories()

  return (
    <div className='container mt-4'>
    <div className='row'>
    <h1 className='mb-4'>Category Sections</h1>
            {
                categories.map(res => (
                <CategoryCard key={res.id} id={res.id} img={res.image} title={res.name} />
                ))
            }
    </div>
</div>
)}