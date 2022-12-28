import React from 'react'
import { Home,Search,Explore,Reels,Message,Notifications, Create, More, Instagram } from '../Icons';

function Sidebar() {
  return (
    <div className="text-white bg-[#000000] fixed left-0 w-60 min-h-screen text-lg p-4 flex flex-col justify-between border-r border-[#262626]">
      <div className="">
        <div className="mt-6 mb-6">
          <Instagram />
        </div>
        <div className="hover:bg-[#121212] p-2 rounded-full flex items-center cursor-pointer mb-4">
          <Search />
          <span className="ml-2">Home</span>
        </div>
        <div className="hover:bg-[#121212] p-2 rounded-full flex items-center cursor-pointer mb-4">
          <Search />
          <span className="ml-2">Search</span>
        </div>
        <div className="hover:bg-[#121212] p-2 rounded-full flex items-center cursor-pointer mb-4">
          <Explore />
          <span className="ml-2">Explore</span>
        </div>
        <div className="hover:bg-[#121212] p-2 rounded-full flex items-center cursor-pointer mb-4">
          <Reels />
          <span className="ml-2">Reels</span>
        </div>
        <div className="hover:bg-[#121212] p-2 rounded-full flex items-center cursor-pointer mb-4">
          <Message />
          <span className="ml-2">Messages</span>
        </div>
        <div className="hover:bg-[#121212] p-2 rounded-full flex items-center cursor-pointer mb-4">
          <Notifications />
          <span className="ml-2">Notifications</span>
        </div>
        <div className="hover:bg-[#121212] p-2 rounded-full flex items-center cursor-pointer mb-4">
          <Create />
          <span className="ml-2">Create</span>
        </div>
        {/* <div className="hover:bg-[#121212] p-2 rounded-full  flex items-center cursor-pointer mb-4">
          <span className="ml-2">Profile</span>
        </div> */}
      </div>
      <div>
        <div className="hover:bg-[#121212] p-2 rounded-full flex items-center cursor-pointer">
          <More />
          <span className="ml-2">More</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar