import './App.css'
import Login from './components/Login'

function App() {
for(let i =0;i<5; i++){
setTimeout(function(){console.log(i)},i*100)
}
  return (
    
 <Login/>

    
  )
}

export default App
