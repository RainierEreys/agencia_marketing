import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layout/Layout"

function Cases(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                Casos
            </div>
            <Footer/>
        </Layout>
    )
}

export default Cases