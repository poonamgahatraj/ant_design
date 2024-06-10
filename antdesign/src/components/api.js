import { useEffect,useState } from "react";
import axios from 'axios'

export default function Api (){
const[data,setData]=useState([]);

useEffect(() => {
    console.log('API URL:', process.env.REACT_APP_MY_URL);
    axios.get(process.env.REACT_APP_MY_URL)
      .then(response => {
        setData(response.data);
      })
     
  }, []);

    return(
        <>
        <h1>Data</h1>

        {
            data.map(item=>(
                <p key={item.id}>{item.title}</p>
            ))
        }

        </>
    )
}