import './CostFilter.css'
const CostFilter = (props) => {
    const onChangeSelectHandler = (event) => {
        props.chengeYear(event.target.value)
    }
    return (
        <div className='cost__wrapper '>
            <div className='cost__select'>
                <label>Выбор по году</label>
            </div>
            <select className='cost__filter' value={props.year} onChange={onChangeSelectHandler}>

                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2023">2023</option>
            </select>

        </div>
    )

}
export default CostFilter