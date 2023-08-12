import { useContext } from 'react';
import mainContext from '@root/context/mainContext';

export default function Search() {

  const ctx = useContext(mainContext);
  const { get_console_log, setPostCode } = ctx;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPostCode(e.target.value);
    get_console_log();
  }

  return (
    <div className="Search">
      <input type="text" name="text" autoComplete="off" required onChange={onChangeHandler} />
      <label htmlFor="text" className="Search_Name">
        <span className="Search_Label">
          Postcode
        </span>
      </label>
    </div>

  )
}