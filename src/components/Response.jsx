import React from 'react'
import './styles/response.css'

const Response = ({ editSuccessfull, createSuccessfull, deleteSuccessfull, error, handleAlert }) => {
  return (
    <>
      {
        error ?
          <div className={`alert ${error && 'error'}`}>
            <span className='response__span' onClick={() => handleAlert()}>x</span>
            <p className='alert__p'><span className='alert__span'><i className="fa-sharp fa-solid fa-xmark"></i></span>An error has occurred, please verify that you filled everything correctly.</p>
          </div> :
          <div className='alert'>
            <span className='response__span' onClick={() => handleAlert()}>x</span>
            <p className='alert__p'><span className='alert__span'><i className="fa-solid fa-check"></i></span>The user was {editSuccessfull && 'edited'}{createSuccessfull && 'created'}{deleteSuccessfull && 'deleted'} successfully</p>
          </div>
      }
    </>
  )
}

export default Response