import React from 'react'

function Accountinfo() {
    return (
      <>
        <div className=" w-72  mt-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-red-500 rounded-full shrink-0"></div>
              <div className="ml-4">
                <div className="text-sm cursor-pointer">hharsh_311</div>
                <div className="text-[#9c9c9c] text-sm">Harsh Vardhan</div>
              </div>
            </div>

            <div className="text-[#0095F6] hover:text-white cursor-pointer">
              Switch
            </div>
          </div>
          <div className="flex justify-between text-sm mt-4">
            <p className="text-[#9c9c9c]">Suggestions for you</p>
            <p className="text-white hover:text-[#9c9c9c] cursor-pointer">
              See All
            </p>
          </div>

          {/* Account suggestions */}
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-red-500 rounded-full shrink-0"></div>
              <div className="ml-4">
                <div className="text-sm">Spyfamily</div>
                <div className="text-xs text-[#9c9c9c]">New to instagram</div>
              </div>
            </div>
            <div className="text-[#0095F6] hover:text-white cursor-pointer">
              Follow
            </div>
          </div>

          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-red-500 rounded-full shrink-0"></div>
              <div className="ml-4">
                <div className="text-sm">Spyfamily</div>
                <div className="text-xs text-[#9c9c9c]">New to instagram</div>
              </div>
            </div>
            <div className="text-[#0095F6] hover:text-white cursor-pointer">
              Follow
            </div>
          </div>

          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-red-500 rounded-full shrink-0"></div>
              <div className="ml-4">
                <div className="text-sm">Spyfamily</div>
                <div className="text-xs text-[#9c9c9c]">New to instagram</div>
              </div>
            </div>
            <div className="text-[#0095F6] hover:text-white cursor-pointer">
              Follow
            </div>
          </div>
        </div>
      </>
    );
}

export default Accountinfo