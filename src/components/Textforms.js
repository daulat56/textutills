import React,{useState} from 'react'
export default function Textforms(props) {
  // title case the text
  function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }
  // a function use to click the button
    const handleUpclick=()=>{
      console.log("the uppercase is clicked");
      // whenever the uppercase btn will be clicked it will evoke settext 
      // setText("you have clicked on uppercase");
      // to uppercase is used to convert the letter into uppercase
      let newText=text.toUpperCase(); 
      setText(newText)
      props.showAlert(" Converted to upper case!"," Success");
    }
    const handleLoclick=()=>{
      console.log('the lowercase button is clicked');
      let newtext=text.toLowerCase();
      setText(newtext)
      props.showAlert(" Converted to lower case!"," Success");

    }
    const handleOnclick=()=>{
      console.log("text is cleared");
      let newtext='';
      setText(newtext)
      props.showAlert(" Text cleared !"," Success");
    }
    // whenever we will make any change inside the text area it will automate but initially unable to do so because the text which is default
    const handleOnChange=(event)=>{
      // (event)- means onchage is also is an event used to listen the event
      console.log("onchange");
      setText(event.target.value);
    }
     const handletitleclick=()=>{
      console.log("title case is done");
      let newtext=titleCase(text);
      setText(newtext);
      props.showAlert(" Converted to title case!"," Success");
    }
    const handlecopy=()=>{
      console.log("text copied");
      var text=document.getElementById("form");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert(" text copied!"," Success");
    }
const [text, setText] = useState('');
// setText("hello write here");
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black  '} } >
      <h1>{props.heading}</h1>
      <div className="mb-3">
          {/* <label for="form" class="form-label">write text</label>  */}
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'grey':'light  ', color:props.mode==='dark'?'white':'dark    '} } id="form" rows="8"></textarea>
          </div>
          <button className='btn btn-primary mx-3' onClick={handleUpclick} >upper case</button>
          {/* mx is used to give distance between the button */}
          <button className='btn btn-primary ' onClick={handleLoclick} >lower case</button>
          <button className='btn btn-primary mx-3 ' onClick={handletitleclick} >title case</button>
          <button className='btn btn-primary mx-3 ' onClick={handlecopy} >copy text</button>
          <button className='btn btn-danger mx-3 ' onClick={handleOnclick} > clear text</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black  '} } >
      <h1> Your text summary</h1>
      <p> {text.split(" ").length}words  {text.length} char- 34550</p>
      <p>{0.008*text.split(" ").length} minutes reading time</p>
      {/* <p>{text.count.rows} rows </p/> */}
       <p>{text.split('\n').length} lines</p>
      <h2>preview</h2>
      <p>{text}</p>

    </div>
    </>
  )
}
