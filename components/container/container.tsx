import React from 'react'

function Container({children}:any) {
  return (
    <div className='mx-auto lg:w-[80%] w-[90%]'>
      {children}
    </div>
  )
}

export default Container
