import React from 'react';
import Head from 'next/head';
import Layout from 'components/Layout';
import {
  ChatBubbleBottomCenterIcon,
  ChevronDownIcon,
  EllipsisVerticalIcon,
  PaperClipIcon,
  PlusIcon,
} from '@heroicons/react/24/solid';
import Image from 'next/image';

const Home = () => {
  return (
    <div className=''>
      <Head>
        <title>Kanban App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <div className=' p-10'>
          <div className=' flex justify-between '>
            <div className=' flex items-center'>
              <h4 className=' text-2xl font-bold text-gray-600'>
                Studio Board
              </h4>
              <ChevronDownIcon className=' w-7 h-7 text-gray-500 rounded-full bg-white p-1 ml-5 shadow-xl ' />
            </div>
            <div>
              <ul className=' flex space-x-2'>
                <li>
                  <Image
                    className=' object-cover rounded-full'
                    src='https://xsgames.co/randomusers/assets/images/favicon.png'
                    width={30}
                    height={30}
                    alt='avatar'
                  />
                </li>
                <li>
                  <Image
                    className=' object-cover rounded-full'
                    src='https://xsgames.co/randomusers/assets/images/favicon.png'
                    width={30}
                    height={30}
                    alt='avatar'
                  />
                </li>{' '}
                <li>
                  <Image
                    className=' object-cover rounded-full'
                    src='https://xsgames.co/randomusers/assets/images/favicon.png'
                    width={30}
                    height={30}
                    alt='avatar'
                  />
                </li>
                <li>
                  <button className=' border border-dashed flex items-center w-9'>
                    <PlusIcon
                      className=' w-5 h-5 text-gray-500
                    '
                    />
                  </button>
                </li>
              </ul>
            </div>
          </div>
          {/* Board columns */}
          <div className=' grid grid-cols-4 gap-5 my-5 '>
            <div className=' bg-gray-200 rounded-md shadow-md flex flex-col p-3 relative overflow-hidden'>
              <span className=' w-full h-1 bg-gradient-to-r from-pink-700 to-red-200 absolute inset-x-0 top-0'></span>
              <h4 className=' flex justify-between items-center mb-2'>
                <span className=' text-2xl text-gray-500 font-bold'>
                  Backlog
                </span>{' '}
                <EllipsisVerticalIcon className=' w- 5 h-5 text-gray-500' />
              </h4>
              <div className=' bg-white rounded-md p-3 mt-3'>
                <label
                  className=' bg-gradient-to-r from-blue-500 to-blue-200 py-1 rounded text-sm  px-2 text-white
                '>
                  Low Priority
                </label>
                <h5
                  className=' text-md my-3 text-lg leading-6
                '>
                  Company website redesign.
                </h5>
                <div className=' flex justify-between'>
                  <div className=' flex space-x-2 items-center'>
                    <span className=' flex items-center space-x-2'>
                      <ChatBubbleBottomCenterIcon className=' w-4 h-4 text-gray-500  mr-2' />{' '}
                      <span>1</span>
                    </span>
                    <span className=' flex items-center space-x-2'>
                      <PaperClipIcon className=' w-4 h-4 text-gray-500  mr-2' />{' '}
                      <span>1</span>
                    </span>
                  </div>
                  <ul className=' flex space-x-3 '>
                    <li>
                      <Image
                        className=' object-cover rounded-full'
                        src='https://xsgames.co/randomusers/assets/images/favicon.png'
                        width={30}
                        height={30}
                        alt='avatar'
                      />
                    </li>
                    <li>
                      <Image
                        className=' object-cover rounded-full'
                        src='https://xsgames.co/randomusers/assets/images/favicon.png'
                        width={30}
                        height={30}
                        alt='avatar'
                      />
                    </li>{' '}
                    <li>
                      <Image
                        className=' object-cover rounded-full'
                        src='https://xsgames.co/randomusers/assets/images/favicon.png'
                        width={30}
                        height={30}
                        alt='avatar'
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
