import React,{Fragment} from 'react';

import Nav from './Nav';
import SideBar from './SideBar';

const Main = () => {
    return (
    <Fragment>
        <Nav/>
        <SideBar/>
        <div class="content-wrapper">

            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0 text-dark">مدیریت فرم ها</h1>
                        </div>
                    </div>
                    <hr />
                </div>


                <div className="container">
                    {/* Define Routes */}
                </div>

            </div>
        </div>
    </Fragment>
    );
}


export default Main;