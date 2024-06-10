import { Route, Routes } from 'react-router-dom'
import UserList from './features/Users/UserList'
import AddUser from './features/Users/AddUser'


function App() {

  return (
  <div className='container mx-auto px-2 max-w-5xl pt-10 md:pt-32'>
    <h1 className='text-center text-gray-700 text-2xl font-bold'>CRUD with redux toolkit</h1>
    <Routes>
      <Route path='/' element={<UserList/>}/>
      <Route path='/add-user' element={<AddUser/>}/>
    </Routes>
  
  </div>
  )
}

export default App
