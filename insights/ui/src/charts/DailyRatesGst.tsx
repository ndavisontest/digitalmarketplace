import Chart from 'chart.js';
import React from 'react';
import '../main.css';

class DailyRatesGst extends React.Component {
  public chart: React.RefObject<HTMLCanvasElement>;

  constructor(props: {}) {
    super(props);
    this.chart = React.createRef();
  }

  public componentDidMount() {
    if (!this.chart.current) {
      return;
    }
    const chart = new Chart(this.chart.current, {
      type: 'horizontalBar',
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
  }
  public render() {
    return (
      <canvas ref={this.chart}></canvas>
    );
  }
}

export default DailyRatesGst;
