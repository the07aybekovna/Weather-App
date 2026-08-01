import { useState } from "react";

type SearchBarProps = {
  fetchWeather: (city: string) => void;
};

function SearchBar({ fetchWeather }: SearchBarProps) {
  const [city, setCity] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (city.trim()) {
      fetchWeather(city);
      setCity("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-5 flex w-80">
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="flex-1 bg-gray-700 rounded-l-md pl-2 p-1 outline-none shadow-lg shadow-black/60"
        type="text"
        placeholder="Enter city name"
      />
      <button
        className="bg-blue-500 rounded-r-md p-2 hover:bg-blue-700 shadow-lg shadow-black/70"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;