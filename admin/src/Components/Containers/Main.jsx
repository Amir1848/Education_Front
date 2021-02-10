import React, { Fragment } from 'react';
import { Route } from 'react-router-dom'

import Nav from './Nav';
import SideBar from './SideBar';

const Main = () => {
    return (
        <Fragment>
            <Nav />
            <SideBar />
            <div class="content-wrapper">

                <div class="content-header" style={{ backgroundColor: "white" }}>
                    <div className="container">
                        <Route path="/ManageUsers">
                            {/* <SaleInvoice /> */}
                        </Route>
                    </div>

                </div>
            </div>

        </Fragment>
    );
}


export default Main;