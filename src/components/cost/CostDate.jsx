import './CostData.css'
const CostDate = (props) => {

    const month = props.date.toLocaleString("ru-Ru", { month: "long" });

    const year = props.date.getFullYear();
    const day = props.date.toLocaleString("ru-Ru", { day: "2-digit" });
    return (
        <div className="cost__data" >
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
        </div>
    );
}
export default CostDate