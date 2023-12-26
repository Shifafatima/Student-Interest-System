import React from 'react'
import { Link } from 'react-router-dom/dist'

const Navbar = () => {
    return (
        <>
        <div>
            <div className='w-screen h-7 m-auto'>
                <h3 className='text-center text-xl font-bold text-black my-3'>Student Interests System</h3>
            </div>
            <div className='navbar flex flex-row justify-between top-0 w-screen p-4 pt-4 bg-pink-300 mt-2'>
                <div className='pr-12 text-white relative'>

                    <Link to="/dashboard" className="pl-4 text-black">Dashboard</Link>
                    <Link to="/addStudent" className="pl-4 text-black">Add Student</Link>
                    <Link to="/studentlist" className="pl-4 text-black">Student List</Link>
                </div>
                <div>
                <Link to="/" className="pl-4 text-black">Logout</Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar
