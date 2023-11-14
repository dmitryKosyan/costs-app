import './CostForm.css'
import React from 'react'
const CostForm = (props) => {
    const [inputName, setInputName] = React.useState('')
    const [inputAmount, setInputAmount] = React.useState('')
    const [inputDate, setInputDate] = React.useState('')
    const nameChangeHandler = (event) => {
        setInputName(event.target.value)

    }
    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setInputDate(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault()
        const costData = {
            name: inputName,
            amount: inputAmount,
            date: new Date(inputDate)

        }

        setInputName('')
        setInputAmount('')
        setInputDate('')
        props.saveData(costData)
    }

    return (
        <form onSubmit={submitHandler} >
            <div className="new-cost__controls">
                <div className="new-cost__controls">
                    <label>название</label>
                    <input className='cost-input' type="text" value={inputName} onChange={nameChangeHandler} />
                </div>
                <div className="new-cost__controls">
                    <label>сумма</label>
                    <input className='cost-input' type="number" min='0.01' step='0.01' value={inputAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-cost__controls">
                    <label>дата</label>
                    <input className='cost-input' type="date" min='2019-01-01' step='2022-12-31' placeholder='выберете дату' value={inputDate} onChange={dateChangeHandler} />
                </div>
                <div className="new-cost__actions" >
                    <button type="submit" >добавить расход</button>
                </div>
            </div>
        </form>
    )
}
export default CostForm