import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'


const IjasApi = () => {

    const [bestmatch,setBestmatch]=useState([])
    const [global,setGlobal]=useState({})
    const [inp,setInp]=useState("")


    const data={
      "bestMatches": [
          {
              "1. symbol": "IPMG",
              "2. name": "International Precious Minerals Group Inc",
              "3. type": "Equity",
              "4. region": "United States",
              "5. marketOpen": "09:30",
              "6. marketClose": "16:00",
              "7. timezone": "UTC-04",
              "8. currency": "USD",
              "9. matchScore": "0.8571"
          },
          {
              "1. symbol": "IPMIX",
              "2. name": "VOYA INDEX PLUS MIDCAP PORTFOLIO CLASS I",
              "3. type": "Mutual Fund",
              "4. region": "United States",
              "5. marketOpen": "09:30",
              "6. marketClose": "16:00",
              "7. timezone": "UTC-04",
              "8. currency": "USD",
              "9. matchScore": "0.7500"
          },
          {
              "1. symbol": "IPMLF",
              "2. name": "Imperial Metals Corp",
              "3. type": "Equity",
              "4. region": "United States",
              "5. marketOpen": "09:30",
              "6. marketClose": "16:00",
              "7. timezone": "UTC-04",
              "8. currency": "USD",
              "9. matchScore": "0.7500"
          },
          {
              "1. symbol": "IPMSX",
              "2. name": "VOYA INDEX PLUS MIDCAP PORTFOLIO CLASS S",
              "3. type": "Mutual Fund",
              "4. region": "United States",
              "5. marketOpen": "09:30",
              "6. marketClose": "16:00",
              "7. timezone": "UTC-04",
              "8. currency": "USD",
              "9. matchScore": "0.7500"
          }
      ]
  }

  useEffect(()=>{
   console.log( data.bestMatches.map((value)=>value['1. symbol']));
  })

    useEffect(()=>{
        // async function getdata(){
        //     const res=await axios.get("https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=IPM&apikey=O2H8HTUV6VHNR314")
        //     console.log(res.data.bestMatches);
        //     console.log(res.data);
        //     setBestmatch(res.data.bestMatches)

          

        // }
      //   async function getdata2(){
      //       const res=await axios.get("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=O2H8HTUV6VHNR314")
      //       console.log(res.data);
      //       setGlobal(res.data)
            
      //   }

      // getdata()
      // getdata2()
      // console.log(global,"global");
      // console.log(bestmatch ,"best");
    },[])

   
const loadData=(e)=>{
    setInp(e)
    console.log(inp);
}
  


  return (
    <div>
        <input type="text" onChange={(e)=>loadData(e.target.value)} />
    </div>
  )
}

export default IjasApi
