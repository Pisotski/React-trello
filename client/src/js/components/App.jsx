import React from 'react';
import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultList:
      {
        id: 0,
        title: 'enter list name',
        listItems: [],
      },
      listInfo: [],
    };
    this.renderList = this.renderList.bind(this);
    this.acceptCardToList = this.acceptCardToList.bind(this);
  }

  componentDidMount() {
  }

  acceptCardToList(listId, card) {
    const { listInfo } = this.state;
    listInfo[listId].listItems.push(card);
    const newListInfo = listInfo.concat([]);
    this.setState({
      listInfo: newListInfo,
    });
  }

  renderList() {
    const { listInfo } = this.state;
    const createNewList = () => {
      const newId = listInfo.length;
      const { defaultList } = this.state;
      const newList = JSON.parse(JSON.stringify(defaultList));
      newList.id = newId;
      // newList.listItems = [];
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
        <button className="add-list" type="button" onClick={this.renderList}>
          Add List
        </button>
        <div className="main-board">
          {listInfo.map(list => <List key={list.id} id={list.id} info={list} passTextToStateManager={this.acceptCardToList} />)}
        </div>
      </div>
    );
  }
}

export default App;
