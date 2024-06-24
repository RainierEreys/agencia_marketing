import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layout/Layout"
import Header from "components/home/Header"
import Features from "components/home/Features"

function Home(){
    return(
        <Layout>
            <Navbar/>
                <div className="">
                    <Header/>
                    <Features/>
                </div>
            <Footer/>
        </Layout>
    )
}

export default Home