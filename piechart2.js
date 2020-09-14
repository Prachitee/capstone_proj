// src/components/pie.rechart.js
//Value wise(price) distribution in piechart

import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import ExampleLineChart1 from "./Linechart1";

class ExamplePieChart2 extends React.Component {

    COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

    pieData = [
        {
            "name": "Microsoft Corp",
            "value": 50
        },
        {
            "name": "Apple Inc",
            "value": 30
        },
        {
            "name": "IBM",
            "value": 20
        },
       
    ];

    CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc' }}>
                    <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
                </div>
            );
        }

        return null;
    };

    render() {
        return (
            <PieChart width={730} height={300}>
                <Pie data={this.pieData} color="#000000" dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} fill="#8884d8" >
                    {
                        this.pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={this.COLORS[index % this.COLORS.length]} />)
                    }
                </Pie>
                <Tooltip content={<this.CustomTooltip />} />
                <Legend />
            </PieChart>
        )
    };
}

export default ExamplePieChart2;