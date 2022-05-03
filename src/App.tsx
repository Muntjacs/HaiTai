import React from 'react';
import logo from './logo.svg';
import './App.css';
import HTheader from './htheader/htheader';
import HTmain from './htmain/htmain';
import HTcompany from './htcompany/htcompany';
import HTbannerPage from './htbannerPage/htbannerPage';
import HThoneyStory from './hthoneyStory/hthoneyStory';
import HTsweetNews from './htsweetNews/htsweetNews';
import HTLink from './htLink/htLink';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HTheader/>
        <HTmain/>
      </header>
      <section>
        <HTcompany/>
      </section>
      <section>
        <HTbannerPage/>
      </section>
      <section>
        <HThoneyStory/>
      </section>
      <section>
        <HTsweetNews/>
      </section>
      <section>
        <HTLink/>
      </section>
    </div>
  );
}

export default App;
