'use strict';

module.exports = {
  users: [
    {
      type: 'mentor',
      name: 'Beth Johnson',
      email: 'beth.johnson@hackreactor.com',
      password: '$2a$10$LvfipKxsVRScDkfiSUfefucwtgTrla17luidZE7P13vFWqTPw1qJe',
      location: 'SF',
      role: 'Front end',
      picture: 'http://imgur.com/xEUUtut.jpg',
      techStack: ['React', 'Express', 'Node.js', 'JavaScript'],
      followers: 26
    },
    {
      type: 'mentor',
      name: 'Benji Marinacci',
      email: 'benji.marinacci@hackreactor.com',
      password: '$2a$10$bPhzdz51BWKiMedaRdYgdeYUuMPeQ1RApalvwzmaUXlk6oNoJWfR6',
      location: 'Palo Alto',
      role: 'Full Stack',
      picture: 'http://imgur.com/iwn6mV5.jpg',
      techStack: ['React', 'Express', 'Node.js', 'JavaScript'],
      followers: 25
    },
    {
      type: 'mentor',
      name: 'Fred Zirdung',
      email: 'fred.zirdung@hackreactor.com',
      password: '$2a$10$kIO9Lc2cU.RMFQ3Vh/d.4OZ6LPb2PUZHtqbfxEIk7XjgIXAJwJUe2',
      location: 'SF',
      role: 'Full Stack',
      picture: 'http://imgur.com/9awfsn2.jpg',
      techStack: ['React', 'Express', 'Node.js', 'JavaScript'],
      followers: 32
    },
    {
      type: 'mentor',
      name: 'Eric Brown',
      email: 'eric.brown@hackreactor.com',
      password: '$2a$10$QIwi9bkgI5Z/wo5Q7PHcH.tCcy9iGeFYkByAF4OXwbu.UCwhBW6..',
      location: 'SF',
      role: 'Front end',
      picture: 'http://imgur.com/adDa5JU.jpg',
      techStack: ['React', 'Node.js', 'JavaScript'],
      followers: 24
    },
    {
      type: 'mentor',
      name: 'Tyler Arbus',
      email: 'tyler.arbus@hackreactor.com',
      password: '$2a$10$WsHnHQ9dmqPWcK1X8jYsj.NFl.u6HISeNXHzDjhd4MkqaDQEDwmeG',
      location: 'San Jose',
      role: 'Full Stack',
      picture: 'http://imgur.com/ohFukM2.jpg',
      techStack: ['Angular', 'Node.js', 'JavaScript'],
      followers: 20
    },
    {
      type: 'mentor',
      name: 'Paul Mills',
      email: 'paul.mills@hackreactor.com',
      password: '$2a$10$MJXtfT8g/KC7BdRXm0K.nu6uTa6rZQqQL1J2zBn1nYZuTBVMuT5GW',
      location: 'SF',
      role: 'Front end',
      picture: 'http://imgur.com/9eJRSav.jpg',
      techStack: ['React', 'Node.js', 'JavaScript'],
      followers: 21
    },
    {
      type: 'mentor',
      name: 'Alison Zhang',
      email: 'alison.zhang@hackreactor.com',
      password: '$2a$10$OnfA1trzQ4VlH7f/KlwGnOW0m04jyffqMwrBV7OjAX/.1ZXzxph1S',
      location: 'Palo Alto',
      role: 'Full Stack',
      picture: 'http://imgur.com/uz1C3om.jpg',
      techStack: ['React', 'Node.js', 'JavaScript'],
      followers: 20
    },
    {
      type: 'mentor',
      name: 'Jong Kim',
      email: 'jong.kim@hackreactor.com',
      password: '$2a$10$SHBvPEginR6EFtrHH62eJeKZo3wqAQ95Dz5Ecw8L9NJ6QXNxPbFOm',
      location: 'San Jose',
      role: 'Back end',
      picture: 'http://imgur.com/yTpcGqk.jpg',
      techStack: ['React', 'Node.js', 'JavaScript'],
      followers: 20
    },
  ],
  events: [
    {
      user_id: 3,
      title: 'Full-stack Workshop',
      description: 'Creating a full-stack app',
      location: 'Home floor, presentation space',
      date: '2017-09-28',
      time: '01:00'
    },
    {
      user_id: 2,
      title: 'Back-end Workshop',
      description: 'Let\'s build the back end!',
      location: 'Home floor, presentation space',
      date: '2017-09-28',
      time: '01:00'
    },
    {
      user_id: 1,
      title: 'React Workshop',
      description: 'Building apps in React',
      location: 'Home floor, presentation space',
      date: '2017-09-28',
      time: '01:00'
    }
  ],
  resources: [
    {
      user_id: 1,
      title: 'React tutorial',
      description: 'React is a JavaScript library, and so it assumes you have a basic understanding of the JavaScript language.',
      URL: 'https://facebook.github.io/react/tutorial/tutorial.html',
      icon: 'http://coenraets.org/present/react/img/react.png',
    },
    {
      user_id: 1,
      title: 'Angular Documentation',
      description: 'Angular is a JavaScript library, and so it assumes you have a basic understanding of the JavaScript language.',
      URL: 'https://docs.angularjs.org/api',
      icon: 'https://www.w3schools.com/angular/pic_angular.jpg',
    },
    {
      user_id: 1,
      title: 'React tutorial',
      description: 'React is a JavaScript library, and so it assumes you have a basic understanding of the JavaScript language.',
      URL: 'https://facebook.github.io/react/tutorial/tutorial.html',
      icon: 'http://coenraets.org/present/react/img/react.png',
    },
    {
      user_id: 1,
      title: 'Redux Course',
      description: 'Master the fundamentals of React and Redux with this tutorial as you develop apps supported by NPM, Webpack, and ES6',
      URL: 'https://www.udemy.com/react-redux/',
      icon: 'https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png',
    }
  ],
  users_events: [
    {
      user_id: 9,
      event_id: 1
    }
  ],
  categories: [
    {
      category: 'React',
      picture: 'http://coenraets.org/present/react/img/react.png'
    },
    {
      category: 'Angular',
      picture: 'https://www.w3schools.com/angular/pic_angular.jpg'
    },
    {
      category: 'Redux',
      picture: 'https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png'
    },
    {
      category: 'Node',
      picture: 'https://cdn2.iconfinder.com/data/icons/nodejs-1/512/nodejs-512.png'
    }
  ]
}
