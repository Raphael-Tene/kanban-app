import React from 'react';
import {
  AtSymbolIcon,
  BellIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/solid';
import Image from 'next/image';

export default function TopBar() {
  return (
    <div className=' h-16 fixed bg-gradient-to-r from-purple-300 to-blue-500 w-full flex items-center pl-40 pr-5 justify-between '>
      <div className=' flex items-center  px-5'>
        <MagnifyingGlassIcon className=' w-5 h-5 text-white' />
        <input
          type='text'
          placeholder='Search for tasks.'
          className=' bg-transparent border-0 text-lg  text-white placeholder-gray-200 outline-none focus:ring-0'
        />
      </div>
      <div className=' flex items-center space-x-5'>
        <AtSymbolIcon className='w-7 h-7 text-white' />
        <BellIcon className='w-7 h-7 text-white' />
        <div className=' flex items-center text-white space-x-2'>
          <h3 className=' font-bold'>Agent Tango</h3>
          <Image
            className=' object-cover rounded-full'
            src='https://xsgames.co/randomusers/assets/images/favicon.png'
            width={30}
            height={30}
            alt='avatar'
          />
        </div>
      </div>
    </div>
  );
}
