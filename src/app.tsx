import SearchBar from './components/searchBar';
import axios from 'axios';
import {useState} from 'react';
import WeatherCard from './components/weatherCard';
import video from './assets/video.mp4'


export default function App(){

    const [weather, setWeather]=useState(null)
    const [loading, setLoading]=useState(false)
    const [error, setError]=useState('');

    const API_KEY=import.meta.env.VITE_API_KEY
    const API_URL=`https://api.openweathermap.org/data/2.5/weather`

    const fetchWeather= async (city: string)=>{
        setLoading(true)
        setError('')
        try{
            const url=`${API_URL}?q=${city}&units=metric&appid=${API_KEY}`;
            const response=await axios.get(url);
            console.log(response.data);
            setWeather(response.data);

        }catch(err){
            if(err.response && err.response.status===404){
                setError('City not found. Please try again later.')
            }else{
                setError('An error occured. Please try again later.')
            }
        setWeather(null)                
        }finally{
            setLoading(false)
        }
    };


    return(
        <>
        <div className="h-screen bg-blue-200 flex justify-center items-center relative overflow-hidden">
        <video className='absolute top-0 left-0 w-full h-full object-cover' autoPlay loop muted>
            <source src={video} type='video/mp4' />
            your browser doesn't support the video tag
        </video>
        <div className="min-w-20 min-h-10  bg-black/50 text-amber-50 p-5 rounded-xl z-10">
            <h1 className="text-3xl font-bold text-center text-shadow-lg/30">Weather App</h1>
            <SearchBar fetchWeather={fetchWeather}/>
            {loading && <p className='text-center mt-4'>Loading...</p>}
            {error && <p className='text-red-500 text-center mt-4'>{error}</p>}
            {weather && <WeatherCard weather={weather} /> }
        </div>
        </div>
        </>
    )
}