import './landing.css'
import Sujot from '../../../assets/Images/Sujot.jpg'
import github from "../../../assets/Github.svg"
import linkedin from "../../../assets/Linkedin.svg"
import gmail from "../../../assets/Gmail.svg"
import cv from "../../../assets/CV.svg"

const Landing = () => {
  return (
    <>
      <div className="jumbotron" style={{ backgroundColor: '#F7F7F2' }}>
        <div className="container ">
          <h1 className="display-3 d-flex justify-content-center"><img src={Sujot} className="display-pics" alt="Sujot Singh" /></h1>
          <div className='d-flex justify-content-center'>
            <h1 className="display-3 d-flex justify-content-center px-2" style={{color: "#39392D"}}>Sujot</h1>
            <h1 className="display-3 d-flex justify-content-center px-1" style={{color: "#39392D"}}>Singh</h1>
          </div>
          <h4 className='text-center' style={{ color: '#39392D' }}><i>"It is what we know already that often prevents us from learning."</i></h4>

          <div className="col-md-12 d-flex justify-content-end align-items-bottom">
              <a className='px-2 text-right' href="mailto:sujots92@gmail.com"><img width="20" height="20" src={gmail} className="logo" alt="mail" style={{verticalAlign: 'middle', marginTop: "5px"}}/></a>
              <a className='px-2 text-right' href="https://www.linkedin.com/in/sujot/"><img width="20" height="20" src={linkedin} className="logo" alt="linkedin" /></a>
              <a className='px-2 text-right' href="https://github.com/3xcess"><img width="20" height="20" src={github} className="logo" alt="github" /></a>
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
            <h6><b>Sujot is a Software Engineer with 3+ years of professional experience in building and maintaining highly secure, scalable, low latency software.</b></h6>
            <h6><b>He is currently pursuing an MS in Computer Science from the University of Illinois, Chicago.</b></h6>
            <h6><b>Sujot is passionate about building sustainable and result-oriented systems that have a real-world impact and are drivers of change.</b></h6>
            <h6><br></br>Hello World!</h6>
            <p>I'm Sujot, a 26y/o software engineer currently pursuing my MS in Computer Science at UIC. You can reach out to me at my <a href="mailto:sujots92@gmail.com" style={{color:"#557E25"}}>personal email</a>, or my <a href="mailto:ssing231@uic.edu" style={{color:"#557E25"}}>academic email.</a></p>
            <p>With over 3 years of professional work experience, and over 5 years in CS academia, I possess robust knowledge of C/C++, Java Spring, Python, and Shell Scripting. 
               I have strong experience with container orchestration and containerization, computer and cloud architecture, networked and distributed systems, relational and NoSQL databases, build RESTful and FHIR APIs, testing and automation, as well as software security and vulnerability resolution. 
               <br></br>
               I'm also well-versed in CI/CD techniques, DevOps, Agile development, as well as working with(and within) cross-functional teams while ensuring the secure handling of highly sensitive data.
            </p>
            <p>My present work is on Operating Systems, Kernel Programming, System Security, and User Privacy.
               This website is also one of my ongoing personal projects, my personal foray into web development and learning React!
            </p>
            <p><b>Resources:</b><br></br>
               <a
                    
                    href="/CV_PDF.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{color:"#557E25"}}
                    >Curriculum Vitae</a><br></br>
               <a href="https://github.com/3xcess" style={{color:"#557E25"}}>Github</a><br></br>
            </p>

            <div className="card my-2" style={{ backgroundColor: "#F2F3E2", border: 'none' }}>
              <div className="card-body text-center">
                <img 
                  src={`https://ghchart.rshah.org/3xcess?${new Date().getTime()}`} 
                  alt="GitHub chart of Sujot" 
                  className="img-fluid" 
                  style={{ maxWidth: '100%', height: 'auto' }} 
                />
                <h6 className="card-title" style={{ color: "#48483A" }}><i>Current Github Activity</i></h6>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Landing