import React from 'react'
import Image from "next/image";


type FilterBarProps = {
    filterableType: string;
    filterables: string[];
}

function Index({ filterableType, filterables }: FilterBarProps) {
    return (
        <div className="border-[0.10rem] border-white rounded inline-flex space-x-5 w-[50rem] h-[6rem] p-4 m-1">
            {filterables.map((filterable: string) => {
                return (<Image
                    src={`/${filterableType}-logos/${filterable.split(' ').join().toLowerCase()}.png`}
                    alt={filterable}
                    key={filterable}
                    width="65"
                    height="65"
                />);
                // <div className="w-[3.5rem] h-[3.5rem] mt-2.5 ml-4 bg-red-500"></div>
            })}
        </div>
    )
}

export default Index
