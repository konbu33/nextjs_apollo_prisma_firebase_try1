import Link from 'next/link'
import { firebase } from '../fireabase'
import { Form, Field } from 'react-final-form'

function login() {

  function handleSubmit(e) {
    console.log('handleSubmit: ', e)
    const { email, password } = e

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then( (userCredential) => {
        const user = userCredential.user
        console.log('user: ', user)
      })
      .catch( (error) => {
        const { code, message } = error
        console.log('code: ', code)
        console.log('message: ', message)
      })
  }

  function singOut() {
    firebase.auth().signOut()
      .then( (res) => {
        console.log('SingOut Success', res)
      })
      .catch( (error) => {
        const { code, message } = error
        console.log('SingOut Error Code: ', code)
        console.log('SingOut Error Message: ', message)
      })
  }

  return (
    <>
      <h1>Login</h1>
      <div><Link href="/"><a>Top</a></Link></div>
      <Form
        onSubmit={ handleSubmit }
        render={
          ( {handleSubmit} ) => {
            return (
              <>
              <form onSubmit={ (e) => handleSubmit(e)}>
                <label>email: </label>
                <Field name="email" component="input" />
                <label>password: </label>
                <Field name="password" component="input" />
                <button>Login</button>
               </form>
               </>
            )
          }
        }
      >
      </Form>
      <div><button onClick={ singOut }>SignOut</button></div>
    </>
  )
}

export default login
