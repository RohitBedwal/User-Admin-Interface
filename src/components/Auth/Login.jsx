import React, { useState } from 'react'

const Login = ({loginHandler}) => {
    // console.log(loginHandler)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const sumbitHandler = (e) => {
        e.preventDefault()
        loginHandler(email,password)
        setEmail("")
        setPassword("")

    }
    return (

        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 p-24 rounded-lg border-green-500'>
                <form
                    onSubmit={(e) => { sumbitHandler(e) }}
                    className='flex flex-col items-center justify-center gap-y-4'>
                    <input required
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        className='bg-zinc-900 p-3 border-2 border-green-400 rounded-lg text-2xl text-center ' type="email" placeholder='Enter your Email' />
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required className='bg-zinc-900 p-3 border-2 border-green-400 rounded-lg text-2xl text-center' type="password" placeholder='Enter your Password' />
                    <button className=' px-10 w-64 py-3 bg-green-700 border-2 border-green-600 rounded-3xl text-xl text-center mt-5 '>Login</button>
                </form>

            </div>

        </div>


    )
}

export default Login