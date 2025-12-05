import React from 'react'
import Navbar from './common/Navbar'
import BlogProfileImage from "../assets/Blog Website Design.jpg"
import CSS from "../assets/css-3.png"
import HTML from "../assets/html.png"
import JS from "../assets/js.png"
import REACTICON from "../assets/physics.png"
import NODE from "../assets/node-js.png"
import Tailwind from "../assets/tailwind.png"
import Express from "../assets/Express.png"
import Redux from "../assets/Redux.png"
import Mongo from "../assets/MongoDB.png"
import Firebase from "../assets/Firebase.png"
import Git from "../assets/Git.png"
import Vercel from "../assets/Vercel.png"
import Movie_app from "../assets/Movie_app.png"
import Nostra from "../assets/Nostra.png"
import Bulkmail from "../assets/Bulkmail.png"


import BlogImage from "../assets/blogImage.jpeg"
import { useNavigate } from 'react-router-dom';
import Footer from './common/Footer'

function Home() {
    const navigate = useNavigate()

    const techArsenal = [
        { name: "HTML", icon: HTML },
        { name: "CSS", icon: CSS },
        { name: "Tailwind", icon: Tailwind },
        { name: "JavaScript", icon: JS },
        { name: "React.js", icon: REACTICON },
        { name: "Node.js", icon: NODE },
        { name: "Express", icon: Express },
        { name: "Redux", icon: Redux },
        { name: "MongoDB", icon: Mongo },
        { name: "Git", icon: Git },
        { name: "Firebase", icon: Firebase },
        { name: "Vercel", icon: Vercel }
    ]

    const projects = [
        { p_name: "Bulkmail", p_img: Bulkmail, p_detail: "A full-stack tool that enables sending emails to multiple users at once using integrated frontend and backend logic..." },
        { p_name: "Movie App", p_img: Movie_app, p_detail: "A React-based movie discovery app using the TMDb API, featuring trending movies, genre filters, posters, and a personalised watchlist..." },
        { p_name: "Nostra", p_img: Nostra, p_detail: "A simple e-commerce site built with HTML, Tailwind CSS and JavaScript, featuring product search, filters, and styled product cards..." },

    ]

    return (
        <div>

            <div className='flex items-center justify-center mt-10'>
                <div className="w-full flex-col justify-center">
                    <h2 className='text-3xl md:text-6xl font-bold pb-2'>Hi! I Am</h2>
                    <h2 className='text-3xl md:text-5xl font-bold text-orange-400 py-2'>Dhivya Sri A</h2>
                    {/* <img src={BlogProfileImage} className='w-60 block md:hidden' alt="Blog Profile Image" /> */}
                    <p className='py-5 mb-4'> I am a dedicated Software Engineer specializing in full-stack application development. I enjoy crafting responsive web solutions using modern technologies like React, Tailwind CSS, Node.js, Express, and MongoDB continuously aiming to level-up my skills.
                    </p>
                    <a href='mailto:dhivya16112002@gmail.com' className='button-style my-2'>Contact Me</a>
                </div>
                {/* <div className='justify-center hidden md:block'>
                    <img src={BlogProfileImage} className='w-60 md:w-96 ' alt="Blog Profile Image" />

                </div> */}

            </div>


            <div>
                <div className='flex space-x-1  py-6 md:space-x-3 md:py-12 justify-center'>
                    <h2 className='text-3xl md:text-5xl font-bold'>Tech</h2>
                    <h2 className='text-3xl md:text-5xl font-bold text-orange-400'>Arsenal</h2>
                </div>

                <div className='grid  grid-cols-4 md:grid-cols-6 gap-5 p-3 md:p-6 w-full border border-orange-300 bg-gradient-to-br from-gray-300 rounded-md '>

                    {techArsenal.map((item, id) => {
                        return <div key={id} className='flex flex-col items-center p-2 hover:bg-gradient-to-r from-gray-300 to-orange-300 transition-transform duration-300 ease-in-out scale-110 hover:shadow-lg border rounded-lg'><img src={item.icon} className='w-8 md:14 py-3'></img><p className='text-xs md:text-sm font-medium' >{item.name}</p></div>
                    })}

                </div>
            </div>


            <div className='flex flex-col mt-16 items-center justify-around sm:flex-row'>
                <div className='flex-col'>
                    <div className='mt-4 border-[6px] rounded-lg border-orange-300 p-5 border-t-0 w-60 flex-col items-center'>
                        <div className='rounded-full border-2 p-5 font-bold text-white text-center bg-gradient-to-br from-yellow-100 to-orange-500'>6</div>
                        <p className='text-center font-medium'>Projects Completed</p>
                    </div>
                    <div className='mt-4 border-[6px] rounded-lg border-gray-500 p-5 border-t-0 w-60 flex-col items-center'>
                        <div className='rounded-full border-2 p-5 font-bold text-white text-center bg-gradient-to-br from-gray-100 to-gray-700'>6</div>

                        <p className='text-center font-medium'>Months of Experience</p>
                    </div>
                </div>

                <div className='ml-4 mt-4 sm:mt-0'>
                    <h2 className='text-3xl sm:text-7xl font-bold'>Design. Develop. </h2>
                    <h2 className='text-3xl sm:text-7xl font-bold text-orange-400'>Deliver.</h2>
                    <p className='my-6'>I have attached my resume here for your Reference</p>

                    <a className='button-style mt-2' href='/Resume/DhivyaSri_Resume.pdf' download={"DhivyaSri_Resume.pdf"}> Download CV</a>

                </div>


            </div>
            {/* Projects */}
            <div className='py-7'>
                <h2 className='text-center text-5xl my-14 font-bold'>Checkout My Live <span className='text-orange-400'>Projects</span> Here</h2>
                <div className='flex justify-around my-5 flex-col gap-4 sm:flex-row'>

                    {
                        projects.map((item, index) => {
                            return <div className='border border-black rounded-xl cursor-pointer p-4 shadow-md hover:shadow-xl transition duration-300 bg-white' key={index}>
                                <img src={item.p_img} className='border border-gray-300 rounded-md object-cover'></img>
                                <h2 className='text-2xl font-semibold my-2 '>{item.p_name}</h2>
                                <p>{item.p_detail}</p>
                            </div>
                        })
                    }

                </div>
            </div>


            <div className='flex items-center justify-center my-14'>
                <div className='justify-center hidden sm:block'>
                    <img src={BlogImage} className='w-60 md:w-96 border rounded-e-full ' alt="Blog Profile Image" />

                </div>
                <div className="w-full sm:w-1/2 flex-col justify-center ml-6">
                    <h2 className='text-4xl md:text-5xl font-bold pb-1 md:pb-2'>I like to write Blogs</h2>
                    <h2 className='text-3xl md:text-5xl font-bold text-orange-400 py-2'>where my thoughts meet!</h2>
                   

                    <p className='py-4'>You can know better about me by reading my blogs here. I share my expertise here.</p>
                    <button className='button-style mt-2' onClick={() => navigate("/blogs")}>Read My Blogs</button>
                </div>

            </div>

            <Footer />

        </div>
    )
}

export default Home