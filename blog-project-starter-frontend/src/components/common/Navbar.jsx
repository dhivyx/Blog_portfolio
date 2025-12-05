import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import auth from '../../config/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'


function Navbar() {
  const navigate = useNavigate()
  const [loggedUser, setLoggedUser] = useState("")

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedUser(true)
        console.log("User logged in")
      }
      else {
        console.log("User logged out")
        setLoggedUser(false)
      }
    })
  }, [])

  function logOut() {
    signOut(auth)
      .then(() => {
        console.log("Logged out Successfully")
      })
      .catch((error) => {
        console.log("Error Logging out", error)
      })
  }


  return (
    <div className='py-5 flex justify-between items-center'>
      <h2 className='text-2xl font-bold'>Personal</h2>
      <div className='flex items-center'>
        <Link className="list-none px-5 py-2  text-gray-700 hover:text-orange-400 focus:text-orange-500  transition-all duration-300" to={"/"}>Home</Link>
        <Link className='list-none px-5 py-2 text-gray-700 hover:text-orange-400 focus:text-orange-500 transition-all duration-300' to={"/blogs"}>Blogs</Link>
        <Link className='list-none px-5 py-2 text-gray-700 hover:text-orange-400 focus-text-orange-500 transition-all duration-300'to={"/about"}>About</Link>
        {loggedUser ? <button className='button-style hidden md:block' onClick={logOut}> Logout </button> : <button className='button-style hidden md:block' onClick={() => navigate("/login")}> Login </button>}

      </div>
    </div>
  )
}

export default Navbar
