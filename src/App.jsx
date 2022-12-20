
import emailjs  from '@emailjs/browser'
import './App.css'

function App() {

  const handlesubmit = e => {
    e.preventDefault()
    console.log("Send Data")

    const YOUR_PUBLIC_KEY = import.meta.env.VITE_YOUR_PUBLIC_KEY
    const YOUR_SERVICE_ID = import.meta.env.VITE_YOUR_SERVICE_ID
    const YOUR_TEMPLATE_ID = import.meta.env.VITE_YOUR_TEMPLATE_ID

    emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, e.target, YOUR_PUBLIC_KEY)
      .then((res) => {
          console.log(res.text);
      }, (err) => {
          console.log(err.text);
      });
  }

  return (
    <div className="App">
      <h1>Test EmailJS</h1>
      <form onSubmit={handlesubmit}>
        <div>
          <label htmlFor="name">Your name: </label>
          <input type="text" name='name' />
        </div>
        <div>
          <label htmlFor="message">Message: </label>
          <textarea name="message" id="" cols="30" rows="10"></textarea>
        </div>
        <button>Send</button>
      </form>
    </div>
  )
}

export default App
