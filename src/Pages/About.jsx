import Footer from "../Commons/Footer"
import Header from "../Commons/Header"
import Info from "./Resources/info/Info"
import Edu from "./Resources/info/Edu"
import Exp from "./Resources/info/Exp"
import TechEx from "./Resources/info/PastTechExp"

const About = () => {
  return (<>
            <Header />
            <Info />
            <Exp />
            <Edu />
            <Footer />
          </>
  )
}

export default About