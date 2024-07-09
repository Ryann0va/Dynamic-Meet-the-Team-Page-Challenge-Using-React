//U99350821

import React from 'react';
import Gallery from './components/Gallery';
import './styles.css';
import './images.jfif'
import { Header, Footer } from './components/commoncomponents';


const App = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO',
      photo: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      photo: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
      name: 'Josh Winters',
      role: 'CIO',
      photo: 'https://randomuser.me/api/portraits/men/4.jpg'
    },
  ];

  return (
    <div className="App">
      <Header title="Meet the Team" />
      <Gallery members={teamMembers} />
    </div>
  );
}

export default App;
