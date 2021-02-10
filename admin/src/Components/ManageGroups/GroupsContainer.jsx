import React, { Fragment } from 'react';
import Swal from 'sweetalert2'

const GroupsContainer  = () => {

    const AddGroup = () => {
        Swal.fire({
            title: 'لطفا نام دسته بندی مورد نظر را وارد نمایید',
            input: 'text',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText : "انصراف",
            confirmButtonText: 'ثبت',
            showLoaderOnConfirm: true,
            preConfirm: (name) => {
            //   return fetch(`//api.github.com/users/${login}`)
            //     .then(response => {
            //       if (!response.ok) {
            //         throw new Error(response.statusText)
            //       }
            //       return response.json()
            //     })
            //     .catch(error => {
            //       Swal.showValidationMessage(
            //         `Request failed: ${error}`
            //       )
            //     })
            alert(name);
            },
            allowOutsideClick: () => !Swal.isLoading()
          });
    }



    return (
        <Fragment>
            <br/>
            <h3 className="text-center">
                مدیریت گروه ها
            </h3>
            <hr/>
            <button className="btn btn-sm btn-primary" onClick={AddGroup} >
                        افزودن گروه
                    </button>
            <br/>
            <br/>
                    <table className="table">
                            <thead>
                            <tr>
                                <th>شناسه</th>
                                <th>نام</th>
                                <th>#</th>
                            </tr>
                            </thead>
                            
                            <tr>
                                <td>1</td>
                                <td>کودک و نوجوان</td>
                                <td>
                                    <button className="btn btn-warning btn-sm">
                                        <i className="fa fa-edit"></i>
                                    </button>
                                    &nbsp;
                                    <button className="btn btn-danger btn-sm">
                                        <i className="fa fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                    </table>
        </Fragment>
    );
}


export default GroupsContainer;