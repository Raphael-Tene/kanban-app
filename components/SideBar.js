import React from 'react';
import {
  CalendarIcon,
  ChartBarSquareIcon,
  CogIcon,
  ServerIcon,
  ServerStackIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid';

export default function SideBar(props) {
  return (
    <div className=' fixed inset-y-0 left-0 w-40 bg-white'>
      <h1 className=' flex items-center justify-center text-xl h-16 font-bold bg-purple-600 text-white'>
        Hussle
      </h1>
      <ul className=' flex flex-col text-lg'>
        <li className=' flex justify-center items-center flex-col py-5 text-gray-500'>
          {' '}
          <UserGroupIcon className=' w-8 h-8' /> Manage
        </li>
        <li className=' flex justify-center font-bold items-center flex-col py-5 border-l-4 text-purple-500 border-purple-500'>
          {' '}
          <ServerStackIcon className=' w-8 h-8' /> Boards
        </li>
        <li className=' flex justify-center items-center flex-col py-5'>
          {' '}
          <CalendarIcon className=' w-8 h-8' /> Schedule
        </li>
        <li className=' flex justify-center items-center flex-col py-5'>
          {' '}
          <ChartBarSquareIcon className=' w-8 h-8' /> Report
        </li>
        <li className=' flex justify-center items-center mt-auto flex-col py-5'>
          {' '}
          <CogIcon className=' w-8 h-8' /> Settings
        </li>
      </ul>
    </div>
  );
}
