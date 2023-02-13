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
      <li><button onClick={()=> getTopNewsCategory('general', category.current.value)}>General</button></li>

      <li><button onClick={()=> getTopNewsCategory('world', category.current.value)}>World</button></li>
      <li><button onClick={()=> getTopNewsCategory('nation', category.current.value)}>Nation</button></li>
      <li><button onClick={()=> getTopNewsCategory('business', category.current.value)}>Business</button></li>
      <li><button onClick={()=> getTopNewsCategory('technology', category.current.value)}>Technology</button></li>
      <li><button onClick={()=> getTopNewsCategory('entertainment', category.current.value)}>Entertainment</button></li>
      <li><button onClick={()=> getTopNewsCategory('sport', category.current.value)}>Sport</button></li>
      <li><button onClick={()=> getTopNewsCategory('science', category.current.value)}>Science</button></li>
      <li><button onClick={()=> getTopNewsCategory('health', category.current.value)}>Health</button></li>
    </ul>
  </div>
</div>
</>
  )
}
export default NavBar