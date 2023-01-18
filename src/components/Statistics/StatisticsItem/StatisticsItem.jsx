import PropTypes from 'prop-types';

import css from'./statistics-item.module.css'

const StatisticsItem = ({label, percentage})=> {
    return (
        <li className={css.item}>
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}%</span>
        </li>
    )
}

export default StatisticsItem;

StatisticsItem.propTypes ={
  label:
  PropTypes.string.isRequired,
  percentage:
  PropTypes.number.isRequired,
}