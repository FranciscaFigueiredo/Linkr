import { IoShieldCheckmarkSharp } from 'react-icons/io5'
import { IconContext } from "react-icons/lib";
import { Message, Modal } from "./ModalStyle";

export default function ModalSuccess({ message }) {
    return (
        <Modal>
            <Message>
            <IconContext.Provider
                value={{
                    size: "60px",
                    color: "#008000",
                    className: "global-class-name"
                }}>
                <div>
                    <IoShieldCheckmarkSharp />
                </div>
            </IconContext.Provider>
                
                {
                    message !== '' ?
                    <h1>{ message }</h1>
                    : ''
                }
            </Message>
        </Modal>
    );
}