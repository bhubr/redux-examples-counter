import React from 'react';
import { connect } from 'react-redux';
import UserItem from './UserItem';

class UserList extends React.Component {
  render() {
    const { users } = this.props;
    return (
      <ul className="list-group">
      {users.map(({ id, email }) =>
        <UserItem key={id} id={id} email={email} />
      )}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.items
  };
};

export default connect(mapStateToProps)(UserList);
