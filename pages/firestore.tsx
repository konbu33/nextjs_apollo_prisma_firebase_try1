import Link from 'next/link'
import { firebase } from '../fireabase'

function fireStore() {

  const db = firebase.firestore()

  function fsDataGet() {
    console.log('fsDataGet click: ')

    db.collection('user').get()
      .then((querySnapshot) => {
        querySnapshot.forEach( (doc) => {
          console.log(`${doc.id} => ${JSON.stringify(doc.data())}`)
        })
      })
      .catch( error => {
        console.log('fsDataGet error: ', error)
      })
  }

  function fsDataAdd() {
    console.log('fsDataAdd click: ')

    const addData ={
      name: "kae",
      live: "chiba",
      age: 24,
    }

    db.collection('user').add(addData)
    .then( (docRef) => {
      console.log('Document written with id: ', docRef.id)
    })
    .catch( (error) => {
      console.error('Error Adding Document: ', error)
    })
  }

  return (
    <>
      <h1>FireStore</h1>
      <div><Link href="/"><a>Top</a></Link></div>
      <button onClick={fsDataAdd}>fsDataAdd</button>
      <button onClick={fsDataGet}>fsDataGet</button>
    </>
  )
}

export default fireStore
