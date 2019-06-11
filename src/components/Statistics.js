import React, { Component } from 'react';
import '../css/Statistics.css';

export class Statistics extends Component {
    render() {
        const selectedTotal = this.props.totals.find((total) => {
            return total.selected === true;
        })
        return (
            <div className="statistics">
                <div className="col-12">
                    <h2>Totals <span className="smaller">Last Week</span></h2>
                    <div className="row">
                        <div className="col-12 col-sm-3 ta-center">
                            <p className="bigger">{selectedTotal.newFeedbacks}</p>
                            <p className="smaller">New Feedbacks</p>
                        </div>
                        <div className="col-12 col-sm-3 ta-center">
                            <p className="bigger">{`${selectedTotal.totalProfit} ${selectedTotal.currencySymbol}`}</p>
                            <p className="smaller">Total Profits</p>
                        </div>
                        <div className="col-12 col-sm-3 ta-center">
                            <p className="bigger">{selectedTotal.newOrders}</p>
                            <p className="smaller">New Orders</p>
                        </div>
                        <div className="col-12 col-sm-3 ta-center">
                            <p className="bigger">{`${selectedTotal.brandPopularity} ${selectedTotal.brandPopularityNumberSymbol}`}</p>
                            <p className="smaller">Brand Popularity</p>
                        </div>
                    </div>
                    <div className="row ta-center">
                        <div className="col-12 col-sm-6">
                            <img src="https://via.placeholder.com/440" className="img-responsive col-12" />
                            
                        </div>
                        <div className="col-12 col-sm-6">
                            <img src="https://via.placeholder.com/440" className="img-responsive col-12" />
                            
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Statistics
