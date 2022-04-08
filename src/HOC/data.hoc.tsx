import LocationData from 'components/LocationData/locationData.component';
import SEARCHBAR from 'components/searchBar/searchBar.component';
import React from 'react'
import useIpTracker from '../hooks/getMap.hook';
import MapComponent from '../components/map/map.component';

type Props = {}

const DataHOC = (props: Props) => {
    const { getLocation, data } = useIpTracker();
  const handleSearch = (value: string) => {
    getLocation(value);      
    }
    React.useEffect(() => {
        getLocation()
    }, [])
    
  return (
    <>
    <div className='absolute w-full m-auto z-10'>
      <h1 className='text-3xl text-white text-center font-[500] md:my-10 my-5'>IP Address Tracker</h1>
      <SEARCHBAR handleSearch={handleSearch}/>
      <LocationData data={data}/>
    </div>
      <div>
          <MapComponent data={data}/>
      </div>
    </>
  )
}

export default DataHOC;