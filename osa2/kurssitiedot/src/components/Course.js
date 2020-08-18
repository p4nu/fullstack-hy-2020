import React from 'react';

const Heading = ({course}) => {
  return (
    <h2>{course}</h2>
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
      {parts.map(part => {
        return (
          <Part key={part.id} part={part}/>
        )
      })}
    </section>
  )
}

const NumberOfExercises = ({parts}) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <p><strong>
      Total of {total} exercises
    </strong></p>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Heading course={course.name}/>

      <Content parts={course.parts}/>

      <NumberOfExercises parts={course.parts}/>
    </div>
  )
}

export default Course;
