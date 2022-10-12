import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const {createUser} = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await createUser(email, password)
            navigate('/account')
        } catch (e) {
            console.log("Password: " + password + " / Email: " + email)
            setError(e.message)
            console.log(e.message)
        }
    }

    return (
        <div className='max-w-[700px] mx-auto my-16 p-4'>
            <div>
                <h1 className='text-2xl font-bold py-2'>
                    Erstelle dir einen Account
                </h1>
                <p className='py-2'>
                    Du hast bereits einen Account? <Link to='/' className='underline'>Hier</Link> einloggen.
                </p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col py-2'>
                    <label className='py-2 font-medium'>Email</label>
                    <input  onChange={(e) => setEmail(e.target.value)} type='email' className='border p-3'></input>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='py-2 font-medium'>Passwort</label>
                    <input onChange={(e) => setPassword(e.target.value)} type='password' className='border p-3'></input>
                </div>
                <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>
                    Registrieren
                </button>
            </form>
        </div>
    )
}

export default Signup
