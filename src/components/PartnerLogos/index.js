/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'
import Title from '../Titles/h2.js'

export default function PartnerLogos() {
    return (
      <div className="bg-transparent">
        <div className="max-w-full px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8">
        <div
                                            className="mt-20 mb-30 title wow fadeInLeft"
                                            data-wow-delay="100ms"
                                            data-wow-duration="1000ms"
                                        >
                                            <Title
                                                bgtext="Clients"
                                                titletext="Just A Few Of Our Favorite People"
                                            />
                                        </div>



          <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
            <div className="flex justify-center col-span-1 px-8 py-8 grayscale ">


        <StaticImage
            src="./clientlogos/epic.webp"
            alt="EPIC Business"
            layout="fixed"
            width={200}
            className="overflow-visible animate-enter"
 />
            </div>
            <div className="flex justify-center col-span-1 px-8 py-8 grayscale">

            <StaticImage
            src="./clientlogos/valpaklogo.png"
            alt="HunterLab"
            layout="fixed"
            width={200}
            className="overflow-visible animate-enter"
 />            </div>
            <div className="flex justify-center col-span-1 px-8 py-8 grayscale">
            <StaticImage
            src="./clientlogos/cuemby.webp"
            alt="Cuemby"
            layout="fixed"
            width={150}
            className="overflow-visible animate-enter"
 />               </div>
            <div className="flex justify-center col-span-1 px-8 py-8 grayscale">
            <StaticImage
            src="./clientlogos/freshworks.png"
            alt="Cuemby"
            layout="fixed"
            width={200}
            className="overflow-visible animate-enter"
 />             </div>
            <div className="flex justify-center col-span-1 px-8 py-8 grayscale">
            <StaticImage
            src="./clientlogos/unliver.webp"
            alt="Cuemby"
            layout="fixed"
            width={200}
            className="overflow-visible animate-enter"
 />
            </div>
            <div className="flex justify-center col-span-1 px-8 py-8 grayscale">
            <StaticImage
            src="./clientlogos/robo-negotiator.png"
            alt="Robo-Negotiator"
            layout="fixed"
            width={200}
            className="overflow-visible animate-enter"
 />
            </div>
          </div>
        </div>
      </div>
    )
  }
