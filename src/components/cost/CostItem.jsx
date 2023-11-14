import React from 'react'
import CostDate from './CostDate';
import './CostItem.css';
const CostItem = (props) => {


    return (
        <div className="cost__wrapper" >
            <CostDate date={props.date} />

            <div className="cost__item-inner" >
                <h2 className="cost__item" >{props.name} </h2>
            </div>
            <div className="cost__price" >${props.amount}</div>

        </div>
    )
}
export default CostItem