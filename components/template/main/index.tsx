import React from 'react'
import Greetings from '@/components/molecules/Greetings'
import Dashboard from '@/components/organism/Dashboard'

const Main = () => {
    return (
        <div className='w-full flex-grow ml-64 overflow-auto min-h-screen p-5 md:p-10 flex flex-col gap-2 pt-1'>
            <Greetings />
            <Dashboard/>
        </div>
    )
}

export default Main
