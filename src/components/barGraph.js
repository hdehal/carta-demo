import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

/* Sample graphs and data per
https://github.com/jerairrest/react-chartjs-2
https://www.chartjs.org/docs/latest/getting-started/usage.html 
*/

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            label: 'Market Volume by Month',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [54, 59, 80, 81, 64, 75]
        }
    ]
};

class BarGraph extends React.Component {
    render() {
        return (<HorizontalBar data={data} />)
    }
}

export default BarGraph;