import React, { useState } from 'react';

import { ApiAddress } from '../../Config.json';

const GlobalState  = () => {
    
    const [groups,setGroups] = useState([]);
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






}