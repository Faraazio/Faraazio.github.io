import github from "../../../assets/Github.svg"
import linkedin from "../../../assets/Linkedin.svg"
import gmail from "../../../assets/Gmail.svg"
import cv from "../../../assets/CV.svg"

const Fun = () => {
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
            <h1 className="display-3 col-md-1 text-center" style={{color: "#39392D"}}>Blogs</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="container py-4">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <div className="col">
              <div className="p-3 h-100 border rounded shadow-sm" style={{ backgroundColor: "#F7F7F2" }}>
                <h5 style={{ color: "#000000" }}>Transleight-of-Hand</h5>
                <p style={{ color: "#48483A" }}>WebAssembly, Null Pointers, and Other Fun Ways to Break the Internet.</p>
                <a href="https://3xcess.hashnode.dev/transleight-of-hand-webassembly-null-pointers-and-other-fun-ways-to-break-the-internet" className="btn btn-sm" style={{ backgroundColor: "#899878", color: "#fff" }}>Read</a>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Fun