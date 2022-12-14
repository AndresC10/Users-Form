import axios from 'axios'
import React, { useState } from 'react'

const useCRUD = () => {
    const [users, setUsers] = useState()
    const [editSuccessfull, setEditSuccessfull] = useState(false)
    const [createSuccessfull, setCreateSuccessfull] = useState(false)
    const [deleteSuccessfull, setDeleteSuccessfull] = useState(false)
    const [error, setError] = useState(false)

    const getAllUsers = () => {
        const URL = `https://users-crud.academlo.tech/users/`

        axios.get(URL)
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
    }

    const createNewUser = data => {
        const URL = `https://users-crud.academlo.tech/users/`

        axios.post(URL, data)
            .then(res => {
                getAllUsers()
                setCreateSuccessfull(true)
            })
            .catch(err => {
                console.log(err)
                setError(true)
            })
    }

    const deleteUserById = (id) => {
        const URL = `https://users-crud.academlo.tech/users/${id}/`
        axios.delete(URL)
            .then(() => {
                getAllUsers()
                setDeleteSuccessfull(true)
            })
            .catch(err => {
                console.log(err)
                setError(true)
            })
    }

    const updateUserById = (id, data) => {
        const URL = `https://users-crud.academlo.tech/users/${id}/`
        axios.patch(URL, data)
            .then(() => {
                getAllUsers()
                setEditSuccessfull(true)
            })
            .catch(err => {
                console.log(err)
                setError(true)
            })
    }

    const handleAlert = () => {
        setCreateSuccessfull(false)
        setDeleteSuccessfull(false)
        setEditSuccessfull(false)
        setError(false)
    }

    return { users, createNewUser, getAllUsers, deleteUserById, updateUserById, editSuccessfull, createSuccessfull, deleteSuccessfull, error, handleAlert }
}

export default useCRUD