import React, { useState } from "react";

function Textarea() {
  const [array, setarray] = useState([]);
  const [title, settitle] = useState("");
  const [note, setnote] = useState("");
  const [editedIndex ,setEditedIndex] = useState ("")

  const addingData = () => {
    // const dataarray=array;
    // const d=dataarray.push(newobj);
    // setarray(dataarray)
    settitle("");
    setnote("");

    setarray([
      ...array,
      {
        title: title,
        note: note,
      },
    ]);
  };

  const Updatetext = () => {
    console.log(editedIndex, "bila index");
    // const Updatetext1 = array.filter((e1, i) => i === editedIndex);
    // console.log("This  ===================> " ,Updatetext1)
    const newObject =  {
      title : title,
      note : note,
    }
    // console.log( "bfjdbajfbdsjvfadshfvh" , newObject)
    

    setarray((prev)=>{
       console.log("Prev Value " , prev)
       const copiedData = [...prev];
       copiedData[editedIndex] = newObject
       return copiedData 
    })


    // setarray([
    //   ...array,
    //   {
    //     title:title
    //   }
    // ])
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

    setarray(filtredArray);
  };
  const edtingtext = (index, item) => {
    setEditedIndex(index)
    // console.log("inex of eding text",index)
    const editingarray = array.filter((e1, i) => i === index);
    console.log(editingarray);
    settitle(item.title);
    setnote(item.note);
  };

  return (
    <div className="container mx-auto">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1 " className="form-label">
          <strong> Enter Your Title Here</strong>
        </label>
        <input
          type="name"
          required="required"
          className="form-control"
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
        <input
          type="name"
          className="form-control"
          required="required"
          id="exampleFormControlInput1"
          onChange={onChangeNote}
          value={note}
          placeholder="Enter Your Title Here"
        />
      </div>
      <div className="text-center my-4">
        <button  type="button" onClick={addingData} className="btn btn-primary">
          Add
        </button>
        <button
                onClick={() => Updatetext()}
                className="btn btn-primary mx-2 my-3 "
                
              >
                Update data
              </button>
      </div>
      <div className="row">
        {array.map((item, index) => {
          return (
            <>
              
              <div className="col-md-4 mb-4" key={index}>
                <div className="card" style={{ width: "100%" }}>
                  <div className="card-body">
                    <h5 className="card-title">Title: {item.title}</h5>
                    <p className="card-text">{item.note}</p>
                    <button
                      onClick={() => delteClick(index)}
                      className="btn btn-primary"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => edtingtext(index, item)}
                      className="btn btn-primary mx-2"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Textarea;
