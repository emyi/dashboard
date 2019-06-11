import React, { Component } from 'react';
import SelectDropDownOptions from './SelectDropDownOptions';
import '../css/SelectDropDown.css';

export class SelectDropDown extends Component {


    render() {
        const selectedDateRange = this.props.totals.find((total) => {
            return total.selected === true;
        }).dateRange;
        const showClass = this.props.isActive ? 'show' : '';
        return (
            <div className="col-12 col-sm-4 dropdown date-range">
                 <button className="btn btn-primary" onClick={this.props.toggleActiveClass}>{selectedDateRange}</button>
                <SelectDropDownOptions selectTotal={this.props.selectTotal} totals={this.props.totals} showClass={showClass} />
            </div>
           
        )
    }
}

export default SelectDropDown
