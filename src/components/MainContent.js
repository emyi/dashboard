import React, { Component } from 'react';
import SelectDropDown from './SelectDropDown';
import Statistics from './Statistics';
import '../css/MainContent.css';

export class MainContent extends Component {
    state = {
        totals: [
            {
                id: 1,
                dateRange: '17 January 2016 - 15 February 2016',
                newFeedbacks: 597,
                totalProfit: 16600000,
                currencySymbol: '$',
                newOrders: 7500,
                brandPopularity: 48,
                brandPopularityNumberSymbol: '%',
                selected: true
            },
            {
                id: 2,
                dateRange: '17 February 2016 - 15 March 2016',
                newFeedbacks: 397,
                totalProfit: 9600000,
                currencySymbol: '$',
                newOrders: 2500,
                brandPopularity: 88,
                brandPopularityNumberSymbol: '%',
                selected: false
            },
            {
                id: 3,
                dateRange: '17 March 2016 - 15 April 2016',
                newFeedbacks: 517,
                totalProfit: 5582712,
                currencySymbol: '$',
                newOrders: 500,
                brandPopularity: 18,
                brandPopularityNumberSymbol: '%',
                selected: false
            },
            {
                id: 4,
                dateRange: '17 April 2016 - 15 May 2016',
                newFeedbacks: 327,
                totalProfit: 600300,
                currencySymbol: '$',
                newOrders: 200,
                brandPopularity: 18,
                brandPopularityNumberSymbol: '%',
                selected: false
            }
        ],
        isActive: false
    }
    selectTotal = (id) => {
        const newTotals = this.state.totals.map((total) => {
            if (id === total.id) {
                total.selected = true;
            } else {
                total.selected = false;
            }
            return total;
        });
        this.setState({ totals: newTotals, isActive: false });
    }
    toggleActiveClass = () => {
        this.setState({ isActive: !this.state.isActive })
    }
    render() {
        return (
            <main>
                <div className={`${this.props.hamburgerActiveState ? "offset-2 col-10" : "col-12"}`}>
                    <div className="row">
                        <div className="col-sm-8 col-12">
                            <h1>{this.props.activeNavState}</h1>
                        </div>
                        
                        <SelectDropDown selectTotal={this.selectTotal} isActive={this.state.isActive} totals={this.state.totals} toggleActiveClass={this.toggleActiveClass} />
                            
                        
                    </div>
                    <Statistics totals={this.state.totals} />
                </div>
                
            </main>
        )
    }
}

export default MainContent;
