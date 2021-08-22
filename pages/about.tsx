import Link from 'next/link'
import { useMutation, gql } from '@apollo/client'
import { firebase } from '../fireabase'

function about() {



  let isSignIned
  firebase.auth().onAuthStateChanged( (user) => {
    if (user) {
      console.log('SignIned: ', user)
      isSignIned = true
    } else {
      console.log('Not SignIn: ')
      isSignIned = false
    }
  })

  console.log('isSignIned: ', isSignIned)
  return (
    <>
      <div>about</div>
      <Link href="/"><a>top</a></Link>
      { isSignIned ? <div>SignIned</div>: <div><div>Not SignIned</div><div><Link href="/login"><a>Login</a></Link></div></div> }
    </>
  )


}

export default about
