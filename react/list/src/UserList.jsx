import React from 'react';
import Pagination from './Pagination';
import User from './User';

class UsersList extends React.Component {
  state = {
    curPage: 1,
  };

  goNext = () => {
    this.setState({
      curPage: this.state.curPage + 1,
    });
  };
  goPrev = () => {
    this.setState({
      curPage: this.state.curPage - 1,
    });
  };

  render() {
    const { users } = this.props;
    const { curPage } = this.state;
    const itemsPerPage = 3;
    const startIndex = curPage * itemsPerPage - itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const nextUsersList = users.slice(startIndex, endIndex);
    return (
      <div>
        <Pagination
          users={users}
          nextHandler={this.goNext}
          prevHandler={this.goPrev}
          curPage={curPage}
          itemsPerPage={itemsPerPage}
        />
        <ul className="users">
          {nextUsersList.map(user => (
            <User {...user} key={user.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
