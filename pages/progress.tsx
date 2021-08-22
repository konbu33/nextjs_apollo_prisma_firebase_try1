import { Form, Field } from 'react-final-form'
import Link from 'next/link'

function myContent() {
  return (
    <>
      <label>Content</label>
      <Field 
        name="content"
        component="textarea"
        placeholder="please input content"
      />
    </>
  )
}

function myBtn() {
  return (
    <>
      <div>
        <button>Submit</button>
      </div>
    </>
  )
}

function myForm() {

  return (
    <>
      <Form
        onSubmit={ () => console.log( "onSubmit: ")}
        render={ ( { form , handleSubmit} ) => {
          return(
            <>
              <form onSubmit={handleSubmit} >
                { myContent() }
                { myBtn() }
              </form>
            </>
          )
        }}
      >

      </Form>
    </>
  )
}



function Progress() {
  return (
    <>
      <h1>Progress</h1>
      <div><Link href="/" ><a>Top</a></Link></div>
      { myForm() }
    </>
  )
}

export default Progress
