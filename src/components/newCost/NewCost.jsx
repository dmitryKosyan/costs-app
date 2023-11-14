import CostForm from './CostForm';
import './NewCost.css';
const NewCost = (props) => {
    const onSaveCostData = (costData) => {
        const dataCost = {
            ...costData,
            id: Math.random().toString()
        }
        props.onGetDataCost(dataCost)
        console.log({ ...costData })
    }
    return (
        <div className="new-cost">
            <CostForm saveData={onSaveCostData} />
        </div>

    );
}
export default NewCost;