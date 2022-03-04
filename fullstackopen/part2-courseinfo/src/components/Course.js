import React from "react"

const Header = ({name}) => <h1>{name}</h1>

const Parts = ({part}) => <p>{part.name} {part.exercises}</p>

const Sum = ({sum}) => <strong>Total of {sum} exersices</strong>

const Course = ({course}) => {
  const sum = course.parts.reduce((p,c) => p+c.exercises,0)
  return(
    <>
      <Header name={course.name} />
      <div>
        {course.parts.map(part => 
          <Parts key={part.id} part={part} />
        )}
      </div>
      <Sum sum={sum}/>
    </>
  )
}

export default Course