const Edu = () => {
  return (
    <>
    <div className="container py-2">
        <h4 style={{color:"#64403E"}}><b>Education</b></h4>
        <hr></hr>

        <div className="border-start border-2 border-dark shadow-sm ps-4">
            <div className="mb-4 position-relative">
                <b><h5 style={{ color: "#48483A", margin:"0" }}>MS in Computer Science</h5></b>
                <h6 style={{ color: "#48483A" }}><i>University of Illinois, Chicago</i></h6>
                <p style={{ color: "#48483A", fontSize: "14px", margin:"0" }}>
                    Advanced Linux Kernel Programming<br></br>
                </p>
                <p style={{ color: "#48483A", fontSize: "14px", margin:"0"}}>
                    System Security & User Privacy<br></br>
                </p>
                <p style={{ color: "#48483A", fontSize: "14px", margin:"0", paddingBottom:"5px"}}>
                    Permissionless Systems<br></br>
                </p>
                
                <h6 style={{paddingBottom: "5px", color: "#899878"}}>GPA: 4.0</h6>
                
            </div>
        </div>

        <div className="border-start border-2 border-dark shadow-sm ps-4">
            <div className="mb-4 position-relative">
                <b><h5 style={{ color: "#48483A", margin:"0" }}>BTech in Computer Science</h5></b>
                <h6 style={{ color: "#48483A" }}><i>Indian Institute of Information Technology, Una</i></h6>
                <p style={{ color: "#48483A", fontSize: "14px", margin:"0" }}>
                    Advanced Operating Systems<br></br>
                </p>
                <p style={{ color: "#48483A", fontSize: "14px", margin:"0"}}>
                    Advanced Computer Networks<br></br>
                </p>
                <p style={{ color: "#48483A", fontSize: "14px", margin:"0", paddingBottom:"5px"}}>
                    Advanced Computer Architecture<br></br>
                </p>
                
                <h6 style={{paddingBottom: "5px", color: "#899878"}}>GPA: 8.58/10</h6>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default Edu