import { connect } from "react-redux"
import { useState } from "react"
import {NavLink, Link} from "react-router-dom"
import logo from "assets/img/logo-small.svg"
import load from "assets/img/load.gif"
import DotLoader from "react-spinners/DotLoader"

function Navbar() {

    const [loading, setLoading]=useState(true);

    window.onscroll = function(){scrollFunction()}

    function scrollFunction(){
        if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
            document.getElementById('navbar').classList.add('shadow-navbar');
            document.getElementById('navbar').classList.add('bg-white');
        }else{
            document.getElementById('navbar').classList.remove('shadow-navbar');
            document.getElementById('navbar').classList.remove('bg-white');
        }
    }

    return (
        <nav id="navbar" className="w-full py-4 transition duration-300 ease z-40 fixed ">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">

                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <Link to="/">
                                <img className="" src={logo} alt="Company" width={50} height={50} />
                            </Link>
                            
                        </div>
                        <div className="hidden sm:ml-6 sm:block">

                        </div>
                    </div>
                    <div className=" flex items-center pr-2 ">
                        <div className="flex space-x-4 ">

                            <NavLink to="/cases" className=" px-3 py-2 text-sm font-medium text-black border-b-2 border-transparent hover:border-orange-600 transition duration-300 ease-in-out">Cases</NavLink>
                            <NavLink to="/services" className="px-3 py-2 text-sm font-medium text-black border-transparent border-b-2 hover:border-orange-600 transition duration-300 ease-in-out">Services</NavLink>
                            <NavLink to="/careers" className="px-3 py-2 text-sm font-medium text-black border-transparent border-b-2 hover:border-orange-600 transition duration-300 ease-in-out">Careers</NavLink>
                            <NavLink to="/blog"  className="px-3 py-2 text-sm font-medium text-black border-transparent border-b-2 hover:border-orange-600 transition duration-300 ease-in-out">Blog</NavLink>
                            <NavLink to="/about-us"  className="px-3 py-2 text-sm font-medium text-black border-transparent border-b-2 hover:border-orange-600 transition duration-300 ease-in-out">About Us</NavLink>
                            <NavLink to="/contact"  className="px-3 py-2 text-sm font-medium text-black border-transparent border-b-2 hover:border-orange-600 transition duration-300 ease-in-out">Contact</NavLink>
                        </div>
                        <div className="relative ml-3 inline-flex">
                            <div>
                                <button type="button" className="relative flex p-3 align-middle text-white rounded-md bg-orange-600 text-sm hover:bg-orange-700 transition hover:duration-300 hover:ease-in-out" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    Hire Us
                                    <DotLoader className="mx-2" loading={loading} aria-label="Loading Spinner" size={15} color="#ffffff"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </nav>
    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {

})(Navbar)