import { Form, Field } from 'react-final-form'
import Link from 'next/link'

function Username({name}) {
  return (
    <>
      <div>
        <Field
          name={name}
          render={ ( props ) => {
            console.log('username props: ', props)
            return (
              <>
                <label>{props.input.name}: </label>
                <input type="checkbox" placeholder={name} />
              </>
            )
          }}
        />
      </div>
    </>
  )
}

function Age({name}) {
  return (
    <>
      <div>
        <label>{name}: </label>
        <Field
          name={name}
          component="input"
          placeholder={name}
          type="checkbox"
        />
      </div>
    </>
  )
}

function Btn({name}) {
  return (
    <>
      <button>{name}</button>
    </>
  )
}

function userList() {
  return (
    <>
      <h1>UserList</h1> 
      <div><Link href="/"><a>Top</a></Link></div>
      <Form onSubmit={( props )=>{ console.log('props Form1: ', props)}} render={ (props)=> {
        // console.log("props Form2: ", props)
        // console.log("props Form3: ", props.handleSubmit())
        return (
          <>
            <form onSubmit={props.handleSubmit}>
              <Username name="username" />
              <Age name="age" />
              <Btn name="submit" />
            </form>
          </>
        )
      }}>
      </Form>
    </>
  )
}

export default userList

