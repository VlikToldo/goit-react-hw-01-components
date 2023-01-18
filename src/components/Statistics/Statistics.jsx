import PropTypes from 'prop-types';

import css from "./statistics.module.css";
import StatisticsItem from './StatisticsItem/StatisticsItem';

const Statistics = ({title, items})=> {
    // console.log(stats);
    const elements = items.map(item=>  <StatisticsItem key={item.id} {...item} />);

    return (
         <section className={css.statistics}>

            {title && <h2 className={css.title}>{title}</h2>}
            <ul className="stat-list">
                {elements}
            </ul>

        </section>
    )
}

export default Statistics;

Statistics.defaultProps = {
    items: []
}

Statistics.propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id:
        PropTypes.string.isRequired,
        label: 
        PropTypes.string.isRequired,
        percentage:
        PropTypes.number.isRequired,
    })),

}

