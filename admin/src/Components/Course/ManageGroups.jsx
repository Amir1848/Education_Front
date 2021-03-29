import axios from 'axios';
import React, { Fragment, useContext, useEffect, useState } from 'react';

import GlobalContext from '../../GlobalState/GlobalContext';
import GroupCell from './GroupCell';
import { ApiAddress } from '../../Config.json';
import { toast } from 'react-toastify';
import EducationModal from './../../Tools/EducationModal';


const ManageGroups = () => {

    useEffect(() => {
        try {
            axios.get(ApiAddress + "/Group/GetGroups").then(p => {
                if (p.status == 200) {
                    context.groups = p.data
                    setGroups(p.data);
                } else {
                    toast.error("مشکلی در اجرای درخواست گرفتن گروه ها پیش آمده است.");
                }
            });
        } catch {
            toast.error("مشکلی در اجرای درخواست گرفتن گروه ها پیش آمده است.");
        }
    }, []);

    const context = useContext(GlobalContext);
    const [modalNewGroup, setModalNewGroup] = useState(false);
    const [groups, setGroups] = useState(context.groups);

    return (
        <Fragment>
            <div className="col-lg-12 grid-margin stretch-card bnazanin">
                <div className="card">
                    <div className="card-body" style={{ textAlign: "right" }}>
                        <h1 className="card-title bnazanin bold">جدول دسته بندی ها </h1>
                        <button className="btn btn-gradient-primary bnazanin bold mb-3" onClick={() => setModalNewGroup(true)}>
                            افزودن دسته بندی +
                    </button>
                        <div className="table-responsive">
                            <table className="table table-striped" style={{ textAlign: "right" }}>
                                <thead className="bnazanin">
                                    <tr>
                                        <th className="bnazanin bold"> <b>نام دسته</b> </th>
                                        <th className="bnazanin bold"> <b>توضیحات</b> </th>
                                        <th className="bnazanin bold"> <b>سرگروه دسته</b> </th>
                                        <th className="bnazanin bold"> <b>#</b> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        groups.map(p => (
                                            <GroupCell key={p.id} id={p.id} name={p.name} description={p.description} parentGroup={p.parentGroup} />
                                        ))
                                    }
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
            <EducationModal open={modalNewGroup} setOpen={setModalNewGroup}>
                <div style={{ textAlign: "right", direction: "rtl", padding: "20px 15px" }}>
                    <h1 className="text-center bnazanin">
                        افزودن دسته جدید
                    </h1>
                    <hr />
                    <form className="forms-sample">
                        <div className="form-group">
                            <label>نام دسته</label>
                            <input type="text" className="form-control" id="exampleInputUsername1" placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <label>توضیحات</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <label>سردسته</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-gradient-primary mr-2">Submit</button>
                    </form>
                </div>
            </EducationModal>
        </Fragment>
    );
}

export default ManageGroups;