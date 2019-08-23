import Chart from 'chart.js';
import React from 'react';
import '../main.css';

class ResponsesPerOpportunity extends React.Component {
  public chartRef: React.RefObject<HTMLCanvasElement>;
  private chart?: Chart;

  constructor(props: {}) {
    super(props);
    this.chartRef = React.createRef();
  }

  public componentDidMount() {
    if (!this.chartRef.current) {
      return;
    }

    this.chart = new Chart(this.chartRef.current, {
      type: 'bar',
      options: {
        legend: {
          display: false,
        },
      },
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          data: [12, 19, 3, 5, 2, 3],
        }],
      },
    });
    this.chart.update();
  }
  public render() {
    return (
      <canvas ref={this.chartRef}></canvas>
    );
  }
}

export default ResponsesPerOpportunity;
