import React from "react";
import { useState } from "react";
function App() {
  //   const [toggle, setToggle] = useState(true)
  //   const [name, setname] = useState('Sarab')
  //   const toggleName = ()=> {
  //    setToggle(!toggle)
  //   }
  //   const changeName = (param) =>  {
  //  setname(param)
  //   }
  const [gallery, setGallery] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    const [author, img] = e.target;
    const newData = {
      author: author.value,
      img: img.value,
    };
    setGallery([...gallery, newData]);
  };
  let show = <h1>no content</h1>;
  if(gallery.length > 0 ){
    show = gallery.map((e, i) => (
     <li key={i}>
       {e.author} : <img width={100} src={e.img} alt="no img" />
     </li>
   ));

  }
  console.log(show);
  return (
    <>
      {/* {toggle ? <h1>My toggle is Sarab</h1> : 'loading'}  
      <button onClick={toggleName}>Correct the toggle</button>

      {name}  
      <button onClick={() => changeName('Master')}>change name</button> */}

      <form className="w-100" onSubmit={submitHandler}>
        <input className="form-control w-25" type="text" placeholder="author" />
        <input
          className="form-control w-25"
          type="url"
          placeholder="enter img url"
        />
        <button className="btn btn-primary w-25"> Add</button>
      </form>
      <hr />
      <ol>{show}</ol>
    </>
  );
}

export default App;
