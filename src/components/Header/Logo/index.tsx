import logo from '@root/assets/busboard-logo.svg'
import loader from '@root/assets/loader.gif'
import type { MainContextType } from '@root/types/context'

import mainContext from '@root/context/mainContext'
import { useContext } from 'react'

import { NavLink } from 'react-router-dom'

export default function Logo() {

  const ctx = useContext(mainContext) as MainContextType;
  const { loading } = ctx;

  return (
    <NavLink to='/'><img className='logo' src={loading ? loader : logo} alt="BusBoard Logo" /></NavLink>
  )
}