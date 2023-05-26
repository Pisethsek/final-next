import Link from "next/link";

export default function ProductCard({id, img, title, price}) {
    return (
      <div className='col-xl-3 mb-4'>
      <div class="card">
          <img src={img} class="card-img-top" alt="..." />
          <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link href={`products/${id}`} class="btn btn-primary">{price}</Link>
          </div>
      </div>
      </div>
    )
}