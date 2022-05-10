import { createContext, useState } from "react";

export const ModalContext = createContext();

function ModalContextProvider(props) {

    // State for modal display
    const [displayModal, setDisplayModal] = useState(false)

    const context = {
        modalDisplay: displayModal,
        setModal: setDisplayModal
    }

    return (
        <ModalContext.Provider value={context}>
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalContextProvider