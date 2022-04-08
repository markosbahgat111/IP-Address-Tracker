import React from 'react'
import { ILocation } from '../../model/location.model';

interface Props {
  data:ILocation| null
}

const LocationData:React.FC<Props> = ({data}) => {
  return (
    <div className='w-[90%] md:w-10/12 h-fit md:h-[15vh] rounded-xl bg-white flex flex-col md:flex-row items-center justify-between text-center md:text-left m-auto py-3 md:px-10 md:pr-40'>
      <div>
        <span className='text-gray-500 uppercase text-xs tracking-widest'>Ip Address</span>
        <h1 className='font-bold md:text-2xl text-xl mt-2'>{data?.ip}</h1>
      </div>
      <div className='md:border-l-2 py-2 md:pl-7'>
        <span className='text-gray-500 uppercase text-xs tracking-widest'>Location</span>
        <h1 className='font-bold md:text-2xl text-xl mt-2'>{data?.location.region}, {" " + data?.location.city}</h1>
      </div>
      <div className='md:border-l-2 py-2 md:pl-7'>
        <span className='text-gray-500 uppercase text-xs tracking-widest'>Timezone</span>
        <h1 className='font-bold md:text-2xl text-xl mt-2'>UTC{" " +  data?.location.timezone}</h1>
      </div>
      <div className='md:border-l-2 md:py-2 md:pl-7'>
        <span className='text-gray-500 uppercase text-xs tracking-widest'>ISP</span>
        <h1 className='font-bold md:text-2xl text-xl mt-2'>{data?.isp}</h1>
      </div>
    </div>
  )
}

export default LocationData;