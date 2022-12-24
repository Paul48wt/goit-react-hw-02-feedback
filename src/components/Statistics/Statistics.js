import PropTypes from 'prop-types';
export const Statistics = ({ options, state, total, positivePercentage }) => {
  return (
    <div>
      {options.map(item => (
        <p key={item} className="statistics">
          {item.charAt(0).toUpperCase() + item.slice(1)}: {state[item]}
        </p>
      ))}
      <p className="statistics">Total: {total}</p>
      <p className="statistics">Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

Statistics.propTypes = {
  options: PropTypes.array,
  state: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
