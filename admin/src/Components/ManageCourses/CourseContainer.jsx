import React, { Fragment } from 'react';

const CourseContainer = () => {
    return (
        <Fragment>
            <br/>
            <h3 className="container text-center">
                مدیریت کلاس ها
            </h3>
            <hr/>
            <button className="btn btn-light btn-sm">
                <i className="fa fa-plus"></i>
            </button>
            &nbsp;
            <button className="btn btn-light btn-sm">
                <i className="fa fa-plus"></i>
            </button>
        </Fragment>
    );
}


export default CourseContainer;