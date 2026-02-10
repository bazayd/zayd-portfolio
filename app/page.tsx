'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, FormEvent } from 'react';


type Period = {
  name: string;
  temperature: number;
  temperatureUnit: string;
  shortForecast: string;
  windSpeed: string;
  windDirection: string;
  icon: string;
}

export default function Home() {
  const [ locationInput, setLocationInput] = useState("");
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocationInput(e.target.value);
  }

   const [ coordinates, setCoordinates ] = useState<null | {
    lat?: string;
    lon?: string;
  }>(null);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    
    const trimmed = locationInput.trim();
    const [city, state] = trimmed.split(",").map(s => s.trim());

    if (!city || !state) {
      return;
    }

    getCoordinates(city, state);
    
  }


 

  async function getCoordinates(city: string, state: string) {
    try {
      const res = await fetch(`/api/location?city=${encodeURIComponent(city)}&state=${encodeURIComponent(state)}`);
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      const data = await res.json();
      setCoordinates(data);

      if(data?.lat && data?.lon) {
        getForecast(data.lat, data.lon);
      }

    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : String(e);
    }
  }

  

  // union type; either null or object with following shape using loc, state, upd, and periods(slice)
  const [forecast, setForecast] = useState<null | {
    location?: string;
    state?: string;
    updated?: string;
    periods: Period[];
    timeZone?: string;
  }>(null);

  // loading for loading spinners, if data is loading or finished
  const[loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  async function getForecast(lat: number, lon: number) {
    // loading true, calling API, error is null
    setLoading(true);
    setError(null);

    try {
      // uses /api/forecast endpoint,called through application rather than weather.gov itself
      const res = await fetch(`/api/forecast?lat=${lat}&lon=${lon}`);
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      const data = await res.json();
      setForecast(data);
    } catch (e: any) {
      setError(e.message ?? "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getForecast(37.3559, -121.8506);
  }, []);

  const [active, setActive] = useState(false)

  

  return (
    <div className="flex flex-col items-center font-sans">
      <main className="w-full max-w-3xl py-16 sm:py-24 px-4 sm:px-10 bg-white">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center text-center sm:text-left">

          {/* <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Edit this file (page.tsx) 
            <br />
            <Link prefetch={active ? null : false} onMouseEnter={() => setActive(true)} href={`/blog/`}>Check out the blog too!</Link>
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center. This page has fast reloads
          </p> */}
          <Image
          className="rounded-full"
          src="/brandon_img.jpg"
          alt="Next.js logo"
          width={230}
          height={50}
          priority
          />
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl text-black font-bold m-10">Brandon Arriaga</h1>

            <p className="text-black">Brandon Arriaga is currently a Data Analyst at San Jose State University for 
              the Facilities Development & Operations department.</p>
          </div>
        </div>
        

        {/* Forecast card */}
        <div className="mt-20 w-full rounded-lg border border-zinc-200 p-5">
          <h2 className="text-lg font-semibold text-black">Brandon's Weather Forecast</h2>
          <form className="w-full max-w-sm" onSubmit={handleSubmit}>
            <div  className="flex flex-col sm:flex-row sm:items-center gap-2 border-b border-teal-500 py-2">
              <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
               value={locationInput}
               onChange={handleChange}
               type="text"
               id="locationInput"
                placeholder="City, State" 
                aria-label="Full name"/>
              <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
               type="submit">
                Search
              </button>
            </div>
          </form>

          {loading && <p className="text-zinc-600 mt-2">Loading forecast...</p>}
          {error && <p className="text-red-600 mt-2">{error}</p>}

          {forecast && !loading && (
            <>
              <p className="text-zinc-600 mt-1 break-words">
                Current Location: {forecast.location}, {forecast.state} - TimeZone: {forecast.timeZone}
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {forecast.periods.map((p) => (
                  <div key={p.name} className="rounded-md bg-zinc-50 p-3 border border-zinc-200">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-medium text-black">{p.name}</p>
                      {/* icon is a URL from NWS */}
                      <img src={p.icon} alt={p.shortForecast} className="h-10 w-10" />
                    </div>

                    <p className="text-black mt-2">
                      {p.temperature}°{p.temperatureUnit} — {p.shortForecast}
                    </p>

                    <p className="text-zinc-600 mt-1 text-sm">
                      Wind: {p.windSpeed} {p.windDirection}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

      </main>
      
    </div>
  );
}
