import React, { useEffect, useState } from "react";
import RestorentCart from "./RestorantCard";
import "../App.css";
import Loader from "./loader";
// import CardList from "./restorantConst";

const Body = () => {  

        const [restorents, setRestorents] = useState([]);
        const [allrestorents, setallRestorents] = useState([]);
        const [searchTxt, setsearchtxt] = useState("");  



        const filterData=(searchTxt, allRestorents)=> {
            const filterdta = allRestorents.filter((restorent) =>
            restorent.info.name?.toLowerCase().includes(searchTxt?.toLowerCase())
            );
        return filterdta;
        } 

        useEffect(() => {
          getRestorents();
        }, []);
  

      const  getRestorents=async()=>{
        try{
          const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
          const jsn= await data.json();
          // console.log(jsn);
          // console.log(jsn?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
          setRestorents(jsn?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          setallRestorents(jsn?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        catch(err){
          console.log(err)
        }
      }

      // if(restorents?.length === 0){
      //   return <h1>No restorent is found !</h1>
      // }

      return  allrestorents.length===0 ?(<Loader/>): (
        <>
        <div className="serchbr">
          <input
            type="text"
            className="search-input"
            placeholder="Enter the restorent name here"
            value={searchTxt}
            onChange={(e) => {
              setsearchtxt(e.target.value)
            }}
          />

          <button className="srchbtn" 
          onClick={() => {
            const data = filterData(searchTxt, allrestorents);
            setRestorents(data);
          }} 
          >
          Search</button>

        </div>

          <div className="body">
            {
              restorents.map((restorent) => {
                return (<RestorentCart {...restorent} key={restorent.info.id} />)
              })
            }
          </div>
          </>
      )
}

export default Body;