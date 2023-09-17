import React , {useState} from 'react'
import axios from 'axios'

const SignUp = ()=>{
        const [email,setEmail] = useState('')
        const [password,setPassword] = useState('')

        const handleSubmit = async (e)=>{
            e.preventDefault()

            try {
                const response = await axios.post('http://localhost:4000/api/users',{
                    email,
                    password
                })
                console.log(response.data);
                setEmail('')
                setPassword('')
            } catch (error) {
                console.error(error)
            }
        };
        
        return (
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="text"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Register</button>
            </form>
  )
}

export default SignUp