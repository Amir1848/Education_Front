import React, { Fragment } from 'react';
import SimpleReactValidator from 'simple-react-validator';

const NewUser = () => {
    return (
        <Fragment>
            <div className="container">
                <h2 className="text-center m-20 mb-5 mt-5">افزودن کاربر</h2>
                <form className="form-group">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group row">
                                <label for="staticEmail" className="col-sm-2 col-form-label">نام</label>
                                <div className="col-sm-10">
                                <input type="text" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group row">
                                <label for="staticEmail" className="col-sm-2 col-form-label">نام خانوادگی</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group row">
                                <label for="staticEmail" className="col-sm-2 col-form-label">نام کاربری</label>
                                <div className="col-sm-10">
                                <input type="text" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group row">
                                <label for="staticEmail" className="col-sm-2 col-form-label">رمز عبور</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group row">
                                <label for="staticEmail" className="col-sm-2 col-form-label">رمز عبور</label>
                                <div className="col-sm-10">
                                <input type="text" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group row">
                                <label for="staticEmail" className="col-sm-2 col-form-label">نقش ها</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}
export default NewUser;