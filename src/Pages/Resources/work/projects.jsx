import github from "../../../assets/Github.svg"
import linkedin from "../../../assets/Linkedin.svg"
import gmail from "../../../assets/Gmail.svg"
import cv from "../../../assets/CV.svg"

const Project = () => {
  return (
    <>
      <div className="jumbotron" style={{ backgroundColor: '#F7F7F2' }}>
        <div className="container">
          <div className="row flex-column-reverse">
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

            <h1 className="display-3 col-md-1 text-center" style={{color: "#39392D"}}>Projects</h1>
          </div>
        </div>
      </div>

    <div className="container py-3">
        <div className="row">
            <div className="col-md-4 mb-4">
                <div className="card border-0 shadow" style={{ backgroundColor: "#F2F3E2" }}>
                    <div className="card-body">
                    <h5 className="card-title" style={{ color: "#48483A" }}>OAuth 2.0 Authorization Server</h5>
                    <p className="card-text" style={{ color: "#48483A" }}>
                        Fully RFC-compliant, with custom RFC implementations built in Python using FastAPI.<br></br>Supports Authorization + PKCE flow, JWT access tokens, Introspection, Revocation, & JWKS public key discovery.
                    </p>
                    <a href="https://github.com/Faraazio/OAuth2-server/tree/main" className="btn btn-sm" style={{ backgroundColor: "#899878", color: "#fff" }}>View</a>
                    </div>
                </div>
            </div>


            <div className="col-md-4 mb-4">
                <div className="card border-0 shadow" style={{ backgroundColor: "#F2F3E2" }}>
                    <div className="card-body">
                    <h5 className="card-title" style={{ color: "#48483A" }}>Auto-ext</h5>
                    <p className="card-text" style={{ color: "#48483A", textAlign:"left" }}>
                        A system for automated workload profiling and scheduler switching to optimize the Linux Kernel performance. <br></br>Built using SCX, Sched-Ext, and eBPF.
                    </p>
                    <a href="https://github.com/Faraazio/auto_ext" className="btn btn-sm" style={{ backgroundColor: "#899878", color: "#fff" }}>View</a>
                    </div>
                </div>
            </div>

            <div className="col-md-4 mb-4">
                <div className="card border-0 shadow" style={{ backgroundColor: "#F2F3E2" }}>
                    <div className="card-body">
                    <h5 className="card-title" style={{ color: "#48483A" }}>Transleight of Hand</h5>
                    <p className="card-text" style={{ color: "#48483A" }}>
                        An explorative proof-of-concept study into the many security implications of WASM-Native Execution Discrepancies. <br></br>Done using C/C++(gcc) and WASM(Emscripten).
                    </p>
                    <a href="https://github.com/EddieFed/wasm-exploits" className="btn btn-sm" style={{ backgroundColor: "#899878", color: "#fff" }}>View</a>
                    </div>
                </div>
            </div>

            <div className="col-md-4 mb-4">
                <div className="card border-0 shadow" style={{ backgroundColor: "#F2F3E2" }}>
                    <div className="card-body">
                    <h5 className="card-title" style={{ color: "#48483A" }}>YUME: A tale of Dreams & Nightmares</h5>
                    <p className="card-text" style={{ color: "#48483A" }}>
                        An action-adventure game exploring the themes of fantasy and dreams with key focus on scalable software development and maintainence.<br></br>Built using Unity 6.0
                    </p>
                    <a href="https://github.com/Faraazio/CS426_Final_Project_YUME" className="btn btn-sm" style={{ backgroundColor: "#899878", color: "#fff" }}>View</a>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div className="container py-3">
        <div className="row">
            <div className="col-md-4 mb-4">
                <div className="card border-0 shadow" style={{ backgroundColor: "#F2F3E2" }}>
                    <div className="card-body">
                    <h5 className="card-title" style={{ color: "#48483A" }}>CustOS</h5>
                    <p className="card-text" style={{ color: "#48483A" }}>
                        A self made, lightweight custom Operating System built on the Linux Kernel. Further iterations refined to have a GUI and networking capability.<br></br>Designed to be lightweight and customizable.
                    </p>
                    <a href="#" className="btn btn-sm" style={{ backgroundColor: "#B8C1AE", color: "#fff" }}>Not Public</a>
                    </div>
                </div>
            </div>

            <div className="col-md-4 mb-4">
                <div className="card border-0 shadow" style={{ backgroundColor: "#F2F3E2" }}>
                    <div className="card-body">
                    <h5 className="card-title" style={{ color: "#48483A" }}>StegoCipher</h5>
                    <p className="card-text" style={{ color: "#48483A" }}>
                        A steganographic cipher system built for embedding and extracting data using images optimized for minimising the size inflation post encryption.<br></br>Written in Python. 
                    </p>
                    <a href="#" className="btn btn-sm" style={{ backgroundColor: "#B8C1AE", color: "#fff" }}>Not Public</a>
                    </div>
                </div>
            </div>

            <div className="col-md-4 mb-4">
                <div className="card border-0 shadow" style={{ backgroundColor: "#F2F3E2" }}>
                    <div className="card-body">
                    <h5 className="card-title" style={{ color: "#48483A" }}>Portfolio Website</h5>
                    <p className="card-text" style={{ color: "#48483A" }}>
                        This page is also one of my projects! It's my first foray into web development, even if its no more than an alternate CV as of right now.<br></br>Built using React, Vite, and Bootstrap.
                    </p>
                    <a href="https://github.com/Faraazio/Faraazio.github.io" className="btn btn-sm" style={{ backgroundColor: "#899878", color: "#fff" }}>View</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
    
    </>
  )
}

export default Project