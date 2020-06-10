import React from 'react';
import { Doughnut } from 'react-chartjs-2';

/* Sample graphs and data per
https://github.com/jerairrest/react-chartjs-2
https://www.chartjs.org/docs/latest/getting-started/usage.html 
*/

const data = {
    datasets: [{
        data: [25, 25, 50],
        backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(252, 225, 118, 1)',
            'rgba(89, 217, 177, 1)'
        ],
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Vesting in 2020',
        'Vesting in 2019',
        'Vested in 2018'
    ]
};

class PieChart extends React.Component {
    render() {
        return (<Doughnut data={data} />)
    }
}

export default PieChart;