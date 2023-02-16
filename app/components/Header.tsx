import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/BG-Logo.png'

function Header() {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
      <div className='flex items-center space-x-2'>
        <Link href='/'>
          <Image
            src={Logo}
            width={50}
            height={50}
            className='rounded-full'
            alt='logo'
          />
        </Link >
        <h1>BG Web Dev & Homelab</h1>
      </div>
      <div className="px-5 py-3 text-sm md:text-base bg-gray-900 text-pink-400 flex items-center  rounded-full text-center">See my latest &nbsp; <span className='text-green-300 inline-block'>HomeLab</span> &nbsp; Projects</div>
    </header>
  )
}

export default Header