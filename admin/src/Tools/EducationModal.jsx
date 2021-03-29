import React from 'react';
import Modal from 'react-modal';


const EducationModal = ({ open, children ,setOpen}) => {



    Modal.setAppElement('#root');
    const [modalIsOpen, setIsOpen] = React.useState(open);

    return (
        <Modal
            isOpen={open}
            style={{
                overlay: {
                    zIndex: "1000000"
                },
                content : {
                    borderRadius : 0,
                    maxWidth : "800px",
                    margin : "auto",
                    height : "auto",
                    padding : 0,
                    height : "500px"

                }
            }}
            handleCloseModal={() => setOpen(false)}
        >
            <div className="w-100 bg-dark"><button onClick={() => setOpen(false)} className="mdi mdi-close-box-outline" style={{color : "white",marginLeft : "5px",backgroundColor : "inherit",border:"none",padding : 0}}></button></div>

            {children}
        </Modal>
    );
}


export default EducationModal;