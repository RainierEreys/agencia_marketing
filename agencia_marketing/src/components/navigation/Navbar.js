import { connect } from "react-redux"
import {NavLink, Link} from "react-router-dom"
import logo from "assets/img/logo-small.svg"
import load from "assets/img/load.gif"


function Navbar() {
    return (
        <nav className="w-full py-4 shadow">
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

                            <NavLink to="/cases" className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-orange-300 hover:text-white">Cases</NavLink>
                            <NavLink to="/services" className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-orange-300 hover:text-white">Services</NavLink>
                            <NavLink to="/careers" className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-orange-300 hover:text-white">Careers</NavLink>
                            <NavLink to="/blog"  className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-orange-300 hover:text-white">Blog</NavLink>
                            <NavLink to="/about-us"  className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-orange-300 hover:text-white">About Us</NavLink>
                            <NavLink to="/contact"  className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-orange-300 hover:text-white">Contact</NavLink>
                        </div>
                        <div className="relative ml-3 inline-flex">
                            <div>
                                <button type="button" className="relative flex p-3 align-middle text-white rounded-md bg-orange-600 text-sm hover:bg-orange-700 transition hover:duration-300 hover:ease-in-out" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    Hire Us
                                    <img src={load} className="h-2 w-7 mt-1.5 ml-2"/>
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