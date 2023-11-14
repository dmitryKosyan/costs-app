import NewCost from './components/newCost/NewCost';
import './App.css';
import Costs from './components/cost/Costs';
import React from 'react';


const costsInit = [
  {
    date: new Date(2021, 3, 24),
    name: 'холодильник',
    amount: '900'
  },
  {
    date: new Date(2023, 6, 7),
    name: 'macbook',
    amount: '1900'
  },
  {
    date: new Date(2019, 11, 24),
    name: 'jeans',
    amount: '345'
  },
  {
    date: new Date(2023, 8, 7),
    name: 'blander',
    amount: '100'
  },
  {
    date: new Date(2023, 9, 7),
    name: 'smart tv',
    amount: '1200'
  },
]
function App() {

  const [costs, setCosts] = React.useState(costsInit)
  const getCostData = (costData) => {
    setCosts(prevCosts => {
      return [costData, ...prevCosts]
    })
  }






  return (
    <div className="App">
      <NewCost onGetDataCost={getCostData} />
      <Costs costs={costs} />

    </div>
  );
}

export default App
