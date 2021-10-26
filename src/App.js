import './App.css';
import {useState} from 'react'
// import CountButton from './components/CountButton';
// import CountResult from './components/CountResult';
// import DecreaseButton from './components/DecreaseButton';

// function App() {
//     const [count, setCount] = useState(0)
    
//     const increase = () =>{  
//       setCount (count+1)
//     }

//     const decrease = () => {
//       setCount(count-1)
//     }

//     return (
//     <div className="App">
//       <h1> Demo useState </h1>
//       <CountButton handleCount={increase}/>
//       <CountResult count={count}/>
//       <DecreaseButton handleCount={decrease}/>
//     </div>
//   );
// }

function App1 (){
  // const [count, setCount] = useState(0)

  // return(
    // <div className="App">
    //   <h1> Exercise 3 </h1>
    //   <CountButton count={count} setCount={setCount} value={-1}/>
    //   <CountButton count={count} setCount={setCount} value={-10}/>
    //   <CountResult count={count}/> 
    //   <CountButton count={count} setCount={setCount} value={+1}/>
    //   <CountButton count={count} setCount={setCount} value={+10}/>
    // </div>

  // )

//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const handleSubmit = (event) =>{
//     event.preventDefault()
//     const data = {email, password}
//     console.log("data form", data)
//   }
//   const handleEmail = (event) => {
//     setEmail(event.target.value)
//   }
//   const handlePassword = (event) => {
//     setPassword(event.target.value)
//   }
//   return (
//     <div className="App" >
//       <div style={{marginTop: "5rem", fontSize: "30px"}}>
//       <form onSubmit = {handleSubmit}>
//         <label for="email"> Email: </label>
//         <input type="text" id="email" onChange={handleEmail}/>
//         <br/>

//         <label for="password"> Password: </label>
//         <input type="password" id="password" onChange ={handlePassword}/>
//         <br/>

//         <button type="submit" value="Submit">
//           Submit
//         </button>
//       </form>
//     </div>
//   </div>
//   );
// }

//Exercise 4
const [dataForm, setDataForm] = useState({
  name:"", 
  email:"", 
  phone:"", 
  password:"",
  confirmPassword:""
})

const {name, email, phoneNumber, password, confirmPassword} = dataForm

const handleSubmit = (event) => {
  event.preventDefault()
  console.log("dataForm", dataForm)
}

const handleOnChange = (event) => {
  console.log("id: ", event.target.id)
  setDataForm({...dataForm, [event.target.id]: event.target.value})
}

return (
  <div className="App">
    <form onSubmit = {handleSubmit}>

      <label for="name"> Name: </label>
      <input type="text" id="name" onChange={handleOnChange} value={name} name="name"/>
      <br/>

      <label for="email"> Email: </label>
      <input type="email" id="email" onChange={handleOnChange} value={email} name="email"/>
      <br/>

      <label for="phoneNumber"> Phone number: </label>
      <input type="tel" id="phone" onChange={handleOnChange} value={phoneNumber} name="phone"/>
      <br/>

      <label for="password"> Password: </label>
      <input type="password" id="password" onChange={handleOnChange} value={password} name="password"/>
      <br/>

      <label for="confirmPassword"> Confirm password: </label>
      <input type="password" id="confirmPassword" onChange={handleOnChange} value={confirmPassword} name="confirmPassword"/>
      <br/>

      <button type="submit" value="Submit">Submit</button>

    </form>
  </div>
)
}

// export default App;
export default App1
