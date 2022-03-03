const Header = (props) => {
  //console.log(props)
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  //console.log(props)
  return (
    <>
      <p>{props.part.name} {props.part.exercises}</p>
    </>
  )
}

const Total = (params) => {
  //console.log(params)
  return (
    <>
      <p>Number of exercises: {params.total}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course.name}/>
      <Content part={course.parts[0]} />
      <Content part={course.parts[1]} />
      <Content part={course.parts[2]} />
      <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

export default App