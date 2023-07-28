import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (

    <nav>
      <ul>
        <li><NavLink to='/busboard' className={({isActive}) => `navbar__link ${isActive ? "navbar__link--active" : ""}`}>Busboard</NavLink></li>
        <li><NavLink to='/journey-planner' className={({isActive}) => `navbar__link ${isActive ? "navbar__link--active" : ""}`}>Journey Planner</NavLink></li>
      </ul>
    </nav>
  )
}