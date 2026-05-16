import React from 'react'

const ServicesCard = (props) => {
    return (
        <div>
            <div className="px-5  pt-5">
                <h2 className="text-lg font-semibold text-gray-800 md:text-2xl">
                    {props.title}
                </h2>
            </div>

            <div className="overflow-hidden p-5">
                <img
                    src={props.image}
                    alt={props.title}
                    className="h-[240px] w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <div className="flex flex-col gap-5 px-5 pb-6 md:flex-row md:items-end md:justify-between">
                <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700 md:text-base">
                    <li>Affordable pricing with complete transparency</li>
                    <li>Wide range of modern designs and color options</li>
                    <li>Verified experts delivering high-quality service</li>
                </ul>

                <button className="rounded-full bg-yellow-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-yellow-600 hover:shadow-lg">
                    GET ESTIMATE
                </button>
            </div>
        </div>
    )
}

export default ServicesCard 