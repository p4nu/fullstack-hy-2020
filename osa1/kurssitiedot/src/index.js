import React from 'react';
import ReactDOM from 'react-dom';

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
      <Part part={props.part1} />

      <Part part={props.part2} />

      <Part part={props.part3} />
    </section>
  )
}

const Footer = (props) => {
  return (
    <footer>
      <p>
        Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </footer>
  )
}

const App = () => {
  const course = 'Half Stack application development';

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  };
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  };
  const part3 = {
    name: 'State of a component',
    exercises: 14,
  };

  return (
    <>
      <Header course={course} />

      <Content part1={part1}
               part2={part2}
               part3={part3}
      />

      <Footer exercises1={part1.exercises}
              exercises2={part2.exercises}
              exercises3={part3.exercises}
      />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
