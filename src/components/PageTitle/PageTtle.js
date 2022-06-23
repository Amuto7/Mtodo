import React from 'react';

const PageTtle = ({icon,text,sett}) => {
    return (
        <>
        <div className='flex justify-between items-center'>
            <div className="flex gap-3 items-center">
                <p>{icon}</p>
                <h1 className='text-white font-semibold text-3xl'>{text}</h1>
            </div>
            <div className='text-white'>

            <div className=' cursor-pointer'>   {sett}
                </div> 
            </div>
        </div>
            
        </>
    );
}

export default PageTtle;
