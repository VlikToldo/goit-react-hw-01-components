import PropTypes from 'prop-types';
import css from './transaction-history-item.module.css';

const TransactionHistoryItem = ({type, amount, currency})=>{
    return     <tr>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
}

export default TransactionHistoryItem;

TransactionHistoryItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
}