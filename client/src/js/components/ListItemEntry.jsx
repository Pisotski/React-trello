import React from 'react';
import PropTypes from 'prop-types';
import '../../css/ListItemEntry.css';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ListItemEntry(props) {
  const {
    arrows, id, text, handleArrowClick,
  } = props;
  if (arrows==="both") {
    return (
      <li id={id} className="list-item-wrapper">
        <FontAwesomeIcon id="left-arrow" icon={faChevronCircleLeft} onClick={handleArrowClick} />
        <div>{ text }</div>
        <FontAwesomeIcon id="right-arrow" icon={faChevronCircleRight} onClick={handleArrowClick} />
      </li>
    );
  } if (arrows === 'right') {
    return (
      <li id={id} className="list-item-wrapper">
        <div>{ text }</div>
        <FontAwesomeIcon id="right-arrow" icon={faChevronCircleRight} onClick={handleArrowClick} />
      </li>
    );
  } if (arrows === 'left') {
    return (
      <li id={id} className="list-item-wrapper">
        <FontAwesomeIcon id="left-arrow" icon={faChevronCircleLeft} onClick={handleArrowClick} />
        <div>{ text }</div>
      </li>
    );
  } if (arrows === 'none') {
    return (
      <li id={id} className="list-item-wrapper">
        <div>{ text }</div>
      </li>
    );
  }
}
ListItemEntry.defaultProps = {
  id: null,
  text: null,
  arrows: 'none',
  handleArrowClick: null,
};
ListItemEntry.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  arrows: PropTypes.string,
  handleArrowClick: PropTypes.func,
};

export default ListItemEntry;
