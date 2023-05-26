import 'bootstrap/dist/css/bootstrap.css'
import UserPages from './users/page'
import ProductPages from './products/page'
import CategoriesPages from './categories/page'

export default function Home() {
  return (
    <main>
      <div className='container'>
       
       {/* list all users */}
       <div className='row'>
            <UserPages />
        </div>

        {/* list all products */}
        <div className='row'>
            <ProductPages />
        </div>

        {/* list all categories */}
        <div className='row'>
            <CategoriesPages />
        </div>

      </div>
    </main>
  )
}
