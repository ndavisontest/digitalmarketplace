import Chart from 'chart.js';
import React from 'react';
import '../main.css';
import { CreateHorizontalBarChart } from './Charts';

class TopBuyers extends React.Component {
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

    this.chart = CreateHorizontalBarChart(this.chartRef.current);
    this.chart!.data!.labels!.push(
        'National Disability Insurance Agency',
        'Department of Agriculture and Water Resources',
        'Depart of Foreign Affairs and Trade',
        'Department of Jobs and Small Business',
        'Depart of Finance',
    );
    this.chart!.data!.datasets!.forEach(dataset => {
      dataset.data!.push(13, 9, 8, 8, 7);
  });
    this.chart.update();
  }
  public render() {
    return (
      <canvas ref={this.chartRef}></canvas>
    );
  }
}

export default TopBuyers;
