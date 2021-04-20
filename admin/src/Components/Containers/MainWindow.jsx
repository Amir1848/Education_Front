import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router';

import UsersContainer from './../ManageUsers/UsersContainer';
import ManageGroups from './../Course/ManageGroups';

const MainWindow = () => {
    return (
        <Fragment>
            <div className="main-panel">
                <div className="content-wrapper">
                    <Switch>
                        <Route path="/Groups/ManageGroups" exact>
                            <ManageGroups />
                        </Route>
                        <Route path="/Users/ManageUsers" exact>
                            <UsersContainer />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Fragment>
    );
}

export default MainWindow;