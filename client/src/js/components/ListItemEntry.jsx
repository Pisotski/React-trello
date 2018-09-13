import React from 'react';
import PropTypes from 'prop-types';

function ListItemEntry(props) {
  const { id, text, handleArrowClick } = props;
  return (
    <li id={id}>
      <button className="left-arrow" type="button" placeholder="<" onClick={handleArrowClick} />
        <span>{ text }</span>
      <button className="right-arrow" type="button" placeholder=">" onClick={handleArrowClick} />
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
