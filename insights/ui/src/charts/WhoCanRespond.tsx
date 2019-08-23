import Chart from 'chart.js';
import React from 'react';
import '../main.css';

class WhoCanRespond extends React.Component {
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
      type: 'pie',
      options: {
        cutoutPercentage: 50,
        legend: {
          position: 'right',
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

export default WhoCanRespond;
