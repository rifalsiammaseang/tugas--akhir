import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReportById } from '../api/api';

const ReportDetail = () => {
    const { id } = useParams();
    const [report, setReport] = useState(null);

    useEffect(() => {
        getReportById(id).then(response => {
            setReport(response.data);
        }).catch(error => {
            console.error('Error fetching report:', error);
        });
    }, [id]);

    return (
        <div>
            {report ? (
                <div>
                    <h1>Detail Laporan: {report.month} {report.year}</h1>
                    <p>Total Income: {report.totalIncome}</p>
                    <p>Total Expense: {report.totalExpense}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ReportDetail;
