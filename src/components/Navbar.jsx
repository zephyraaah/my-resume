import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <>
    <nav className="flex justify-center items-center p-4 bg-gray-800">
      <div className='flex justify-between items-center w-[1200px]'>
      <div>
        <Link href="/" className="text-3xl font-bold text-white hover:text-gray-400 transition duration-300 ease-in-out">
          My RESUME
        </Link>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link href="/Personal" className="text-white font-semibold hover:text-gray-400 transition duration-300 ease-in-out">
            PERSONAL INFO
          </Link>
        </li>
        <li>
          <Link href="/Education" className="text-white font-semibold hover:text-gray-400 transition duration-300 ease-in-out">
            EDUCATION
          </Link>
        </li>
        <li>
          <Link href="/Certificates" className="text-white font-semibold hover:text-gray-400 transition duration-300 ease-in-out">
            CERTIFICATES
          </Link>
        </li>
        <li>
          <Link href="/References" className="text-white font-semibold hover:text-gray-400 transition duration-300 ease-in-out">
            REFERENCES
          </Link>
        </li>
      </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar