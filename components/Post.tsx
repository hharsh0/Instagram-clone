import React from 'react'
import { MoreOptions,Comment,Notifications,Send,Save } from '../Icons';

function Post() {
  return (
    <>
      <div className="ml-96 text-white border border-[#262626] w-96 rounded-md mt-4">
        <div className="Header flex justify-between items-center p-2">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-red-200 rounded-full shrink-0"></div>
            <div className="ml-2">9gag</div>
          </div>
          <MoreOptions />
        </div>
        <div className="ImageContainer h-96 w-96 bg-blue-300">
          {/* Image */}
        </div>
        <div className="IconContainer flex justify-between p-2">
          <div className="flex gap-x-4">
            <Notifications />
            <Comment />
            <Send />
          </div>
          <Save />
        </div>
        <div className="p-2">56,690 likes</div>
        <div className="discription p-2">
          <span>9gag</span>
          <span className="font-light ml-2">This is blue color</span>
        </div>
        <div className="p-2 text-[#9c9c9c] text-sm">View all 23,649 comments</div>
        {/* <div className="font-light text-[#9c9c9c] text-xs pl-2 pr-2">1 HOUR AGO</div> */}
      </div>
    </>
  );
}

export default Post