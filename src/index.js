import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';

const repos = {
  'arcade-game': {
    name: 'Arcade Game',
    description: 'Project for Udacity FEND program. Build a clone of the `Frogger`'
    + ' arcade game',
    features: ['OOP', 'HTML5 canvas'],
    url: 'https://github.com/alf1o/arcade-game'
  },
  'goals-keeper': {
    name: 'Goals Keeper',
    description: 'Todolist built with React, Redux and MaterialUI. Tested with'
    + ' Jest and Enzyme. Uses IndexedDB to store state client-side.',
    features: ['React and Redux', 'MaterialUI', 'Jest and Enzyme', 'IndexedDB'],
    url: 'https://github.com/alf1o/goalskeeper'
  },
  'Mobile-Flashcards': {
    name: 'Mobile Flashcards',
    description: 'Project for Udacity React program. Mobile app built with React'
    + ' Native. Let the user build its own deck of cards and play with it in a'
    + ' quiz game.',
    features: ['React Native', 'Redux'],
    url: 'https://github.com/alf1o/Mobile-Flashcards'
  },
  'myReads': {
    name: 'My Reads',
    description: 'Udacity project for the React program. Web app to keep track'
    + ' of books you read and want to read. Built with React.',
    features: ['React', 'React Router DOM'],
    url: 'https://github.com/alf1o/myReads'
  },
  'optimization-project': {
    name: 'Optimization Project',
    description: 'Project for Udacity FEND program. The purpose was to optimize'
    + ' a web page by making it load under 1 second, getting a PageSpeed Insights'
    + ' score of over 90, and making the scroll animation work at 60fps.',
    features: ['CRP optimization', 'frame pipeline optimization'],
    url: 'https://github.com/alf1o/optimization-project'
  },
  'readable': {
    name: 'Readable',
    description: 'Project for Udacity React program. Simple forum that lets users'
    + ' create posts and comment on them.',
    features: ['React', 'Redux', 'React Router DOM'],
    url: 'https://github.com/alf1o/readable'
  }
};

ReactDOM.render(
  <App repos={Object.values(repos)} />,
  document.getElementById('root')
);

// registerServiceWorker();
