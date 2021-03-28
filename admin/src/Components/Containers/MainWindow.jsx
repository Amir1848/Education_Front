import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router';
import ManageGroups from './../Course/ManageGroups';

const MainWindow = () => {
    return (
        <Fragment>
            <div class="main-panel">
                <div className="content-wrapper">
                    <Switch>
                        <Route path="/Groups/ManageGroups" exact>
                            <ManageGroups />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Fragment>
    );
}

export default MainWindow;