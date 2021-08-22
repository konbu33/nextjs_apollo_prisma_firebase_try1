import Link from 'next/link'
import { useQuery, gql } from '@apollo/client'

const getTodo = gql`
  query getTodo ($id: ID, $title: String) {
    todo (title: $title) {
      id
      title
    }
    todoid (id: $id) {
      id
      title
      createdAt
      updatedAt
    }
  }
` 
const variables = { 
  variables: { 
    id : 2, 
    title: "task1.update"
  }
}

export default function Home() {
  // const { data, loading, error } = useQuery(getTodo, variables )

  // if (loading) {
  //   return <h2>loading...</h2>
  // }

  // if (error) {
  //   return <div>error: {error}</div>
  // }

  // console.log('top data: ', data)
  return (
    <>
      <div>Top</div>
      <div><Link href="/about"><a>about</a></Link></div>
      <div><Link href="/member"><a>member</a></Link></div>
      <div><Link href="/userList"><a>UserLIst</a></Link></div>
      <div><Link href="/progress"><a>Progress</a></Link></div>
      <div><Link href="/todo"><a>Todo</a></Link></div>
      <div><Link href="/signup"><a>SignUp</a></Link></div>
      <div><Link href="/login"><a>Login</a></Link></div>
      <div><Link href="/firestore"><a>FireStore</a></Link></div>
      <div><Link href="/storage"><a>Storage</a></Link></div>


      {/* <pre>{JSON.stringify(data, null, "\t")}</pre> */}
      {/* <ul>
        {
          data.todo.map( (d, index) => {
            return (
              <li key={index}>{JSON.stringify(d)}</li>
            )
          })
        }
      </ul>

      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>createdAt</th>
            <th>updatedAt</th>
          </tr>
        </thead>
        <tbody>
          {
            data.todo.map( (d, i) => {
              return (
                <tr key={i}>
                  <td>{d.id}</td>
                  <td>{d.title}</td>
                  <td>{d.createdAt}</td>
                  <td>{d.updatedAt}</td>
                </tr>
              )
            })
          } 
        </tbody>
      </table> */}
    </> 
  )
}
