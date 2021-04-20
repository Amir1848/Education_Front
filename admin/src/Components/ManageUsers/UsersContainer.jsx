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
        <div className="col-lg-12 grid-margin stretch-card bnazanin">
            <div className="card">
                <div className="card-body" style={{ textAlign: "right" }}>
                    <h1 className="card-title bnazanin bold">جدول کاربران                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </h1>
                    <button className="btn btn-gradient-primary bnazanin bold mb-3">
                        افزودن دسته بندی +
                    </button>                         
                    <div className="table-responsive">                                                                           
                        <table className="table table-striped" style={{ textAlign: "right" }}>
                            <thead className="bnazanin">
                                <tr>
                                    <th className="bnazanin bold"> <b>نام کامل</b> </th>
                                    <th className="bnazanin bold"> <b>نام کاربری</b> </th>
                                    <th className="bnazanin bold"> <b>شماره تلفن همراه</b> </th>
                                    <th className="bnazanin bold"> <b>#</b> </th>
                                </tr>
                            </thead>
                            <tbody>
                                
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
     
    </Fragment>
    );
}

export default UsersContainer;