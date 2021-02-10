import React, { Fragment } from 'react';

const Nav = () => {
    return (
        <Fragment>
        <nav className="main-header navbar navbar-expand bg-white navbar-light border-bottom">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="#"><i className="fa fa-bars"></i></a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <a href="index3.html" className="nav-link">خانه</a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <a href="#" className="nav-link">تماس</a>
                </li>
            </ul>


            <form className="form-inline ml-3">
                <div className="input-group input-group-sm">
                    <input className="form-control form-control-navbar" type="search" placeholder="جستجو" aria-label="Search" />
                    <div className="input-group-append">
                        <button className="btn btn-navbar" type="submit">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
            </form>
            

            <ul className="navbar-nav mr-auto">

                <li className="nav-item dropdown">
                    <a className="nav-link" data-toggle="dropdown" href="#">
                        <i className="fa fa-comments-o"></i>
                        <span className="badge badge-danger navbar-badge">3</span>
                    </a>
               </li>

                <li className="nav-item dropdown">
                    <a className="nav-link" data-toggle="dropdown" href="#">
                        <i className="fa fa-bell-o"></i>
                        <span className="badge badge-warning navbar-badge">15</span>
                    </a>
                </li>
            </ul>
        </nav>
    </Fragment>
    );
}

export default Nav;