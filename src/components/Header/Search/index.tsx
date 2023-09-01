import { useContext } from 'react';
import mainContext from '@root/context/mainContext';
import { MainContextType } from '@root/types/context';
import { TbCurrentLocation } from "react-icons/tb";
import { isValidPostcode } from "@root/helper/validation";
import toast, { Toaster } from 'react-hot-toast';



export default function Search() {

  const ctx = useContext(mainContext) as MainContextType;
  const { setPostcode, setLocationSource } = ctx;



  const notify = () => toast.error(`Postcode is not valid, please check your postcode`);
  const success = () => toast.success('Thanks, I am taking you now, hold tight!')

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPostcode(e.target.value);

    if (e.target.value.length > 4) {
      if (!isValidPostcode(e.target.value)) {
        notify();
      } else {
        success();
      }
    }
    setLocationSource("postcodeSearch")

  }

  const onLocationHandler = () => {
    setLocationSource("userLocation")
  }



  return (
    <div className='Search'>
      <Toaster position="top-right" />
      <input className="Search--input" type="text" name="text" autoComplete="off" required onChange={onChangeHandler} />
      <button className="Search--btn" onClick={() => onLocationHandler()}><TbCurrentLocation /></button>
    </div>


  )
}