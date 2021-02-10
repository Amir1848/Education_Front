import React, { Fragment } from 'react';


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
                        <div className="col">
                            <input type="text" className="form-control" placeholder="نام دوره"/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder=""/>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}

export default NewCourse;