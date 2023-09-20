import React , {useState} from 'react'
import axios from 'axios'
import '../index.css'
import { useNavigate } from 'react-router-dom'

const SignUp = ()=>{
        const [email,setEmail] = useState('')
        const [password,setPassword] = useState('')
        const [firstname,setFirstname] = useState('')
        const [lastname,setLastname] = useState('')
        const navigate = useNavigate()
        const handleSubmit = async (e)=>{
            e.preventDefault()

            try {
                const response = await axios.post('http://localhost:4000/api/users',{   
                    firstname,
                    lastname,
                    email,
                    password
                })
                console.log(response.data);
                setEmail('')
                setPassword('')
                navigate('/register')
            } catch (error) {
                console.error(error)
            }
        };
        
        return (
            <section className="bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                          Create your account
                      </h1>
                      <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                                <div>
                                    <label for="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                                    <input type="text" name="firstname" id="firstname" value={firstname} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ex. John" required=""
                                        onChange={(e) => setFirstname(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label for="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                                    <input type="text" name="firstname" id="firstname" value={lastname} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ex. Doe" required=""
                                        onChange={(e) => setLastname(e.target.value)}
                                    />
                                </div>
                          <div>
                              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                              <input type="email" name="email" id="email" value={email} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" 
                                onChange={(e)=> setEmail(e.target.value)}
                              />
                          </div>
                          <div>
                              <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                              <input type="password" name="password" id="password"
                              value={password} placeholder="••••••••" 
                               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                                onChange={(e) => setPassword(e.target.value)} />
                          </div>
                                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create Account</button>
                          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                              Already have Account ? <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</a>
                          </p>
                      </form>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default SignUp