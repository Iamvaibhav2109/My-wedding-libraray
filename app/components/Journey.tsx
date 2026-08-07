"use client";

import { weddingData } from "../data/wedding";

export default function Journey() {

    return (

        <section className="py-24 bg-white">

            <h2 className="text-5xl text-center font-bold mb-16">

                Our Journey ❤️

            </h2>

            <div className="max-w-5xl mx-auto">

                {weddingData.journey.map((item,index)=>(
                    <div
                    key={index}
                    className="border-l-4 border-pink-400 pl-10 mb-16">

                        <p className="text-pink-500 font-bold">

                            {item.month}

                        </p>

                        <h3 className="text-3xl mt-2">

                            {item.title}

                        </h3>

                        <p className="mt-4 text-gray-600">

                            {item.description}

                        </p>

                    </div>
                ))}

            </div>

        </section>

    )

}