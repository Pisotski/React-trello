import React from 'react';
import PropTypes from 'prop-types';
import ListItemEntry from './ListItemEntry';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listContent: [],
      currentText: '',
      showTextArea: false,
    };
    this.toggleTextField = this.toggleTextField.bind(this);
    this.acceptText = this.acceptText.bind(this);
    this.handleListItemChange = this.handleListItemChange.bind(this);
    this.onListItemFocus = this.onListItemFocus.bind(this);
  }

  onListItemFocus() {
    const { showTextArea } = this.state;
    alert(showTextArea);
  }

  toggleTextField() {
    const { showTextArea } = this.state;

    this.setState({
      showTextArea: !showTextArea,
    });
  }

  acceptText(e) {
    e.preventDefault();
    // let { listContent } = this.state;
    const { currentText } = this.state;
    // listContent = listContent.concat([currentText]);

    // this.setState({
    //   listContent,
    // });
    this.toggleTextField();
    this.props.passTextToStateManager(this.props.id, currentText);
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

  render() {
    const { info } = this.props;
    const { id, title, listItems } = info;
    return (
      <section className="list-container" id={id}>
        <ul className="list">
          <li className="list-name-wrapper">
            <input placeholder={title} className="list-name" type="text" />
          </li>
          {listItems.map(((text, index) => <ListItemEntry key={index} text={text} onListItemFocus={this.onListItemFocus} />))}
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
  info: {
    id: null,
    title: 'enter list name',
    listItems: [],
  },
};
List.propTypes = {
  info: infoShape,
};

export default List;
