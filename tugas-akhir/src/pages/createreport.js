import React, { useState } from 'react';
import { createReport } from '../api/api';

const CreateReport = () => {
    const [form, setForm] = useState({ month: '', year: '', totalIncome: 0, totalExpense: 0 });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createReport(form).then(response => {
            alert('Report created successfully!');
        }).catch(error => {
            console.error('Error creating report:', error);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="month" placeholder="Month" onChange={handleChange} required />
            <input name="year" placeholder="Year" onChange={handleChange} required />
            <input name="totalIncome" placeholder="Total Income" onChange={handleChange} required />
            <input name="totalExpense" placeholder="Total Expense" onChange={handleChange} required />
            <button type="submit">Create Report</button>
        </form>
    );
};

export default CreateReport;
