import React from 'react'
import {auth} from '@/auth'
const User = async() => {
    const session =await auth()

    console.log(session)
  return (
    <div>
        {session?.user?.name}
    </div>
  )
}

export default User