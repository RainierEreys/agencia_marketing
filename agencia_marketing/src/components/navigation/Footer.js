import { connect } from "react-redux"
import logo from "assets/img/logo-small.svg"

const navigation = {
    visitUs: [
        {name: "client@fireart.studio", href: "#"},
    ],
    callUs: [
        {country: "Poland", name: "+48 (22) 208 61 11", href: "#"},
        {country: "United State", name: "+1 (415) 877 16 12", href: "#"},
        {country: "United Kingdom", name: "+44 (033) 33034645", href: "#"},
    ],
    company: [
        {name: "Cases", href: "/cases"},
        {name: "Services", href: "/services"},
        {name: "About Us", href: "/about-us"},
        {name: "Blog", href: "/blog"},
        {name: "Careers", href: "/careers"},
        {name: "Contact Us", href: "/contact"},
    ],
    details: [
        {name: "marketing", href: "#"},
        {name: "marketing", href: "#"},
        {name: "marketing", href: "#"},
        {name: "marketing", href: "#"},
    ],
    follow: [
        {name: "Dribbble", href: "#"},
        {name: "Behance", href: "#"},
        {name: "Instagram", href: "#"},
        {name: "Linkedin", href: "#"},
        {name: "Facebook", href: "#"},
        {name: "Twitter", href: "#"},
        {name: "Medium", href: "#"},
    ],
}

function Footer() {
    return (
        <footer>
            <div className="bg-gray-50">
                <div className="max-w-screen-xl  sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-6 xl:grid-cols-6 mx-auto">
                    <div className="w-auto py-5">
                        <img src={logo} />
                    </div>
                    <div className="py-5">
                        <div>
                            <h3 className="text-base font-medium text-gray-900">Visit Us</h3>
                            <p className="text-gray-500 mt-5">Warsaw</p>
                            <p className="text-gray-500">ul.Marynarska 21, 02-674</p>
                            <ul role="list" className="mt-4 space-y-4">
                                {navigation.visitUs.map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="p-5">
                        <div>
                            <h3 className="text-base font-medium text-gray-900">Call Us</h3>
                            <ul role="list" className="mt-5 space-y-2">
                                {navigation.callUs.map((item) => (
                                    <li key={item.name}>
                                        <span className="text-gray-500">{item.country}</span><br/>
                                        <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                    </div>
                    <div className="p-5">
                    <div>
                            <h3 className="text-base font-medium text-gray-900">Company</h3>
                            <ul role="list" className="mt-5 space-y-2">
                                {navigation.company.map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="p-5">
                    <div>
                            <h3 className="text-base font-medium text-gray-900">Details</h3>
                            <ul role="list" className="mt-5 space-y-4">
                                {navigation.details.map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="p-5">
                    <div>
                            <h3 className="text-base font-medium text-gray-900">Follow Us</h3>
                            <ul role="list" className="mt-4 space-y-2">
                                {navigation.follow.map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 pt-2">
                <div className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
      max-w-screen-lg items-center">
                    <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                        <a href="" className="w-6 mx-1">
                            
                        </a>
                        <a href="" className="w-6 mx-1">
                            
                        </a>
                        <a href="" className="w-6 mx-1">
                            
                        </a>
                        <a href="" className="w-6 mx-1">
                            
                        </a>
                        <a href="" className="w-6 mx-1">
                            
                        </a>
                    </div>
                    <div className="my-5">© Copyright 2020. All Rights Reserved.</div>
                </div>
            </div>

        </footer>
    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {

})(Footer)