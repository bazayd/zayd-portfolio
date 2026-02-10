"use client"

import React from 'react'
import "./info.css";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'
import { useEffect, useCallback } from 'react';


export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()])

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.plugins().autoplay?.play()
  }, [emblaApi])

  return (
    <div className='flex flex-col min-h-screen justify-center font-sans text-black '>
        <div className="flex flex-col md:flex-row gap-8 mt-10 px-4 sm:px-8">
            <div className="embla w-full md:w-1/2">
                <div className="embla__viewport rounded-md overflow-hidden" ref={emblaRef}>
                    <div className="embla__container">
                    <div className="embla__slide"><img  className="rounded-sm w-full h-65 sm:h-80 md:h-[28rem] object-contain" src="/info_2.jpg" alt="" /></div>
                    <div className="embla__slide"><img  className="rounded-sm w-full h-65 sm:h-80 md:h-[28rem] object-contain" src="/info_1.jpg" alt="" /></div>
                    <div className="embla__slide"><img  className="rounded-sm w-full h-65 sm:h-80 md:h-[28rem] object-contain" src="/info_3.jpg" alt="" /></div>
                    </div>
                </div>

                <div className='mt-4 flex justify-center gap-4'>
                    <button className="embla__prev bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded items-center" onClick={scrollPrev}>
                        Prev
                    </button>
                    <button className="embla__next bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded items-center" onClick={scrollNext}>
                        Next
                    </button>
                </div>

            </div>

            <div className='flex flex-col justify-start w-full md:w-1/2 m-auto'>
                <h1 className='text-2xl font-bold text-center m-2'>About me</h1>
                <h1 className='text-2xl text-base sm:text-lg leading-relaxed m-2'>My name is Brandon Arriaga. I am currently a Data Analyst at San Jose State University, doing
                    an apprenticeship within work study in the Facilities Development & Operations Department. I have been with SJSU
                    for over a year now.
                </h1>
                <h1 className='text-2xl text-base sm:text-lg leading-relaxed m-2'>A little about my work ethic is that I enjoy problem solving and emphasizing attention-to-detail. I deliver
                    on time and put my all into my work. Here is how I often plan out my work:
                </h1>
                <ul className="list-disc list-inside ml-2 pl-2 sm:pl-7 text-sm sm:text-md space-y-2">
                    <li>I begin by understanding the problem and necessities of the business at hand. What is they are 
                        asking for and what is their invisioned endgoal.
                    </li>
                    <li>I then proceed to jot down the data necessary, identify sources of said data, and gather
                        list of tools and technologies (Such as Excel, SQL, Python, Golang, Power BI, etc.) for the job. 
                    </li>
                    <li>
                        I then begin by gathering relevant data from my written sources (such as databases, APIs, surveys/forms, and management systems). 
                        I scrape the necessary data and then validate it to verify accuracy and relevancy to the problem at hand.
                    </li>
                    <li>
                        I then perform an exploratory analysis to understand the distribution and 
                        metrics. I present my findings through word reports and presentation slides
                        to non-technical audiences to push possible solutions.
                    </li>
                </ul>
            </div>
        </div>

        <div className='flex flex-col gap-5 items-center ml-4 mt-8'>
            <h1 className='text-2xl font-bold text-center'>Skills</h1>
            <h2 className='text-base sm:text-lg leading-relaxed'>
                Programming Languages: JavaScript, TypeScript, Java, C/C++, Python, Golang, R, MySQL
                <br />
                Frameworks: Node.js, Flask, Django, Springboot, Tailwind CSS
                <br />
                Libraries: React, Next.js, Vue.js, Jinja, PyTorch, NumPy, Pandas
                <br />
                Other Tools: Google Workspace, Microsoft 365 Excel, Word, Power BI, Tableau, Salesforce, 
                <br />
                Soft Skills: Attention to detail, Problem-solving, Collaboration, Communication, Adaptability,
                Time Management, Organization.
            </h2>
        </div>

        <div className='flex flex-col gap-5 items-center ml-4 mt-8'>
            <h1 className='text-2xl font-bold text-center'>Hobbies & Interest</h1>
            <h2 className='text-base sm:text-lg leading-relaxed'>
                Outsides of work and school I enjoy spending time with my Girlfriend; We both enjoy
                going to San Francisco, Photo Booths, eating Chipotle, and drinking Matcha.
                <br />
                <br />
                My interests include Muay Thai, Boxing, Jiu Jitsu, Reading, and Programming.
            </h2>
        </div>
    </div>
  )
}
