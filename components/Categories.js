import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

const Categories = () => {
  const [categories, setCategories] = useState([])
  
  useEffect(() => {
    getCategories()
    .then((newCategories) => setCategories(newCategories))
  }, [])
  
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8 pb-12'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        Categories
      </h3>     
      {categories.map((cat) => (
        <Link key={cat?.slug} href={`/category/${cat?.slug}`}>
          <span className='cursor-pointer block pb-3 mb-3'>
            {cat?.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories
