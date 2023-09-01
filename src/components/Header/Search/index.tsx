import { useContext } from 'react';
import mainContext from '@root/context/mainContext';
import { MainContextType } from '@root/types/context';

export default function Search() {

  const ctx = useContext(mainContext) as MainContextType;
  const { setPostcode, setLocationSource } = ctx;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPostcode(e.target.value);
    setLocationSource("poscodeSearch")
  }

  const onLocationHandler = () => {
    setLocationSource("userLocation")
  }

  return (
    <>
      <input type="text" name="text" autoComplete="off" required onChange={onChangeHandler} />
      <button onClick={() => onLocationHandler()}>Use Loc</button>
    </>

  )
}