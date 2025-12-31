import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const NavbarContext = createContext()
export const NavbarColorContext = createContext()

const NavContext = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false)
  const [navColor, setNavColor] = useState('white')

  const location = useLocation().pathname

  useEffect(() => {
    if (location === '/projects' || location === '/agence') {
      setNavColor('black')
    } else {
      setNavColor('white')
    }
  }, [location])

  return (
    <NavbarContext.Provider value={[navOpen, setNavOpen]}>
      <NavbarColorContext.Provider value={[navColor, setNavColor]}>
        {children}
      </NavbarColorContext.Provider>
    </NavbarContext.Provider>
  )
}

export default NavContext
