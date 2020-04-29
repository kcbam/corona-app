import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';

const Chart = () => {
    const [dailyData, setDailyData] = useState({});
    useEffect(() =>{
        const fetchDailyData = async () =>{
            const dailyData = await fetchDailyData();
        }
    })
    return (
        <h1>Chart</h1>
    );
}
export default Chart;