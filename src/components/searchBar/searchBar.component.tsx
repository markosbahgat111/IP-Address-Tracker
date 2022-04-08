import React from 'react'
import arrowIcon from 'assets/images/icon-arrow.svg';
import './style.scss';
interface Props {
    handleSearch:(value:string) => void
}

const SEARCHBAR: React.FC<Props> = ({handleSearch}) => {
    const [inputValue, setInputValue] = React.useState<string>("");
    const handleClick = () => {
        setInputValue('');
        if(inputValue) handleSearch(inputValue);
    }
  return (
      <div className='w-[90%] md:w-1/3 h-[45px] overflow-hidden rounded-lg m-auto md:my-10 my-5 bg-white flex justify-between'>
          <input type='text' value={inputValue} className='input w-11/12 h-full focus:outline-none px-5' placeholder='Search for any IP address or domain' onChange={(e) => setInputValue(e.target.value)}/>
          <img src={arrowIcon} alt='arrowIcon' className='icon cursor-pointer bg-black p-4' onClick={handleClick}/>
    </div>
  )
}

export default SEARCHBAR