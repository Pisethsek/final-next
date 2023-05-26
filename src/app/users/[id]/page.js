import { FindUserById } from '@/app/lib/data'
import React from 'react'

export default async function UserDeatilPage({params}) {

  const {id} = params
  const user = await FindUserById(id)

  return (
    <>
      <div>User Detail Pages</div>
      <h1>{user.name}</h1>
    </>
  )
  
}
