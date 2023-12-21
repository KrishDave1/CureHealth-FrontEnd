import React from 'react';
import { useGlobalContext } from "../context";

const DashboardMain = () => {
    const { userId } = useGlobalContext();

    let Userdata = async () => {
        let response = await fetch(
            `http://127.0.0.1:8000/data/patients/?id=${userId}`
        );
        let data = await response.json();
        return data;
    };
    let data = Userdata();
    return (
    <div>DashboardMain</div>
  )
}

export default DashboardMain