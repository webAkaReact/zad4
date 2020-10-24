import React from 'react';
import './App.css';
import img from './img.PNG'

class App extends React.Component {
  state = {
    quotes: [
        {
        "quote": "Genius is one percent inspiration and ninety-nine percent perspiration.",
        "author": "Thomas Edison"
        },
        {
        "quote": "You can observe a lot just by watching.",
        "author": "Yogi Berra"
        },
        {
        "quote": "A house divided against itself cannot stand.",
        "author": "Abraham Lincoln"
        },
        {
        "quote": "Difficulties increase the nearer we get to the goal.",
        "author": "Johann Wolfgang von Goethe"
        },
        {
        "quote": "Fate is in your hands and no one elses",
        "author": "Byron Pulsifer"
        },
        {
        "quote": "Be the chief but never the lord.",
        "author": "Lao Tzu"
      }
    ]
  }
  render()
  {
    // 1. zbuduj strukture w html ktora bedzie zawierala boxa w ktorym umiescisz cytat oraz autora a ponizej przycisk 
    // 2. stworz metode ktora podepniesz pod zdarzenie onClick na przycisk
    // 3. metoda ta ma losować losowy cytat z tablicy quotes i go wyświetlać
    return (
      <div className="App">
        <img src={img} alt="" />
      </div>
    );
  }
}

export default App;
