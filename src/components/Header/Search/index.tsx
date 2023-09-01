import { useContext } from 'react';
import mainContext from '@root/context/mainContext';
import { MainContextType } from '@root/types/context';
import { TbCurrentLocation } from "react-icons/tb";

export default function Search() {

  const ctx = useContext(mainContext) as MainContextType;
  const { setPostcode, setLocationSource } = ctx;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPostcode(e.target.value);
    setLocationSource("postcodeSearch")
  }

  const onLocationHandler = () => {
    setLocationSource("userLocation")
  }

  return (
    <div className='Search'>
      <input className="Search--input" type="text" name="text" autoComplete="off" required onChange={onChangeHandler} />
      <button className="Search--btn" onClick={() => onLocationHandler()}><TbCurrentLocation /></button>
    </div>


  )
}