import React from 'react';
import SideBar from './SideBar';
import TopBar from './TopBar';

export default function Layout({ children }) {
  return (
    <div className=' min-w-full min-h-screen bg-blue-200 '>
      <TopBar />
      <SideBar />
      <main>{children}</main>
    </div>
  );
}
