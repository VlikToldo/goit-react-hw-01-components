import PropTypes from 'prop-types';
import css from './transaction-history.module.css'

import TransactionHistoryItem from './TransactionHistoryItem/TransactionHistoryItem';

const TransactionHistory = ({items})=> {
    const elements = items.map(item=> <TransactionHistoryItem key={item.id} {...item}/>)

    return  <table className="transaction-history">
              <thead>
                <tr>
                 <th>Type</th>
                 <th>Amount</th>
                 <th>Currency</th>
                </tr>
              </thead>
              <tbody>
                 {elements}
              </tbody>
            </table>
}

export default TransactionHistory;

TransactionHistory.propTypes ={
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }))
}