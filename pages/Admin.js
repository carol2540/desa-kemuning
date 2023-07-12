import { Dashboard } from '@/components/admin/Dashboard'
import {SignIn} from '@/components/admin/SignIn'
import { useAuth } from '@/context/AuthContext'
import React from 'react'

const Admin = () => {
  const { currentUser } = useAuth()
  console.log(currentUser)
  return (
    <>
    {currentUser === null ?   <SignIn /> : <Dashboard />}
    </>
  )
}

export default Admin