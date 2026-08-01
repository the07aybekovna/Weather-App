import {useState} from 'react';


function SearchBar({fetchWeather}){

    const [city, setCity]=useState<string>('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(city.trim()){
            setCity('');
            fetchWeather(city)
        }

    }


    return(
        <>
        <form onSubmit={handleSubmit} className="mt-5 flex w-80">
            <input value={city} onChange={(e)=>{setCity(e.target.value)}}  className="flex-1 bg-gray-700 rounded-l-md pl-2 p-1 outline-0 shadow-lg shadow-black/60" type="text" placeholder="Enter city name" />
            <button className="bg-blue-500 rounded-r-md p-2 hover:bg-blue-700 shadow-lg shadow-black/70" type="submit">Search</button>
        </form>

        </>
    )
}
export default SearchBar;