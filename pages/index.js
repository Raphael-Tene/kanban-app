import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from 'components/Layout';
import CardItem from 'components/CardItem';
import BoardData from '../data/board-data.json';
import {
  ChevronDownIcon,
  EllipsisVerticalIcon,
  PlusIcon,
} from '@heroicons/react/24/solid';
import Image from 'next/image';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Home = () => {
  const [ready, setReady] = useState(false);
  const [boardData, setBoardData] = useState(BoardData);

  useEffect(() => {
    if (process.browser) {
      setReady(true);
    }
  }, []);

  const onDragEnd = (re) => {
    let newBoardData = boardData;
    var dragItem =
      newBoardData[parseInt(re.source.droppableId)].items[re.source.index];
    newBoardData[parseInt(re.source.droppableId)].items.splice(
      re.source.index,
      1
    );
    newBoardData[parseInt(re.destination.droppableId)].items.splice(
      re.destination.index,
      0,
      dragItem
    );
    setBoardData(newBoardData);
  };

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
          {ready && (
            <DragDropContext onDragEnd={onDragEnd}>
              <div className=' grid grid-cols-4 gap-5 my-5 '>
                {boardData?.map((board, index) => {
                  return (
                    <div key={index}>
                      <Droppable droppableId={board.name}>
                        {(provided) => (
                          <div
                            key={index}
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className=' bg-gray-200 rounded-md shadow-md flex flex-col p-3 relative overflow-hidden'>
                            <span className=' w-full h-1 bg-gradient-to-r from-pink-700 to-red-200 absolute inset-x-0 top-0'></span>
                            <h4 className=' flex justify-between items-center mb-2'>
                              <span className=' text-2xl text-gray-500 font-bold'>
                                {board.name}
                              </span>{' '}
                              <EllipsisVerticalIcon className=' w- 5 h-5 text-gray-500' />
                            </h4>
                            {/* insert card item here */}
                            {board.items.length > 0 &&
                              board.items.map((item, iIndex) => {
                                return <CardItem data={item} key={iIndex} />;
                              })}
                            {provided.placeholder}
                            <button className=' flex items-center justify-center mt-6 space-x-2 text-lg'>
                              <span>Add task</span>
                              <PlusIcon className=' w-5 h-5 text-gray-500' />
                            </button>
                          </div>
                        )}
                      </Droppable>
                    </div>
                  );
                })}
              </div>
            </DragDropContext>
          )}
        </div>
      </Layout>
    </div>
  );
};

export default Home;
