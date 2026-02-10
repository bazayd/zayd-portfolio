'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, FormEvent } from 'react';


export default function Gemini() {
  const [text, setText] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

   




  return(
    <div className="min-h-screen flex flex-col text-black w-full py-16 sm:py-24 px-4 sm:px-10 bg-white place-items-center">
      <h1>IN Progress...</h1>
    </div>
  )
}