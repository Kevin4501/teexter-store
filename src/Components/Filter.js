import React from "react";
import "./Filter.css";
function Filter(props) {
  
  console.log(props.datas)
  return (
    <div>
      <div className="filter-box">
        <div>
            <h3 >Colour</h3>
            <input type="checkbox" name="color" value = 'Red' onChange={(event)=>props.filterByColor(event)} />
            <span>RED</span>
            <br />
            <input type="checkbox" name="color" value = 'Blue' onChange={(event)=>props.filterByColor(event)}/>
            <span>BLUE</span>
            <br />
            <input type="checkbox" name="color" value= 'Green' onChange={(event)=>props.filterByColor(event)} />
            <span>GREEN</span>
        </div>
        

        <div>
          <h3>Gender</h3>
          <input type="checkbox" value="Men" onChange={(event)=>props.filterByGender(event)}/> <span>Men</span>
          <br />
          <input type="checkbox" value="Women" onChange={(event)=>props.filterByGender(event)}/> <span>Women</span>
        </div>
        <div>
          <h3>Price</h3>
          <input type="checkbox" value="0-250" onChange={(event)=>props.filterByPrice(event)}/> <span>0 - Rs 250</span>
          <br />
          <input type="checkbox" value="251-400" onChange={(event)=>props.filterByPrice(event)} /> <span>Rs 251 - Rs400</span>
          <br />
          <input type="checkbox" value="450" onChange={(event)=>props.filterByPrice(event)} /> <span>Rs 450</span>
        </div>
        <div>
          <h3>Type</h3>
          <input type="checkbox" value="Polo" onChange={(event)=>props.filterByType(event)} /> <span>Polo</span>
          <br />
          <input type="checkbox" value="Hoodie" onChange={(event)=>props.filterByType(event)} /> <span>Hoodie</span>
          <br />
          <input type="checkbox" value="Basic" onChange={(event)=>props.filterByType(event)} /> <span>Basic</span>
        </div>
      </div>
    </div>
  );
}

export default Filter;
