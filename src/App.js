import React from 'react';
// import the styled from styled-components library 

// create the styled component Ul of a ul and apply these rules:  display: flex; list-style-type: none;
// create the styled component Title of an h1 and apply these rules:  text - align: center; color: #d41f1f;

function App() {
  return (
    // replace the html tags below where necessary with the created styled components 
    <div className="App">
      <nav>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </nav>
      <h1>Styled Component!</h1>
      <p>This is an example of Styled Component</p>
    </div>
  );
}

export default App;