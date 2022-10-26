// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denomination, reduceTotal} = props
  const {value} = denomination

  const reduceMoney = () => {
    reduceTotal(value)
  }

  return (
    <li className="value-container">
      <button type="button" onClick={reduceMoney}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
