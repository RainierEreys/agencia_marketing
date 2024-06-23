import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layout/Layout"

function Home(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                Hola
            </div>
            <Footer/>
        </Layout>
    )
}

export default Home