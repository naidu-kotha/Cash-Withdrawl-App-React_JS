// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  reduceTotal = value => {
    const {amount} = this.state
    if (amount >= value) {
      this.setState({amount: amount - value})
    }
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg">
        <div className="card">
          <div className="name-container">
            <div className="icon">S</div>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="details">Your Balance</p>
            <p className="amount">{amount}</p>
          </div>
          <div className="amount-container">
            <p className="amount-details">In Rupees</p>
          </div>
          <div className="withdraw-container">
            <p className="withdraw">Withdraw</p>
            <p className="choose">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="list-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                denomination={eachItem}
                key={eachItem.id}
                reduceTotal={this.reduceTotal}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
