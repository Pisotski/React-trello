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
      showInputArea: false,
    };
    this.toggleTextField = this.toggleTextField.bind(this);
    this.acceptText = this.acceptText.bind(this);
    this.handleListItemChange = this.handleListItemChange.bind(this);
    this.handleArrowClick = this.handleArrowClick.bind(this);
  }

  handleArrowClick(e) {
    const { length, id } = this.props;
    const direction = e.currentTarget.id;
    const itemId = e.currentTarget.parentNode.id;
    const validList = (arrowDirection) => {
      if (arrowDirection === 'left-arrow') {
        return id > 0;
      } if (arrowDirection === 'right-arrow') { return id < length - 1; }
      return 'check className';
    };

    if (validList(direction)) {
      const { deleteInsertListItem } = this.props;
      deleteInsertListItem(direction, id, itemId);
    } else {
      console.log('Invalid direction', validList(direction));
    }
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
  }

  handleListItemChange(e) {
    const text = e.target.value;
    this.setState({
      currentText: text,
    });
  }

  renderTextAreaField() {
    let textarea;
    const { showTextArea } = this.state;

    if (showTextArea) {
      textarea = (
        <form onSubmit={this.acceptText}>
          <textarea type="text" className="list-item-text" onChange={this.handleListItemChange} />
          <input type="submit" value="ok" />
        </form>
      );
    }
    return textarea;
  }

  renderInputArea() {
    const { showInputArea } = this.state;
    const { info } = this.props;
    const className = showInputArea ? 'list-name' : 'list-name-hidden';

    return (
      <input placeholder={info.title} className={className} type="text" onClick={this.toggleInputField} />
    );
  }

  render() {
    const { info } = this.props;
    const { arrows, title, listItems } = info;
    console.log(info);
    return (
      <section className="list-container">
        <ul className="list">
          <li className="list-name-container">
            <input placeholder={title} className="list-name" type="text" />
          </li>
          {listItems.map(((text, index) => <ListItemEntry key={index} arrows={arrows} id={index} text={text} handleArrowClick={this.handleArrowClick} />))}
          {this.renderTextAreaField()}
          <li className="add-another-card" onClick={this.toggleTextField}>
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
  length: null,
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
  length: PropTypes.number,
  info: infoShape,
  passTextToStateManager: PropTypes.func,
  deleteInsertListItem: PropTypes.func,
};

export default List;
