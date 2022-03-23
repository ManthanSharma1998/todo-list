import React, { useState,useEffect } from "react";

function Textarea(props) {
 
  const [title, settitle] = useState("");
  const [note, setnote] = useState("");
  const [editedIndex, setEditedIndex] = useState("");
  const [search, setsearch] = useState("");
  const [editingtext,setwitingtest]=useState([]);
  const[onchangeralertnotes,setonchangeralertnotes]=useState("");
  const[onchangeralerttitle,setonchangeralerttitle]=useState("");
  const[showsearch,setshowsearch]=useState(0)
  
  


  const GetElementFormLocal=()=>{
    const list=localStorage.getItem(`list`);
    if(list){
      return JSON.parse(list);
    }
    else{
      return [];
    }
  }
  const [array, setarray] = useState(GetElementFormLocal());  
  
  useEffect(() => {
    localStorage.setItem(`list`,JSON.stringify(array))
  }, [array])
  
  
  const addingData = (e) => {
    e.preventDefault();
    settitle("");
    setnote("");
    setarray([
      ...array,
      {
        title: title,
        note: note,
      },
    ]);
    setshowsearch(showsearch+1);
  };
  const Updatetext = () => {
    console.log(editedIndex, "edited index");
    const newObject = {
      title:onchangeralerttitle,
      note:onchangeralertnotes
    };
    setarray((prev) => {
      console.log("Prev Value ", prev);
      const copiedData = [...prev];
      console.log("copied data", copiedData);
      copiedData[editedIndex] = newObject;
      console.log("bilaa",copiedData);
      return [...copiedData]
      
    });
    setnote("");
    settitle("");
  };
  const onChangetitle = (val) => {
    settitle(val.target.value);
  };
  const onChangeNote = (val2) => {
    setnote(val2.target.value);
  };
  const delteClick = (index) => {
    console.log("index", index);
    // const copiedArray = array ;
    const filtredArray = array.filter((el, i) => i !== index);
    // console.log( "hfdsgfhasjfjh" , filtredArray)
    setshowsearch(showsearch-1)

    setarray(filtredArray);
  };
  const onchangetitlerun=(val)=>{
    setonchangeralerttitle(val.target.value);
  }
  const onchangeNoterun=(val)=>{
    setonchangeralertnotes(val.target.value);
  }
  const edtingtext = (index, item) => {
    setEditedIndex(index);
    // console.log("inex of eding text",index)
    const editingarray = array.filter((e1, i) => i === index);
    console.log(editingarray);
    setwitingtest([
      ...editingarray,
      {
        title: title,
        note: note,
      },
    ]);
    setonchangeralerttitle(item.title)
    setonchangeralertnotes(item.note);

    // settitle(item.title);
    // setnote(item.note);
  };
  console.log("Git Check");
  
   
  return (
    <div
      className={`container mx-auto `}
      style={{ color: props.LightMode ===`light` ? `black` : `lightblue` }}
    >
      <form onSubmit={addingData}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1 " className="form-label">
            <strong> Enter Your Title Here</strong>
          </label>
          <input
            type="name"
            required="required"
            style={{
              backgroundColor: props.LightMode ===`light` ? `white` : "black",
              color: props.LightMode ===`light` ? `black` : `lightblue`,
            }}
            className={`form-control border border-${
              props.LightMode ===`light`
                ? `border border-dark`
                : `border border-success`
            }`}
            id="exampleFormControlInput1"
            onChange={onChangetitle}
            value={title}
            placeholder="Enter Your Title Here"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="exampleFormControlInput1 "
            className="form-label"
            rows="4"
          >
            <strong> Enter Your Note Here</strong>
          </label>
          <textarea
            type="name"
            className={`form-control border border-${
              props.LightMode ===`light`
                ? `border border-dark`
                : `border border-success`
            }`}
            required="required"
            style={{
              backgroundColor: props.LightMode ===`light` ? `white` : "black",
              color: props.LightMode ===`light` ? `black` : `lightblue`,
            }}
            id="exampleFormControlInput1"
            onChange={onChangeNote}
            value={note}
            rows="6"
            placeholder="Enter Your Title Here"
          />
        </div>
        <div className="text-center my-4 " style={{}}>
          <button
            disabled={editedIndex || (title==="" || note==="") ? true :false }
            type="submit"
            className={`btn btn-${
              props.LightMode ===`light` ? `primary` : `success`
            } mx-3`}
          >
            Add
          </button>

        </div>
      </form>
      <div className="row">
        {console.log("search========",showsearch)}
      <div className={`d-${showsearch===0?`none`:`block`}`}>
        <h4>Search Your Note Here Here:</h4>{" "}
        <input
          style={{
            backgroundColor: props.LightMode === `light` ? `white` : "black",
            border: `1px solid 6eddb4`,color:props.LightMode===`light`?`black`:`white`
          }}
          className="form-control me-2 "
          onChange={(val) => setsearch(val.target.value)}
          type="search"
          placeholder="Enter Your Title Name"
          aria-label="Search"
        />
        </div>
        <i className="search icon"></i>
        <div className={`d-${showsearch>0?`none`:`block`}`}>No Notes Are Here</div>
        {array
          .filter((item) => {
            if (search === "") {
              return item;
            } else if (item.title.toLowerCase().includes(search.toLowerCase())) {
              return item;
            }
          })

          
          .map((item, index) => {
            return (
              <>
                <div className="col-md-3 mb-4 mx-3 my-4 border border-success  " key={index}>
                  <div className="card" style={{ width: "100%" }}>
                    <div className="card-body" style={{backgroundColor:props.LightMode===`light`?`light`:`black`}} >
                      <h5 className="card-title">Title: {item.title}</h5>
                      <p className="card-text">{item.note}</p>
                      <button
                        onClick={() => delteClick(index)}
                        className="btn btn-primary"
                      >
                        Delete
                      </button>
                      <button
                      data-bs-toggle="modal"
                       data-bs-target="#exampleModal"
                        onClick={() => edtingtext(index, item)}
                        className="btn btn-primary mx-2"
                      >                        Edit
                      </button>
                    </div>
                  </div>
                </div>
                {/* <!-- Button trigger modal --> */}


{/* <!-- Modal --> */}
{editingtext.map((item)=>{
  return(<>
   <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel"><input type="text" onChange={onchangetitlerun} value={onchangeralerttitle} /></h5>
                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
      <div className="modal-body">
      <h5 className="modal-title" id="exampleModalLabel"><input type="text" onChange={onchangeNoterun} value={onchangeralertnotes}/></h5>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button"  onClick={Updatetext} data-bs-dismiss="modal" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  </>

  )
})}

                
              </>
            );
          })}
      </div>
    </div>
  );
}

export default Textarea;
