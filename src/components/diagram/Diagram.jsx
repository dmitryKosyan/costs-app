import DiagramBar from "./DiagramBar"
import './Diagram.css'

const Diagram = (props) => {
    const dataSetsValues = props.dataSets.map((el) => Number(el.value))
    const dataMaxValue = Math.max(...dataSetsValues)

    return (
        <div className="cost__wrapper">
            <div className="diagram" >
                {props.dataSets.map((dataSet) =>
                    <DiagramBar
                        key={dataSet.label}
                        value={dataSet.value}
                        maxValue={dataMaxValue}
                        label={dataSet.label}
                    />
                )}
            </div>
        </div>
    )
}
export default Diagram