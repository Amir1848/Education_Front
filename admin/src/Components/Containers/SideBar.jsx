import React,{Fragment} from 'react';


const SideBar = () => {
    return (
        <Fragment>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">

                <a href="index3.html" className="brand-link">
                    <img src="../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"
                        style={{ opacity: .8 }} />
                    <span className="brand-text font-weight-light">پنل مدیریت</span>
                </a>


                <div className="sidebar" style={{ direction: "ltr" }}>
                    <div style={{ direction: "rtl" }}>



                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">


                                <li className="nav-item has-treeview">
                                    <a href="/SaleInvoice" className="nav-link">
                                        <i class="nav-icon fa fa-user"></i>
                                        <p>
                                            مدیریت کاربران
                                    </p>
                                    </a>
                                </li>
                            </ul>
                        </nav>

                    </div>
                </div>

            </aside>
        </Fragment>

    );
}


export default SideBar;