import UserCard from '@/components/userCard'
import React from 'react'
import { FindAllUsers } from '../lib/data'

export default async function UserPages() {
    
  const users = await FindAllUsers()

  return (
    <div className='container mt-4'>
        <div className='row'>
        <h1 className='mb-4'>User Sections</h1>
                {
                    users.map(res => (
                    <UserCard key={res.id} id={res.id} name={res.firstName} img={res.avatar}/>
                    ))
                }
        </div>
    </div>
  )
}
