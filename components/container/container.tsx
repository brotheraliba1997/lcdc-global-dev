import React from 'react'

function Container({children}:any) {
  return (
    <div className='mx-auto w-[80%]'>
      {children}
    </div>
  )
}

export default Container
