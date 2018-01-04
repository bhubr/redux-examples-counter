import React from 'react';

export default class UserItem extends React.Component {
  render() {
    const { id, email } = this.props;
    return (
      <li className="list-group-item">{id}. {email}</li>
    );
  }
}
