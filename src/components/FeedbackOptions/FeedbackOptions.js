import PropTypes from 'prop-types';
export const FeedbackOptions = ({ options, handleClick }) => {
  return (
    <div className="feedbackOptions">
      {options.map(item => (
        <button type="button" name={item} key={item} onClick={handleClick}>
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  handleClick: PropTypes.func,
};
