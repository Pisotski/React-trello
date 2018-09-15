import React from 'react';
import PropTypes from 'prop-types';
import ListItemEntry from './ListItemEntry';
import '../../css/List.css';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentText: '',
      showTextArea: false,
    };
    this.toggleTextField = this.toggleTextField.bind(this);
    this.acceptText = this.acceptText.bind(this);
    this.handleListItemChange = this.handleListItemChange.bind(this);
    this.handleArrowClick = this.handleArrowClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.keyAddAnotherCard = this.keyAddAnotherCard.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.toggleTextField();
    }
  }

  handleArrowClick(e) {
    const { id } = this.props;
    const direction = e.currentTarget.id;
    const itemId = e.currentTarget.parentNode.id;
    const { deleteInsertListItem } = this.props;
    deleteInsertListItem(direction, id, itemId);
  }

  toggleTextField() {
    const { showTextArea } = this.state;

    this.setState({
      showTextArea: !showTextArea,
    });
  }

  acceptText(e) {
    e.preventDefault();
    const { currentText } = this.state;
    const { passTextToStateManager, id } = this.props;
    this.toggleTextField();
    if (currentText.length) {
      passTextToStateManager(id, currentText);
    }
    this.setState({
      currentText: '',
    });
  }

  handleListItemChange(e) {
    const text = e.target.value;
    this.setState({
      currentText: text,
    });
  }

  keyAddAnotherCard(e) {
    const { currentText } = this.state;

    if (e.key === 'Enter') {
      if (currentText.length) {
        this.acceptText(e);
      } else {
        this.toggleTextField();
      }
    }
  }

  renderTextAreaField() {
    let textarea;
    const { showTextArea } = this.state;

    if (showTextArea) {
      textarea = (
        <form onSubmit={this.acceptText} ref={this.setWrapperRef}>
          <textarea autoFocus={true} type="text" className="list-item-text" onChange={this.handleListItemChange} onKeyDown={this.keyAddAnotherCard} />
          <input type="submit" value="ok" />
        </form>
      );
    }
    return textarea;
  }

  render() {
    const { info } = this.props;
    const { title, listItems } = info;
    return (
      <section className="list-container">
        <ul className="list">
          <li className="list-name-container">
            <input placeholder={title} className="list-name" type="text" />
          </li>
          {listItems.map(((text, index) => <ListItemEntry key={index} id={index} text={text} handleArrowClick={this.handleArrowClick} />))}
          {this.renderTextAreaField()}
          <li className="add-another-card" onKeyPress={this.keyAddAnotherCard} onClick={this.toggleTextField}>
             + Add another Card
          </li>
        </ul>
      </section>
    );
  }
}
const infoShape = PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
  listItems: PropTypes.arrayOf(PropTypes.string),
});

List.defaultProps = {
  id: null,
  info: {
    id: null,
    title: 'enter list name',
    listItems: [],
  },
  passTextToStateManager: null,
  deleteInsertListItem: null,
};
List.propTypes = {
  id: PropTypes.number,
  info: infoShape,
  passTextToStateManager: PropTypes.func,
  deleteInsertListItem: PropTypes.func,
};

export default List;
