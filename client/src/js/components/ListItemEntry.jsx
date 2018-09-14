import React from 'react';
import PropTypes from 'prop-types';
import '../../css/ListItemEntry.css';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ListItemEntry(props) {
  const { id, text, handleArrowClick } = props;
  return (
    <li id={id} className="list-item-wrapper">
      <FontAwesomeIcon id="left-arrow" icon={faChevronCircleLeft} onClick={handleArrowClick} />
      <div>{ text }</div>
      <FontAwesomeIcon id="right-arrow" icon={faChevronCircleRight} onClick={handleArrowClick} />
    </li>
  );
}
ListItemEntry.defaultProps = {
  id: null,
  text: null,
  handleArrowClick: null,
};
ListItemEntry.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  handleArrowClick: PropTypes.func,
};

export default ListItemEntry;
