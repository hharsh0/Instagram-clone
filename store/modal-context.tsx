import React, { useState } from "react";

const ModalContext = React.createContext({
    showModal: false,
    setModal: () => {},
});

export const ModalContextProvider = (props:any) => {
    const [showModal, setShowModal] = useState(false);

  const setModal = () => {
      console.log("switching")
        setShowModal(!showModal);
    }

    const contextValue = {
        showModal: showModal,
        setModal: setModal,
    };

    return (
      <ModalContext.Provider value={contextValue}>
        {props.children}
      </ModalContext.Provider>
    );
}

export default ModalContext;