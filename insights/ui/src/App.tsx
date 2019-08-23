import AUcard, { AUcardHeader, AUcardInner } from '@gov.au/card';
import React from 'react';
import DailyRatesPaid from './charts/DailyRatesPaid';
import OpportunityType from './charts/OpportunityType';
import ResponsesPerOpportunity from './charts/ResponsesPerOpportunity';
import SellerNumberPerCategory from './charts/SellerNumberPerCategory';
import TopBuyersProps from './charts/TopBuyers';
import TopCategories from './charts/TopCategories';
import WhoCanRespond from './charts/WhoCanRespond';
import WhoIsBuying from './charts/WhoIsBuying';
import WhoIsWinning from './charts/WhoIsWinning';
import './main.css';

const App: React.FC = () => {
  return (
    <div className="au-body">
      <div className="au-grid">
        <div className="row">
          <div className="col-xs-12">
            <WhoIsBuying />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <TopBuyersProps />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <WhoCanRespond />
          </div>
          <div className="col-xs-6">
            <OpportunityType />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <TopCategories />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <AUcard className="au-body col-xs-6">
              <AUcardInner>
                <AUcardHeader level="3">Card Title</AUcardHeader >
                <p>Some text</p>
                <p>Additional content</p>
              </AUcardInner>
            </AUcard>
            <AUcard className="au-body col-xs-6">
              <AUcardInner>
                <AUcardHeader level="3">Card Title</AUcardHeader >
                <p>Some text</p>
                <p>Additional content</p>
              </AUcardInner>
            </AUcard>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <AUcard className="col-xs-6">
              <AUcardInner>
                <AUcardHeader level="3">Card Title</AUcardHeader >
                <p>Some text</p>
                <p>Additional content</p>
              </AUcardInner>
            </AUcard>
            <AUcard className="col-xs-6">
              <AUcardInner>
                <AUcardHeader level="3">Card Title</AUcardHeader >
                <p>Some text</p>
                <p>Additional content</p>
              </AUcardInner>
            </AUcard>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <DailyRatesPaid />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <SellerNumberPerCategory />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <ResponsesPerOpportunity />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <WhoIsWinning />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
