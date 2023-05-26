import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <b>
        Zeth Code Cam
      </b>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
        
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" href={`/`} >Home</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" href={`/products`} >Product</Link>
        </li>


        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" href={`/users`}>User</Link>
        </li>
       
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" href={`/categories`}>Category</Link>
        </li>

      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <Link class="btn btn-success" href={`/form`}>Add</Link>
      </form>
    </div>
  </div>
</nav>
  )
}
