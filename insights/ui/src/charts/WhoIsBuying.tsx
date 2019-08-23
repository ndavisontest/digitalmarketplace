import Chart from 'chart.js';
import React from 'react';
import '../main.css';
import CreatePieChart from './Charts';

class WhoIsBuying extends React.Component {
  private chartRef: React.RefObject<HTMLCanvasElement>;
  private chart?: Chart;

  constructor(props: {}) {
    super(props);
    this.chartRef = React.createRef();
  }

  public componentDidMount() {
    if (!this.chartRef.current) {
      return;
    }

    this.chart = CreatePieChart(this.chartRef.current);
    fetch('https://localhost:5001/api/values/')
      .then(response => response.json())
      .then(json => {
        this.chart!.data.datasets!.forEach(ds => {
          /// @ts-ignore
          json.whoIsBuying.forEach(wib => ds.data!.push(wib.value));
        });

        /// @ts-ignore
        json.whoIsBuying.forEach(wib => this.chart!.data.labels!.push(wib.label));
        /// @ts-ignore
        this.chart.description = {
          text: json.whoIsBuyingDescription,
          width: 200,
        };
        this.chart!.update();

        return Promise.resolve(json);
      });
  }
  public render() {
    return (
      <div className="chart-container">
        <canvas ref={this.chartRef}></canvas>
      </div>
    );
  }
}

export default WhoIsBuying;
