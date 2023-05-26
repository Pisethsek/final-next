import Link from "next/link";
import Image from "next/image";

export default function CategoryCard({id, img, name}) {
    return (
      <div className='col-xl-3 mb-4'>
      <div class="card">
          <Image src={img} class="card-Image-top" alt="..." width={100} height={100} />
          <div class="card-body">
              <h5 class="card-title">{name}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link href={`categories/${id}`} class="btn btn-primary">Click Detail</Link>
          </div>
      </div>
      </div>
    )
}