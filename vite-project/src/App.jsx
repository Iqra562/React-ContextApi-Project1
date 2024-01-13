import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>

      <Login/>
      <Profile/>
      </UserContextProvider>
  )
  // const [user,setUser]   = useState(null);
  // return (
  //   <UserContext.Provider value={{user,setUser}}> 

  //     <Login/>
  //     <Profile/>
  //     </UserContext.Provider>
  // )
}

export default App
