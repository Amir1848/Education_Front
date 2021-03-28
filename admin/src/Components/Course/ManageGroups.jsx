import React from 'react';


const ManageGroups = () => {
    return (
        <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
                <div className="card-body" style={{textAlign : "right"}}>
                    <h1 className="card-title bnazanin bold">جدول دسته بندی ها </h1>
                    <button class="btn btn-gradient-primary bnazanin bold mb-3">
                        افزودن دسته بندی +
                    </button>
                    <table className="table table-striped" style={{textAlign : "right"}}>
                        <thead>
                            <tr>
                                <th> نام دسته </th>
                                <th> توضیحات </th>
                                <th> سرگروه دسته </th>
                                <th> # </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-1">
                                    <img src="../../assets/images/faces-clipart/pic-1.png" alt="image" />
                                </td>
                                <td> Herman Beck </td>
                                <td>
                                    <div className="progress">
                                        <div className="progress-bar bg-success" role="progressbar" style={{Width : "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </td>
                                <td> $ 77.99 </td>
                            </tr>
                            <tr>
                                <td className="py-1">
                                    <img src="../../assets/images/faces-clipart/pic-2.png" alt="image" />
                                </td>
                                <td> Messsy Adam </td>
                                <td>
                                    <div className="progress">
                                        <div className="progress-bar bg-danger" role="progressbar" style={{Width : "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </td>
                                <td> $245.30 </td>
                            </tr>
                            <tr>
                                <td className="py-1">
                                    <img src="../../assets/images/faces-clipart/pic-3.png" alt="image" />
                                </td>
                                <td> John Richards </td>
                                <td>
                                    <div className="progress">
                                        <div className="progress-bar bg-warning" role="progressbar" style={{Width : "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </td>
                                <td> $138.00 </td>
                            </tr>
                            <tr>
                                <td className="py-1">
                                    <img src="../../assets/images/faces-clipart/pic-4.png" alt="image" />
                                </td>
                                <td> Peter Meggik </td>
                                <td>
                                    <div className="progress">
                                        <div className="progress-bar bg-primary" role="progressbar" style={{Width : "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </td>
                                <td> $ 77.99 </td>
                            </tr>
                            <tr>
                                <td className="py-1">
                                    <img src="../../assets/images/faces-clipart/pic-1.png" alt="image" />
                                </td>
                                <td> Edward </td>
                                <td>
                                    <div className="progress">
                                        <div className="progress-bar bg-danger" role="progressbar" style={{Width : "35%"}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </td>
                                <td> $ 160.25 </td>
                            </tr>
                            <tr>
                                <td className="py-1">
                                    <img src="../../assets/images/faces-clipart/pic-2.png" alt="image" />
                                </td>
                                <td> John Doe </td>
                                <td>
                                    <div className="progress">
                                        <div className="progress-bar bg-info" role="progressbar" style={{Width : "65%"}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </td>
                                <td> $ 123.21 </td>
                            </tr>
                            <tr>
                                <td className="py-1">
                                    <img src="../../assets/images/faces-clipart/pic-3.png" alt="image" />
                                </td>
                                <td> Henry Tom </td>
                                <td>
                                    <div className="progress">
                                        <div className="progress-bar bg-warning" role="progressbar" style={{Width : "20%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </td>   
                                <td> $ 150.00 </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>


    );
}

export default ManageGroups;