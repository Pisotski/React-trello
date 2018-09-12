import React from 'react';
import PropTypes from 'prop-types';

function ListItemEntry(props) {
  const { text, onListItemFocus } = props;
  return (
    <li>
      <button className="left-arrow" type="button" placeholder="<" />
      <span onClick={onListItemFocus}>{ text }</span>
      <button className="right-arrow" type="button" placeholder=">" />
    </li>
  );
}
ListItemEntry.defaultProps = {
  text: null,
  onListItemFocus: null,
};
ListItemEntry.propTypes = {
  text: PropTypes.string,
  onListItemFocus: PropTypes.func,
};

export default ListItemEntry;
