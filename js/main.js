import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "Work Example",
    'href': "https://example.com",
    'desc': "Lorem ipsum dolor sit",
    'image': {
      'desc': "example screenshot of a project involving code",
      'src': "images/example1.png",
      'comment': ""
    }
  },
  {
    'title': "Tools of the Portfolio",
    'href': "https://example.com",
    'desc': "Workflow",
    'image': {
      'desc': "A Serverless Portfolio",
      'src': "images/port-arch.png",
      'comment': ""
    }
  },
  {
    'title': "Passion and Creativity",
    'href': "https://example.com",
    'desc': "Lorem ipsum dolor sit amet, consectetur",
    'image': {
      'desc': "Snowboarding and youtube",
      'src': "images/example3.png",
      'comment': ""
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
