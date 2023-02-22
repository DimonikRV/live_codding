import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList';

const rootElem = document.getElementById('root');

const users = [
  { id: 11, name: 'Tom', age: 20 },
  { id: 12, name: 'Rim', age: 45 },
  { id: 13, name: 'Skin', age: 27 },
  { id: 14, name: 'Bobby', age: 26 },
  { id: 15, name: 'Jack', age: 19 },
  { id: 16, name: 'Bob', age: 100 },
  { id: 17, name: 'Rob', age: 32 },
  { id: 18, name: 'Bom', age: 21 },
  { id: 19, name: 'DOM', age: 22 },
  { id: 20, name: 'Toretto', age: 60 },
];

ReactDOM.render(<UsersList users={users} />, rootElem);
