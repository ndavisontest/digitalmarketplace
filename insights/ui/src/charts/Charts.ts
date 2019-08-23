import Chart from 'chart.js';
import ChartJsTextPlugin from './ChartJsTextPlugin';

const CreatePieChart = (canvas: HTMLCanvasElement): Chart => (
    new Chart(canvas, {
        type: 'pie',
        plugins: [ChartJsTextPlugin],
        options: {
            cutoutPercentage: 50,
            legend: {
                position: 'right',
            },
        },
        data: {
            labels: [],
            datasets: [{
                backgroundColor: [
                    '#8537BF',
                    '#FF89C4',
                    '#37AFF7',
                    '#F2A16A',
                    '#6EA846',
                ],
                data: [],
            }],
        },
    })
);

export default CreatePieChart;
