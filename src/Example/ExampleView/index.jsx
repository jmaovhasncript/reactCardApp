import { PropTypes } from 'prop-types';
import React from 'react';
import './styles.css';
import CardLayout from '../../components/CardLayout';

const ExampleView = ({ itemsCurrentPage, itemsLastPage, itemsPaged, onNext, onPrevious }) => (
  <div className="cardContainer">
    <ul id="items">
      {itemsPaged.map(item =><CardLayout key={item.id} cards={item} />)}
    </ul>
    <div className="textAlign buttonContainer">
    {itemsCurrentPage !== 0 && <button onClick={onPrevious} className="button">Previous</button>}
    {itemsCurrentPage !== itemsLastPage && <button onClick={onNext} className="button">Next</button>}
    </div>
  </div>
);
ExampleView.propTypes = {
  itemsCurrentPage: PropTypes.number.isRequired,
  itemsLastPage: PropTypes.number.isRequired,
  itemsPaged: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
};
export default ExampleView;
