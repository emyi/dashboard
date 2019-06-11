import React, { Component } from 'react'

export class SelectDropDownOptions extends Component {
    render() {
        return (
            <ul className={`dropdown-menu date-range-options ${this.props.showClass}`}>
                {this.props.totals.map((total, i) => (
                    <li key={i} onClick={this.props.selectTotal.bind(this, total.id)}>{total.dateRange}</li>

                ))}
                
            </ul>
        )
    }
}

export default SelectDropDownOptions;
