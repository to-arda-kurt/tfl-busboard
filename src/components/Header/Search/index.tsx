import { useContext } from 'react';
import mainContext from '@root/context/mainContext';
import { MainContextType } from '@root/types/context';

export default function Search() {

  const ctx = useContext(mainContext) as MainContextType;
  const { setPostcode } = ctx;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPostcode(e.target.value);
  }

  return (
    <>
      <input type="text" name="text" autoComplete="off" required onChange={onChangeHandler} />
    </>

  )
}