import React, { Fragment } from 'react';

const UsersTable = (props) => {
    return (
        <Fragment>
            <div className="col-12">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">مدیریت کاربران</h3>
                        <div className="float-left">
                            <button className="btn btn-primary btn-sm" type="button" onClick={() => props.newUser(true)}>
                                کاربر جدید
                                &nbsp;
                                <i className="fa fa-user"></i>
                            </button>
                        </div>
                    </div>
                    <div className="card-body">
                        <div id="example2_wrapper" className="dataTables_wrapper container-fluid dt-bootstrap4"><div className="row"><div className="col-sm-12 col-md-6"></div><div className="col-sm-12 col-md-6"></div></div><div className="row"><div className="col-sm-12"><table id="example2" className="table table-bordered table-hover dataTable" role="grid">
                            <thead>
                                <tr role="row">
                                    <th className="sorting_asc"  aria-controls="example2"  className aria-sort="ascending" aria-label="موتور رندر: activate to sort column descending">
                                        <label>نام : </label>
                                        &nbsp;
                                        <input type="text" style={{ width: "80%" }} />
                                    </th>
                                    <th className="sorting"  aria-controls="example2"  className aria-label="مرورگر: activate to sort column ascending">
                                        <label>نام خانوادگی : </label>
                                        &nbsp;
                                        <input type="text" style={{ width: "60%" }} />
                                    </th>
                                    <th className="sorting"  aria-controls="example2"  className aria-label="سیستم عامل: activate to sort column ascending">
                                        <label>نقش ها : </label>
                                        &nbsp;
                                        <input type="text" style={{ width: "70%" }} />
                                    </th>
                                    <th className="sorting"  aria-controls="example2"  className aria-label="ورژن: activate to sort column ascending">
                                        <label>نام کاربری : </label>
                                        &nbsp;
                                        <input type="text" style={{ width: "60%" }} />
                                    </th>
                                    <th className="sorting"  aria-controls="example2"  className aria-label="امتیاز: activate to sort column ascending">
                                        تصویر
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr role="row" className="odd">
                                    <td className="sorting_1">Gecko</td>
                                    <td>Firefox ۱.۰</td>
                                    <td>Win ۹۸+ / OSX.۲+</td>
                                    <td>۱.۷</td>
                                    <td>A</td>
                                </tr><tr role="row" className="even">
                                    <td className="sorting_1">Gecko</td>
                                    <td>Firefox ۱.۵</td>
                                    <td>Win ۹۸+ / OSX.۲+</td>
                                    <td>۱.۸</td>
                                    <td>A</td>
                                </tr><tr role="row" className="odd">
                                    <td className="sorting_1">Gecko</td>
                                    <td>Firefox ۲.۰</td>
                                    <td>Win ۹۸+ / OSX.۲+</td>
                                    <td>۱.۸</td>
                                    <td>A</td>
                                </tr><tr role="row" className="even">
                                    <td className="sorting_1">Gecko</td>
                                    <td>Firefox ۳.۰</td>
                                    <td>Win ۲k+ / OSX.۳+</td>
                                    <td>۱.۹</td>
                                    <td>A</td>
                                </tr><tr role="row" className="odd">
                                    <td className="sorting_1">Gecko</td>
                                    <td>Camino ۱.۰</td>
                                    <td>OSX.۲+</td>
                                    <td>۱.۸</td>
                                    <td>A</td>
                                </tr><tr role="row" className="even">
                                    <td className="sorting_1">Gecko</td>
                                    <td>Camino ۱.۵</td>
                                    <td>OSX.۳+</td>
                                    <td>۱.۸</td>
                                    <td>A</td>
                                </tr><tr role="row" className="odd">
                                    <td className="sorting_1">Gecko</td>
                                    <td>Netscape ۷.۲</td>
                                    <td>Win ۹۵+ / Mac OS ۸.۶-۹.۲</td>
                                    <td>۱.۷</td>
                                    <td>A</td>
                                </tr><tr role="row" className="even">
                                    <td className="sorting_1">Gecko</td>
                                    <td>Netscape Browser ۸</td>
                                    <td>Win ۹۸SE+</td>
                                    <td>۱.۷</td>
                                    <td>A</td>
                                </tr><tr role="row" className="odd">
                                    <td className="sorting_1">Gecko</td>
                                    <td>Netscape Navigator ۹</td>
                                    <td>Win ۹۸+ / OSX.۲+</td>
                                    <td>۱.۸</td>
                                    <td>A</td>
                                </tr><tr role="row" className="even">
                                    <td className="sorting_1">Gecko</td>
                                    <td>Mozilla ۱.۰</td>
                                    <td>Win ۹۵+ / OSX.۱+</td>
                                    <td>۱</td>
                                    <td>A</td>
                                </tr></tbody>
                        </table></div></div><div className="row">
                                <div className="col-sm-12 col-md-5"></div>
                                <div className="col-sm-12 col-md-7">
                                    <div className="dataTables_paginate paging_simple_numbers" id="example2_paginate">
                                        <ul className="pagination">
                                            <li className="paginate_button page-item previous disabled" id="example2_previous">
                                                <button href="#" aria-controls="example2" data-dt-idx="0"  className="page-link">قبلی</button>
                                            </li>
                                            <li className="paginate_button page-item active">
                                                <button href="#" aria-controls="example2" data-dt-idx="1"  className="page-link">1</button>
                                            </li>
                                            <li className="paginate_button page-item ">
                                                <button href="#" aria-controls="example2" data-dt-idx="2"  className="page-link">2</button>
                                            </li>
                                            <li className="paginate_button page-item ">
                                                <button href="#" aria-controls="example2" data-dt-idx="3"  className="page-link">3</button>
                                            </li>
                                            <li className="paginate_button page-item ">
                                                <button href="#" aria-controls="example2" data-dt-idx="4"  className="page-link">4</button>
                                            </li>
                                            <li className="paginate_button page-item ">
                                                <button href="#" aria-controls="example2" data-dt-idx="5"  className="page-link">5</button>
                                            </li>
                                            <li className="paginate_button page-item ">
                                                <button href="#" aria-controls="example2" data-dt-idx="6"  className="page-link">6</button>
                                            </li>
                                            <li className="paginate_button page-item next" id="example2_next">
                                                <button href="#" aria-controls="example2" data-dt-idx="7"  className="page-link">بعدی</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    );
}


export default UsersTable;