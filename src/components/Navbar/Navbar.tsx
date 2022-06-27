import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './sidebarData'
import './Navbar.css'
import { IconContext } from 'react-icons'
import { Link } from 'react-router-dom'
import { isTemplateExpression } from 'typescript'

const Navbar = () => {
  const [sidebar, setSideBar] = useState(false)

  const showSidebar = () => setSideBar(!sidebar)

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <FaIcons.FaBars onClick={showSidebar} />
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </li>
            {SidebarData.map((el, index) => {
              return (
                <li key={index} className={el.cName}>
                   <Link to={el.path}>
                  {el.icon} <span>{el.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
