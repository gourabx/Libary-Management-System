import React, { useState } from 'react';
import Login from './Login';
import BookList from './BookList';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {loggedIn ? <BookList /> : <Login onLogin={() => setLoggedIn(true)} />}
    </div>
  );
}

export default App;






