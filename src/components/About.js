import React ,{useState} from 'react'

export default function About(props) {
  // const [myStyle,setMyStyle]=useState({
  //      color:'white',
  //   backgroundColor:'black'

  // })
  // const [btnText,setbtnText]=useState("enable darkmode")
  // const toggleStyle=()=>{
  //   if (myStyle.color==="white")
  //   {
  //     setMyStyle({
  //       color:"black",
  //       backgroundColor:"white",
        
  //     })
  //     setbtnText("enable dark mode")
  //   }
  //   else{
  //     setMyStyle({
  //       color:"white",
  //       backgroundColor:"black",
  //       border:'2px solid white'
  //     })
  //     setbtnText("enable light mode")

  //   }
  // }
  let myStyle={
    color:props.mode==='dark'?'green':'black',
    backgroudColor:props.mode==='dark'?'black':'white',

 
  }
  return (
    <div className="container"style={myStyle}>
      <h1 className='mx-3'>About us</h1>
    <div className="accordion" id="accordionExample">
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
           <strong>LEADER</strong>
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
          this website will not only help you while writing any mail or other but will also help to count the number of words and lines.Hence will reduce the extra effort needed for that.
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" type="button"  style={myStyle}  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
           <strong> DEVELOPER </strong>
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
          Please use it consiously and enjoy all its functions properly .We will try to give some feature to it in near future.
          Thanks.
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          <strong>ABOUT TEXTUTILLS</strong>
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
          Its free to use and Browser compact.
        </div>
      </div>
    </div>
  </div>
  {/* <div className="container">
    <button  onClick={myStyle} type='button' className="btn btn-primary">{btnText}</button>

  </div> */}
</div>
  )
}
