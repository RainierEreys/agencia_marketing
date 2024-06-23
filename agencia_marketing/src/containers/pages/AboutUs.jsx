import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layout/Layout"

function AboutUs(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                AboutUs
            </div>
            <Footer/>
        </Layout>
    )
}

export default AboutUs