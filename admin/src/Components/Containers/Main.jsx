import React, { Fragment } from 'react';
import { Route } from 'react-router-dom'

import Nav from './Nav';
import UsersContainer from '../ManageUsers/UsersContainer';
import SideBar from './SideBar';

const Main = () => {
    return (
        <Fragment>
            <Nav />
            <SideBar />
            <div className="content-wrapper">

                <div className="content-header" style={{ backgroundColor: "white" }}>

                    <Route path="/ManageUsers">
                        <UsersContainer />
                    </Route>
                </div>
            </div>

        </Fragment>
    );
}


export default Main;