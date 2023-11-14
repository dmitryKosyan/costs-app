import CostItem from "./CostItem"
import CostFilter from './CostFilter'
import React from "react";
import CostsDiagram from "./CostsDiagram";
const Costs = ({ costs }) => {
    const [selectedYear, setSelectedYear] = React.useState('2023')
    const onChengeHandler = (year) => {
        setSelectedYear(year)

    }
    const filtredCost = costs.filter(cost => cost.date.getFullYear().toString() === selectedYear)

    return (
        <div>
            <CostsDiagram costs={filtredCost} />
            <CostFilter year={selectedYear} chengeYear={onChengeHandler} />
            {filtredCost.length === 0
                ?
                <p className="cost__wrapper">расходов нет</p>
                :
                filtredCost.map((cost, i) => <CostItem
                    key={i}
                    date={cost.date}
                    name={cost.name}
                    amount={cost.amount} />)
            }

        </div>

    )
}
export default Costs