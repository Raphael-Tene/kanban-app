import {
  ChatBubbleBottomCenterIcon,
  PaperClipIcon,
} from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';

export default function CardItem({ data }) {
  return (
    <div className=' bg-white rounded-md p-3 mt-3'>
      <label
        className={` bg-gradient-to-r from-blue-500 to-blue-200 py-1 rounded text-sm  px-2 text-white
   ${
     data.priority === 0
       ? 'from-blue-500 to-blue-200'
       : data.priority === 1
       ? 'from-green-500 to-green-200'
       : ' from-red-500 to-red-200'
   }  `}>
        {data?.priority === 0
          ? 'Low Priority'
          : data.priority === 1
          ? 'Medium Priority'
          : 'High Priority'}
      </label>
      <h5
        className=' text-md my-3 text-lg leading-6
  '>
        {data.title}
      </h5>
      <div className=' flex justify-between'>
        <div className=' flex space-x-2 items-center'>
          <span className=' flex items-center space-x-2'>
            <ChatBubbleBottomCenterIcon className=' w-4 h-4 text-gray-500  mr-2' />{' '}
            <span>{data.chat}</span>
          </span>
          <span className=' flex items-center space-x-2'>
            <PaperClipIcon className=' w-4 h-4 text-gray-500  mr-2' />{' '}
            <span>{data.attachment}</span>
          </span>
        </div>
        <ul className=' flex space-x-1 flex-row-reverse '>
          {data.assignees?.map((assignee, index) => {
            return (
              <li key={index}>
                <Image
                  className=' object-cover rounded-full'
                  src={assignee.avt}
                  width={30}
                  height={30}
                  alt='avatar'
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
