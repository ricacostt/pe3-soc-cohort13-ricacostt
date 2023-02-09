import React from 'react'

function NavBar() {
  return (
    <>
    <div className="navbar bg-base-100 p-8">
  <div className="flex-1">
    <a href='/' className="btn btn-ghost normal-case text-5xl mr-10"> G NEWS</a>
  </div>
  <div className='categories flex-row flex-auto gap-10'>
    <button className='text-xl'>General</button>
    <button className='text-xl'>World</button>
    <button className='text-xl'>Nation</button>
    <button className='text-xl'>Business</button>
    <button className='text-xl'>Technology</button>
    <button className='text-xl'>Entertainment</button>
    <button className='text-xl'>Sports</button>
    <button className='text-xl'>Science</button>
    <button className='text-xl'>Health</button>
  </div>
  <div className="flex-none gap-2">
  </div>
</div>
</>
  )
}

export default NavBar