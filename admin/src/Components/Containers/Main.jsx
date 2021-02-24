import React, { Fragment } from 'react';
import { Route } from 'react-router-dom'

import Nav from './Nav';
import MainWindow from './MainWindow'
import UsersContainer from '../ManageUsers/UsersContainer';
import SideBar from './SideBar';

const Main = () => {
    return (
        <Fragment>
            <Nav />
            <div className="container-fluid page-body-wrapper">
                <MainWindow />
                <SideBar />
            </div>
        </Fragment>
    );
}


export default Main;