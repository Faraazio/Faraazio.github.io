import './landing.css'
import Faraaz from '../../../assets/Images/Faraaz.jpeg'
import github from "../../../assets/Github.svg"
import linkedin from "../../../assets/Linkedin.svg"
import gmail from "../../../assets/Gmail.svg"
import cv from "../../../assets/CV.svg"

const Landing = () => {
  return (
    <>
      <div className="jumbotron" style={{ backgroundColor: '#F7F7F2' }}>
        <div className="container ">
          <h1 className="display-3 d-flex justify-content-center"><img src={Faraaz} className="display-pics" alt="Faraaz Shah" /></h1>
          <div className='d-flex justify-content-center'>
            <h1 className="display-3 d-flex justify-content-center px-2" style={{color: "#39392D"}}>Faraaz</h1>
            <h1 className="display-3 d-flex justify-content-center px-1" style={{color: "#39392D"}}>Shah</h1>
          </div>
          <h4 className='text-center' style={{ color: '#39392D' }}><i>"It is what we know already that often prevents us from learning."</i></h4>

          <div className="col-md-12 d-flex justify-content-end align-items-bottom">
              <a className='px-2 text-right' href="mailto:sfaraazio@gmail.com"><img width="20" height="20" src={gmail} className="logo" alt="mail" style={{verticalAlign: 'middle', marginTop: "5px"}}/></a>
              <a className='px-2 text-right' href="https://www.linkedin.com/in/faraazjshah/"><img width="20" height="20" src={linkedin} className="logo" alt="linkedin" /></a>
              <a className='px-2 text-right' href="https://github.com/Faraazio"><img width="20" height="20" src={github} className="logo" alt="github" /></a>
              <a
                className="px-2 text-right"
                href="/CV_PDF.pdf"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img width="20" height="20" src={cv} className="logo" alt="Resume" />
              </a>
          </div>
          
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7" style={{textAlign:"justify"}}>
            <h6>
  <b>
    Faraaz Shah is a Computer Engineering student at the University of Illinois
    Urbana-Champaign focused on digital hardware design and FPGA prototyping.
  </b>
</h6>
<h6>
  <b>
    He builds hardware friendly, low latency systems in SystemVerilog and embedded C, with hands on experience in Vivado and Quartus.
  </b>
</h6>
<h6>
  <b>
    He is interested in real time signal processing, secure systems, and
    hardware acceleration for streaming inference workloads.
  </b>
</h6>

<h6>
  <br />
  Hello World!
</h6>

<p>
  I'm Faraaz, based in Naperville, IL. I am pursuing a BS in Computer
  Engineering at the University of Illinois Urbana-Champaign, expected May
  2027, with a 3.80 GPA. You can reach me at my{" "}
  <a href="mailto:sfaraazio@gmail.com" style={{ color: "#557E25" }}>
    email
  </a>
  , and view my work on{" "}
  <a href="https://faraazio.github.io" style={{ color: "#557E25" }}>
    faraazio.github.io
  </a>
  .
</p>

<p>
  My core technical strengths include SystemVerilog, C and C++, Python, Git,
  Vivado, Quartus II, XDC constraints, and embedded workflows. I also work with
  PyTorch for ML prototyping, KiCad for hardware projects, and MCUXpresso for
  firmware development.
</p>

<p>
  Recent projects include a 16-bit SLC-3.2 CPU on the Urbana FPGA board with a
  multi cycle FSM controller and BRAM interface, plus a real time voice
  modulation pipeline that processes I2S audio at 48 kHz and 100 MHz timing,
  including filtering and bus transfer logic. I am also building a streaming
  insider risk scoring pipeline on the CERT sparse needle dataset with Dynamic
  Bayesian Network likelihoods and a game theoretic equilibrium layer, with a
  plan for fixed point friendly FPGA acceleration targets.
</p>

<p>
  Outside of coursework, I worked on firmware for Illini Solar Car, including
  repairing legacy code and improving device communication over CAN on target
  boards.
</p>

            <p><b>Resources:</b><br></br>
               <a
                    
                    href="/CV_PDF.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{color:"#557E25"}}
                    >Curriculum Vitae</a><br></br>
               <a href="https://github.com/Faraazio" style={{color:"#557E25"}}>Github</a><br></br>
            </p>


          </div>
        </div>
      </div>
    </>
  )
}

export default Landing