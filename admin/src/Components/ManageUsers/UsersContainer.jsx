import React, { Fragment, useState } from 'react';
import { Helmet } from "react-helmet";
import Modal from 'react-modal';

import UsersTable from './UsersTable';
import NewUser from './NewUser';

const UsersContainer = () => {


    const [ModalOpen, setModal] = useState(false);  




    const customStyles = {
        content: {
            paddingTop : 0,
            paddingRight : "0", 
            paddingLeft : "0" 
            // top: '50%',
            // left: '50%',
            // right: 'auto',
            // bottom: 'auto',
            // marginRight: '-50%',
            // transform: 'translate(-50%, -50%)'
        },
        overlay: {zIndex: 100000}
    };


    Modal.setAppElement("body");
    return (
        <Fragment>
            <Helmet>
                <title>مدیریت کاربران</title>
            </Helmet>

            
            <UsersTable newUser={setModal} />
            <Modal
                isOpen={ModalOpen}
                style={customStyles}
                contentLabel="Users Modal"
            >
                <div className="close-modal bg-dark">
                    <div className="container-fluid">
                        <button className="btn btn-sm btn-dark" onClick={() => setModal(false)}>
                            X
                        </button>
                    </div>
                </div>
                <NewUser />
            </Modal>
        </Fragment>
    );
}

export default UsersContainer;