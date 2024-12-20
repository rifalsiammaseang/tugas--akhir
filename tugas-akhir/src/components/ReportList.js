import React, { useEffect, useState } from 'react';
import { getReports } from '../api/api';

const ReportList = () => {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        getReports().then(response => {
            setReports(response.data);
        }).catch(error => {
            console.error('Error fetching reports:', error);
        });
    }, []);

    return (
        <div>
            <h1>Laporan Keuangan Bulanan</h1>
            <ul>
                {reports.map(report => (
                    <li key={report.id}>
                        {report.month} - {report.year} | {report.totalIncome} | {report.totalExpense}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReportList;
