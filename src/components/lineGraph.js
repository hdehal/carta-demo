import React from 'react';
import { Line } from 'react-chartjs-2';

/* Sample graphs and data per
https://github.com/jerairrest/react-chartjs-2
https://www.chartjs.org/docs/latest/getting-started/usage.html 
*/

const options = {
    scales: {
        yAxes: [{
            ticks: {
                // Include a dollar sign in the ticks
                callback: function (value, index, values) {
                    return '$' + value;
                }
            }
        }]
    }
}

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            label: 'Market Value of Vested Shares',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(89, 217, 177,0.4)',
            borderColor: 'rgba(89, 217, 177,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(89, 217, 177,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(89, 217, 177,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [258, 274, 242, 254, 257, 278]
        }
    ]
};

class LineGraph extends React.Component {
    render() {
        return (<Line data={data} options={options} />)
    }
}

export default LineGraph;