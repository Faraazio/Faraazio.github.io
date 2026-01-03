const Exp = () => {
  return (
    <>
    <div className="container py-2">
        <h4 style={{color:"#64403E"}}><b>Professional Experience</b></h4>
        <hr></hr>

        <div className="border-start border-2 border-dark shadow-sm ps-4">
            <div className="mb-4 position-relative">
                <b><h5 style={{ color: "#48483A", margin:"0" }}>Software Engineer</h5></b>
                <h6 style={{ color: "#48483A" }}><i>Optum Global Solutions</i></h6>
                <p style={{ color: "#48483A", fontSize: "14px", margin:"0" }}>
                    Location: Gurugram, India<br></br>
                </p>
                
                <h6 style={{paddingBottom: "5px", color: "#899878"}}>Duration: 3y0m</h6>
                
            </div>
        </div>

        <div className="border-start border-2 border-dark shadow-sm ps-4">
            <div className="mb-4 position-relative">
                <b><h5 style={{ color: "#48483A", margin:"0" }}>SDE Intern</h5></b>
                <h6 style={{ color: "#48483A" }}><i>Jio, Reliance India</i></h6>
                <p style={{ color: "#48483A", fontSize: "14px", margin:"0" }}>
                    Location: Chandigarh, India<br></br>
                </p>
                
                <h6 style={{paddingBottom: "5px", color: "#899878"}}>Duration: 0y3m</h6>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default Exp