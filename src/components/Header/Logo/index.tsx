import logo from '@root/assets/logos/SVG/busboard-logo.svg'
import { NavLink } from 'react-router-dom'

export default function Logo() {
  return (
    <NavLink to='/'><img className='logo' src={logo} alt="BusBoard Logo" /></NavLink>
  )
}