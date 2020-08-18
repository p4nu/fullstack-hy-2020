import React from 'react';
import ReactDOM from 'react-dom';

let total = 0;

const Header = ({course}) => {
  return (
    <header>
      <h1>{course}</h1>
    </header>
  )
}

const Part = ({part}) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = ({parts}) => {
  return (
    <section>
      <Part part={parts[0]} />

      <Part part={parts[1]} />

      <Part part={parts[2]} />

      <Part part={parts[3]} />
    </section>
  )
}

const NumberOfExercises = ({parts}) => {
  parts.forEach(part => {
    total += part.exercises;
  })

  return (
    <p>
      Number of exercises {total}
    </p>
  )
}

const Course = ({course}) => {
  return(
    <>
      <Header course={course.name} />

      <Content parts={course.parts} />

      <NumberOfExercises parts={course.parts} />
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
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
  };

  return (
    <>
      <Course course={course} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
