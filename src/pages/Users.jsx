import React from 'react'

const Users = () => {
    return (
        <table className='w-full border-[.1vw] overflow-y-auto'>
            <tr className='bg-orange-600'>
                <th className='border-[.1vw] w-[5%]'>id</th>
                <th className='border-[.1vw] w-[15%]'>FullName</th>
                <th className='border-[.1vw] w-[20%]'>Tour</th>
                <th className='border-[.1vw] w-[20%]'>Destination</th>
                <th className='border-[.1vw] w-[20%]'>Number</th>
                <th className='border-[.1vw] w-[20%]'>Email</th>
            </tr>
            <tr className='hover:bg-gray-100 hover:dark:bg-gray-900'>
                <td className='border-[.1vw] py-[.5vw] text-center w-[5%]'>1</td>
                <td className='border-[.1vw] py-[.5vw] w-[15%]'>FullName</td>
                <td className='border-[.1vw] py-[.5vw] w-[20%]'>Tour</td>
                <td className='border-[.1vw] py-[.5vw] w-[20%]'>Destination</td>
                <td className='border-[.1vw] py-[.5vw] w-[20%]'>Number</td>
                <td className='border-[.1vw] py-[.5vw] w-[20%]'>Email</td>
            </tr>
            <tr className='hover:bg-gray-100 hover:dark:bg-gray-900'>
                <td className='border-[.1vw] py-[.5vw] text-center w-[5%]'>2</td>
                <td className='border-[.1vw] py-[.5vw] w-[15%]'>FullName</td>
                <td className='border-[.1vw] py-[.5vw] w-[20%]'>Tour</td>
                <td className='border-[.1vw] py-[.5vw] w-[20%]'>Destination</td>
                <td className='border-[.1vw] py-[.5vw] w-[20%]'>Number</td>
                <td className='border-[.1vw] py-[.5vw] w-[20%]'>Email</td>
            </tr>
        </table>
    )
}

export default Users
