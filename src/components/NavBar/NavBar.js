import React from 'react'

function NavBar(props) {
  const {onClickGeneral, onClickWorld} = props
  return (
    <>
    <div className="navbar bg-secondary">
  <div className="flex-1">
    <a href='/' className="btn btn-ghost normal-case text-xl">GNEWS</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><button onClickGeneral={onClickGeneral}>General</button></li>

      <li><button onClickWorld={onClickWorld}>World</button></li>
      <li><button>Nation</button></li>
      <li><button>Business</button></li>
      <li><button>Technology</button></li>
      <li><button>Entertainment</button></li>
      <li><button>Sport</button></li>
      <li><button>Science</button></li>
      <li><button>Health</button></li>
    </ul>
  </div>
</div>
</>
  )
}
export default NavBar