import React from 'react';

import UserForm from './components/form/usersForm.component'
import CardList from './components/cardList/cardList.component';

import './App.css';


function App() {
  return (
    <div className="App">
      <UserForm />
      <CardList />
    </div>
  );
}

export default App;
