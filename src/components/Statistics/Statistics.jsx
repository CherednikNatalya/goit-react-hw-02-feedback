import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({title, stats}) => {
    return (
    <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}
  
    <ul className={css.stat_list}>
        {stats.map(event => (
            <li key = {event.id} className={css.item}>
        <span className={css.label}>{event.label}</span>
        <span className={css.percentage}>{event.percentage}%</span>
      </li>
        ))} 
    
    </ul>
  </section>)
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      }),
    ),
  };

  <Statistics title="Upload stats" stats={data} />