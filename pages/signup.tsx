import Link from 'next/link'
import { firebase } from  '../fireabase'
import { Form, Field } from 'react-final-form'

function signup() {


    function registorUser(e) {

    console.log('e: ', e)
    const email = e.email
    const password = e.password
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then( (userCredential) => {
        const user = userCredential.user
        console.log('user: ', user)
      })
      .catch( (e) => { 
        console.log('error: ', e.code, e.message )
      })
  }

  return (
    <>
      <h1>SignUp</h1>
      <Link href="/"><a>Top</a></Link>

      <Form
        onSubmit={ registorUser }
        render={ ( {handleSubmit} ) => {
          return (
            <form onSubmit={ (e) => handleSubmit(e) }>
              <label>email: </label>
              <Field name="email" component="input" />

              <label>password: </label>
              <Field name="password" component="input" />

              <button>registorUser</button>
            </form>
          )
        }}
      >
      </Form>
    </>
  )
}

export default signup
