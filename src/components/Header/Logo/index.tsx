import logo from '@root/assets/busboard-logo.svg'
import loader from '@root/assets/loader.gif'

import mainContext from '@root/context/mainContext'
import { useContext } from 'react'

import { NavLink } from 'react-router-dom'

export default function Logo() {

  const ctx = useContext(mainContext);
  const { loading } = ctx;

  return (
    <NavLink to='/'><img className='logo' src={!loader ? loader : logo} alt="BusBoard Logo" /></NavLink>
  )
}