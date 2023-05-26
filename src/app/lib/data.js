
// find all users
export async function FindAllUsers(){
    const users = await fetch("https://api.escuelajs.co/api/v1/users?offset=0&limit=8", {cache: "no-store"})
    return users.json()
}

// find user by id
export async function FindUserById(id){
    const user = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`, {cache:"no-store"})
    return user.json()
}

// find all categoies
export async function FindAllCategories(){
    const users = await fetch("https://api.escuelajs.co/api/v1/categories", {cache: "no-store"})
    return users.json()
}

// find category by id
export async function FindCategoryById(id){
    const user = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}`, {cache:"no-store"})
    return user.json()
}

// find all products
export async function FindAllProducts(){
    const users = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=20", {cache: "no-store"})
    return users.json()
}

// find product by id
export async function FindProductById(id){
    const user = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {cache:"no-store"})
    return user.json()
}