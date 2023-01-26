import React,{useContext} from "react";
import { ModalImg } from "../Icons";
import ModalContext from "../store/modal-context";

function CreateModal() {
  const modalCtx = useContext(ModalContext);
  return (
    <>
      <div
        // onClick={() => modalCtx.setModal()}
        className={`${
          !modalCtx.showModal && "hidden"
        } modal-parent fixed z-50 w-full p-4 overflow-x-hidden overflow-y-auto flex justify-center items-center h-screen bg-black bg-opacity-75`}
      >
        <div className="relative w-full h-full max-w-2xl md:h-auto modal-content">
          {/* Modal content */}
          <div className="relative bg-[#262626] rounded-lg modal-content">
            {/* Modal header */}
            <div className="flex items-start justify-center p-4 border-b rounded-t dark:border-gray-600 modal-content">
              <h3 className="modal-content text-xl font-semibold text-gray-900 dark:text-white">
                Create new post
              </h3>
            </div>
            {/* Modal body */}
            <div className="modal-content p-6 space-y-6 py-64 text-white flex  flex-col justify-center items-center">
              <ModalImg />
              <div>Drag photos and videos here</div>
              <div className="text-white bg-[#2095F1] p-2 rounded-xl modal-content cursor-pointer">
                Select From Computer
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateModal;
