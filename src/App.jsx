import './App.css'
import Card from './Card'

function App() {
  let myObj = {
    username : "hitesh",
    age : 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind text</h1>
    {/* <Card channel = "chaiaurcode" someObje = {myObj} /> */}
    <Card username = "1. Card" btnText = "ON" />
    <br />
    <br />
    <br />
    <br />
    <Card username = "2. Card" btnText = "OFF" />
    </>
  )
}

export default App
