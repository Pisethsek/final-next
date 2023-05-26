import Link from 'next/link'
import React from 'react'

export default function UserCard({id, name, img}) {

  return (
    <div className='col-xl-3 mb-4'>
    <div class="card">
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link href={`users/${id}`} class="btn btn-primary">Click Detail</Link>
        </div>
    </div>
    </div>
  )

}
