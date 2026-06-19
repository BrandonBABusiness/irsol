import React from 'react'
import CardBtn from './cardContent';

interface props {

    title: string;
}

const Card = ({title}: props) => {

    return (
        <div className="h-[27%] w-[90%] border-3 border-gray-500/40 border-opacity-50 rounded-2xl shadow bg-white overflow-hidden flex flex-col items-center justify-end">

            {/* IMAGE */}
            <div className='h-[75%] w-full'></div>

            {/* CAPTION AREA */}
            <div className='h-[25%] w-full bg-gray-300 border-t-2 border-gray-500/40 border-opacity-50'>
                <CardBtn title={title}></CardBtn>
            </div>
        </div>
    )
}

export default Card