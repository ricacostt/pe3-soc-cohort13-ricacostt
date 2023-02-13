import React, {useRef} from 'react'

function NavBar(props) {
  const { getTopNewsCategory} = props
  const category = useRef("")
  console.log(category)
  return (
    <>
    <div className="navbar bg-secondary">
  <div className="flex-1">
    <a href='/' className="btn btn-ghost normal-case text-xl">GNEWS</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><button onClick={()=> getTopNewsCategory('General', category.current.value)}>General</button></li>

      <li><button onClick={()=> getTopNewsCategory('World', category.current.value)}>World</button></li>
      <li><button onClick={()=> getTopNewsCategory('Nation', category.current.value)}>Nation</button></li>
      <li><button onClick={()=> getTopNewsCategory('Business', category.current.value)}>Business</button></li>
      <li><button onClick={()=> getTopNewsCategory('Technology', category.current.value)}>Technology</button></li>
      <li><button onClick={()=> getTopNewsCategory('Entertainment', category.current.value)}>Entertainment</button></li>
      <li><button onClick={()=> getTopNewsCategory('Sport', category.current.value)}>Sport</button></li>
      <li><button onClick={()=> getTopNewsCategory('Science', category.current.value)}>Science</button></li>
      <li><button onClick={()=> getTopNewsCategory('Health', category.current.value)}>Health</button></li>
    </ul>
  </div>
</div>
</>
  )
}
export default NavBar