import React, { Fragment } from 'react';
import { DatePicker } from "jalali-react-datepicker";



const NewCourse = (props) => {
    return (
        <Fragment>
            <div className="bg-dark">
                <button className="btn btn-dark" onClick={() => props.setModal(false)}>
                <i className="fa fa-window-close" aria-hidden="true"></i>
                </button>
            </div>
            <div className="container">
                <br/>
                <h3 className="text-center">
                    افزودن دوره جدید
                </h3>
                <form>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group row">
                                <label for="staticEmail" className="col-sm-2 col-form-label">نام دوره :</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group row">
                                <label for="staticEmail" className="col-sm-2 col-form-label">زیرشاخه :</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group row">
                                <label for="staticEmail" className="col-sm-2 col-form-label">تاریخ شروع</label>
                                <div className="col-sm-10">
                                <DatePicker className="form-control"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group row">
                                <label for="staticEmail" className="col-sm-2 col-form-label">تاریخ اتمام</label>
                                <div className="col-sm-10">
                                <DatePicker className="form-control"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group row">
                                <label for="staticEmail" className="col-sm-2 col-form-label">مدرس</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group row">
                                
                            </div>
                        </div>  
                    </div>
                </form>
            </div>
        </Fragment>
    );
}

export default NewCourse;