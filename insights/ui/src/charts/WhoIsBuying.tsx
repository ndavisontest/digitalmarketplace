import Chart from 'chart.js';
import React from 'react';
import '../main.css';
import ChartJsTextPlugin from './ChartJsTextPlugin';

interface IWhoIsBuyingProps {
  numberOfEntities: number;
  commonwealthPercentage: number;
}

class WhoIsBuying extends React.Component<IWhoIsBuyingProps> {
  private chart: React.RefObject<HTMLCanvasElement>;

  constructor(props: IWhoIsBuyingProps) {
    super(props);
    this.chart = React.createRef();
  }

  public componentDidMount() {
    if (!this.chart.current) {
      return;
    }

    const {
      numberOfEntities,
      commonwealthPercentage,
    } = this.props;

    /// @ts-ignore
    ChartJsTextPlugin.description = {
      text: `${numberOfEntities} entities have registered, ${commonwealthPercentage}% of which are Commonwealth government`,
      width: 200,
    };

    const chart = new Chart(this.chart.current, {
      type: 'pie',
      plugins: [ChartJsTextPlugin],
      options: {
        cutoutPercentage: 50,
        legend: {
          position: 'right',
        },
      },
      /// @ts-ignore
      description: {
        text: `${numberOfEntities} entities have registered, ${commonwealthPercentage}% of which are Commonwealth government`,
        width: 200,
      },
      data: {
        labels: [
          'Corporate Commonwealth Entity',
          'Non Corporate Commonwealth Entity',
          'State / Territory',
          'Local',
          'Other',
        ],
        datasets: [{
          backgroundColor: [
            '#8537BF',
            '#FF89C4',
            '#37AFF7',
            '#F2A16A',
            '#6EA846',
          ],
          data: [43, 94, 64, 74, 13],
        }],
      },
    });
  }
  public render() {
    return (
      <div className="chart-container">
        <canvas ref={this.chart}></canvas>
      </div>
    );
  }
}

export default WhoIsBuying;
