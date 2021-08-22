import Link from 'next/link'
import { useQuery, useMutation, gql } from '@apollo/client'
import { Form, Field } from 'react-final-form'

const MQUERY = gql`
  mutation($id: ID, $title: String) {
    todo(id: $id, title: $title) {
      id: id
      title: title
    }
  }
`

const QUERY = gql `
  query {
    todoList {
      id
      title
      createdAt
      updatedAt
    }
  }
`


function todo() {
  const [ createTodo, status] = useMutation(MQUERY)
  // console.log('status1: ', status)

  const todoList = useQuery(QUERY)
  // console.log('todoList: ', todoList)

  const myField = (id) => {
    // console.log('props : ', id)
    return (
      <>
        <label>{id}: </label>
        <Field
          name={id}
          component="input"
        />
      </>
    )
  }

  async function handleSubmit(e) {

    const variables = {
      variables: {
        id: e.id,
        title: e.title
      }
    }

    console.log('variables: ', variables)
    const result = await createTodo(variables)
    console.log('result createTodo: ', result)
  }

  const myForm = () => {
    return (
      <>
        <Form
          onSubmit={ handleSubmit }
          render={ ( {handleSubmit} ) => {
            return (
              <>
                <form onSubmit={handleSubmit}>
                  { myField("id") }
                  { myField("title") }
                  <button>onSubmit</button>
                </form>
              </>
            )
          }}
        />
      </>
    )
  }

  async function handleOnClick() {
    const variables = {
      variables: {
        id: 11,
        title: 'task11'
      }
    }

    const result = await createTodo(variables)
    // console.log('result createTodo: ', result)
  }

  return (
    <>
      <h1>Todo</h1>
      <div><Link href="/" ><a>Top</a></Link></div>
      <button onClick={ handleOnClick }>createTodo</button>
      { myForm() }
      {/* <pre>{JSON.stringify(todoList.data, null, '\t')}</pre> */}
      { console.log(todoList.data) }
    </>
  )
}

export default todo
