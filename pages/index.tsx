import Status from "../components/Status";
import Post from "../components/Post";
import Accountinfo from "../components/Accountinfo";
import CreateModal from "../components/CreateModal";
import { useEffect,useContext } from "react";
import ModalContext from "../store/modal-context";

export default function Home() {
  const modalCtx = useContext(ModalContext);

  useEffect(() => {
    const handleClick = (e: any) => {
      console.log(e.target)
      if (e.target.classList.contains("modal-content")) {
        console.log("1");
        return;
      }
      if (!e.target.classList.contains("modal-parent")) {
        console.log("2")
        modalCtx.setModal();
      }
      
    };

    document.addEventListener("click", handleClick);
  },[])
  
  return (
    <>
      <CreateModal />
      <div className="bg-[#121212] h-screen grid grid-cols-2 p-2">
        <div className="">
          <Status />
          <Post />
          <Post />
        </div>
        <div className="text-white ml-36">
          <Accountinfo />
        </div>
      </div>
    </>
  );
}
