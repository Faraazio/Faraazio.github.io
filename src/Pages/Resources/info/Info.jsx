import github from "../../../assets/Github.svg"
import linkedin from "../../../assets/Linkedin.svg"
import gmail from "../../../assets/Gmail.svg"
import cv from "../../../assets/CV.svg"

const Info = () => {
  return (
    <>
      <div className="jumbotron" style={{ backgroundColor: '#F7F7F2', position: 'relative' }}>
        <div className="container">
          <div className="row flex-column-reverse">
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
            <h1 className="display-3 col-md-1 text-center" style={{color: "#39392D"}}>About</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
            <h5 style={{color:"#64403E", marginLeft:"5px"}}><b>Spoken Languages</b></h5>
            <hr style={{width:"96%"}}></hr>
            <p>Traveling and exploring new cultures is food for my soul. 
               Naturally, I tend to immerse myself deeper into foriegn cultures and challenge myself to learn new languages wherever possible.
               So far, I have managed to learn 4 major languages and a couple of dialects. Spanish, German and Japanese are on my list next!
            </p>
            <ul style={{width:"96%"}}>
              <li>English (C1)</li>
              <li>Hindi (Native Fluency)</li>
              <li>Punjabi (Native)</li>
              <li>Urdu (Spoken Fluency)</li>
            </ul>
        </div>
      </div>
      
    </>
  )
}

export default Info