import React from 'react';
import ReactDOM from 'react-dom';

let total = 0;

const Header = (props) => {
  return (
    <header>
      <h1>{props.course}</h1>
    </header>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <section>
      {
        props.parts.map(part => {
          return (<Part part={part} />)
        })
      }
    </section>
  )
}

const Footer = (props) => {
  props.parts.forEach(prop => {
    total += prop.exercises;
  })

  return (
    <footer>
      <p>
        Number of exercises {total}
      </p>
    </footer>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  return (
    <>
      <Header course={course.name} />

      <Content parts={course.parts} />

      <Footer parts={course.parts} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
