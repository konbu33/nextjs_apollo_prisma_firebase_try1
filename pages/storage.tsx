import Link from 'next/link'
import { firebase } from '../fireabase'

function storage() {

  const fbStorage = firebase.storage()
  const fbStorageRef = fbStorage.ref()

  function fileUp() {
    console.log('fileUp: ' )
    const fbStFileRef = fbStorageRef.child('yama1.jpeg')

    const upImg = '/Users/stai/Downloads/yama1.jpeg'
  }

  function fileUp2(e) {
    console.log('fileUp: ', e)

    const yama1Ref = fbStorageRef.child('yama1.jpeg')
    const uploadTask = yama1Ref.put(e.target.value)
    uploadTask.on(
      'state: changed',
      (snapshot) => {
        console.log('snapshot: ', snapshot)
      },
      (error) => {
        console.log('error: ', error)
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then( function(downloadURL) {
          console.log('file available at: ', downloadURL)
        })
      }
    )


  }

  return (
    <>)
      <h1>Storage</h1>
      <div><Link href="/"><a>Top</a></Link></div>
      <input type="file" onChange={ (e) => fileUp2(e) }/>
      <div><button onClick={fileUp}>FileUpload</button></div>
    </>
  )
}

export default storage
