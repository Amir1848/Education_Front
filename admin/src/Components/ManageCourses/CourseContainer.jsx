import React, { Fragment, useState } from 'react';
import Modal from 'react-modal';

import CoursesTable from './CoursesTable';
import NewCourse from './NewCourse';


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


const CourseContainer = () => {
    const [ModalOpen, setModal] = useState(false);



    return (
        <Fragment>
            <br/>
            <h3 className="container text-center">
                مدیریت کلاس ها
            </h3>
            <hr/>
            <button className="btn btn-primary mr-4 btn-sm" onClick={() => setModal(true)}>
                افزودن کلاس
            </button>
            <br/>
            <CoursesTable />
            <Modal
                isOpen={ModalOpen}
                style={customStyles}
                contentLabel="New Course Modal"
            >
                <NewCourse setModal={setModal}/>
            </Modal>    
        </Fragment>
    );
}


export default CourseContainer;