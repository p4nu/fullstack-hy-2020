import React from 'react';
import ReactDOM from 'react-dom';
import Course from './components/Course';

const App = () => {
  const courses = [
    {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {
          id: 1,
          name: 'Fundamentals of React',
          exercises: 10,
        },
        {
          id: 2,
          name: 'Using props to pass data',
          exercises: 7,
        },
        {
          id: 3,
          name: 'State of a component',
          exercises: 14,
        },
        {
          id: 4,
          name: 'TypeScript',
          exercises: 16,
        },
      ],
    },
    {
      id: 2,
      name: 'Node.js',
      parts: [
        {
          id: 1,
          name: 'Routing',
          exercises: 3,
        },
        {
          id: 2,
          name: 'Middlewares',
          exercises: 7,
        },
      ],
    },
    {
      id: 3,
      name: 'New course',
      parts: [
        {
          id: 1,
          name: 'part1',
          exercises: 10,
        },
        {
          id: 2,
          name: 'part2',
          exercises: 23,
        },
        {
          id: 3,
          name: 'part3',
          exercises: 30,
        },
      ],
    },
  ];

  return (
    <>
      <h1>Web development curriculum</h1>

      {courses.map(course => {
        return (
          <Course key={course.id} course={course}/>
        )
      })}
    </>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));
