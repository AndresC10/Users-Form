import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUser from './components/FormUser'
import Response from './components/Response'
import UserCard from './components/UserCard'
import useCRUD from './hooks/useCRUD'

function App() {
  const [closeForm, setCloseForm] = useState(true)
  const { users, createNewUser, getAllUsers, deleteUserById, updateUserById, editSuccessfull, createSuccessfull, deleteSuccessfull, error, handleAlert } = useCRUD()
  const [updateInfo, setUpdateInfo] = useState()

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <div className="App">
      <div className={`alert-container ${editSuccessfull && 'edited'} ${createSuccessfull && 'created'} ${deleteSuccessfull && 'deleted'} ${error && 'error'}`}>
        <Response
          editSuccessfull={editSuccessfull}
          createSuccessfull={createSuccessfull}
          deleteSuccessfull={deleteSuccessfull}
          error={error}
          handleAlert={handleAlert}
        />
      </div>
      <header className='header-container'>
        <h1>Users</h1>
        <button onClick={() => setCloseForm(false)} className='app__btn'>Open Form</button>
      </header>
      <div className={`form-container ${closeForm && 'close__form'}`}>
        <FormUser
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          setUpdateInfo={setUpdateInfo}
          updateUserById={updateUserById}
          setCloseForm={setCloseForm}
        />
      </div>
      <div className='user-container'>

        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
              setCloseForm={setCloseForm}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
