

export default function WeatherCard({weather}){




    return(
        <>
        <div className="mt-4">
            <h2 className="mt-8 text-2xl font-bold text-center">{weather.name}, {weather.sys.country}</h2>

            <div className="flex space-x-0 items-center justify-center mt-2">
               <img className="w-22 h-22" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}/>
                <p className="text-2xl font-bold">{Math.round(weather.main.temp)}°C</p>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">

                <div className="flex flex-col items-center justify-center">
                    <p className="font-extrabold">Humidity:</p>
                    <p className="font-bold">{weather.main.humidity}%</p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <p className="font-extrabold">Pressure:</p>
                    <p className="font-bold">{weather.main.pressure}hPa</p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <p className="font-extrabold">Feels like:</p>
                    <p className="font-bold">{Math.round(weather.main.feels_like)}°C</p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <p className="font-extrabold">Humidity:</p>
                    <p className="font-bold">{weather.wind.speed} m/s</p>
                </div>


            </div>

        </div>
        </>
    )
}