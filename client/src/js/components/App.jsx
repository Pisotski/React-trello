import React from 'react';
import List from './List';
import '../../css/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultList:
      {
        id: 0,
        title: 'Enter list name',
        listItems: [],
        arrows: 'left',
      },
      listInfo: [],
    };
    this.renderList = this.renderList.bind(this);
    this.acceptCardToList = this.acceptCardToList.bind(this);
    this.deleteInsertListItem = this.deleteInsertListItem.bind(this);
  }

  componentDidMount() {
    this.renderList();
  }

  acceptCardToList(listId, card) {
    const { listInfo } = this.state;
    listInfo[listId].listItems.push(card);
    const newListInfo = listInfo.concat([]);
    this.setState({
      listInfo: newListInfo,
    });
  }

  deleteInsertListItem(direction, listId, itemId) {
    const { listInfo } = this.state;
    const temp = listInfo[listId].listItems[itemId];
    listInfo[listId].listItems.splice(itemId, 1);
    this.setState({
      listInfo,
    });
    const move = direction === 'left-arrow' ? listId - 1 : listId + 1;
    this.acceptCardToList(move, temp);
  }

  renderList() {
    const { listInfo } = this.state;
    const createNewList = () => {
      const newId = listInfo.length;
      const { defaultList } = this.state;
      const newList = JSON.parse(JSON.stringify(defaultList));
      newList.id = newId;
      return newList;
    };
    const newListInfo = listInfo.concat([createNewList()]);
    this.setState({
      listInfo: newListInfo,
    });
  }

  render() {
    const { listInfo } = this.state;
    return (
      <div className="grid">
        <header>
          <h1>Best Trello Board Ever Maid</h1>
        </header>
        <button className="add-list" type="button" onClick={this.renderList}>
          Add List
        </button>
        <div className="main-board">
          {
            listInfo.map(
              list => (
                <List
                  key={list.id}
                  id={list.id}
                  info={list}
                  passTextToStateManager={this.acceptCardToList}
                  deleteInsertListItem={this.deleteInsertListItem}
                />
              ),
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
