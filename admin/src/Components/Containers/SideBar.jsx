import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


const SideBar = () => {
    return (
        <Fragment>
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
                <ul className="nav">
                    <li className="nav-item nav-profile" dir="rtl">
                        <a href="#" className="nav-link">
                            <div className="nav-profile-image">
                                <img src="/assets/images/faces/face1.jpg" alt="profile" />
                            </div>
                            <div className="nav-profile-text d-flex flex-column">
                                <span className="font-weight-bold mb-2 bnazanin" style={{ marginRight: "20px", fontSize: "18px" }}>امیر حصاری</span>
                            </div>
                            <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            <i className="mdi mdi-home menu-icon"></i>
                            <span className="menu-title">میزکار</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                            <i className="mdi mdi-bank menu-icon"></i>
                            <i className="menu-arrow"></i>
                            <span className="menu-title">مدیریت کلاس ها</span>
                        </a>
                        <div className="collapse" id="ui-basic">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item" dir="rtl" style={{ fontFamily : "bnazanin" }}>
                                    <Link className="nav-link" to="/Groups/ManageGroups">
                                        مدیریت دسته بندی ها
                                    </Link>
                                    {/* <a className="nav-link" href="pages/ui-features/buttons.html">مدیریت دسته بندی ها</a> */}
                                </li>
                                <li className="nav-item" dir="rtl" style={{ fontFamily : "bnazanin" }}> <a className="nav-link" href="pages/ui-features/typography.html">مدیریت دوره ها</a></li>
                            </ul>
                        </div>  
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Users/ManageUsers">
                            <i className="mdi mdi-account-card-details menu-icon"></i>
                            <span className="menu-title">مدیریت کاربران</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </Fragment>

    );
}


export default SideBar;