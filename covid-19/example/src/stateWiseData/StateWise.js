import React,{useEffect,useState} from 'react'
import '../stateWiseData/StateWise.css'

function StateWise(){
  const [data,setData]=useState([])
  const getCovidData =async()=>{
    const res=await fetch('https://data.covid19india.org/data.json')
    const actualData= await res.json()
    console.log(actualData.statewise);  
    setData(actualData.statewise)
}
    useEffect(()=>{
        getCovidData()
    },[])
  return(
    <>
    <div className='main'>
    <div><center>
    <h1> INDIA COVID-19 DASHBOARD</h1>
    </center>
    </div>
      <div> <center>
        <table className='table'>
            <thead>
                <th>active</th>
                <th>confirmed</th>
                <th>deaths</th>
                <th>deltaconfirmed</th>
                <th>deltadeaths</th>
                <th>deltarecovered</th>
                <th>lastupdatedtime</th>
                <th>migratedother</th>
                <th>recovered</th>
                <th>state</th>
                <th>statecode</th>
                <th>statenotes</th>
                <th>active</th>

            </thead>
            <tbody>
            {
                data.map((currEle,ind)=>{
                    return(
                        <tr>
                <td>{currEle.active}</td>
                <td>{currEle.confirmed}</td>
                <td>{currEle.deaths}</td>
                <td>{currEle.deltaconfirmed}</td>
                <td>{currEle.deltadeaths}</td>
                <td>{currEle.deltarecovered}</td>
                <td>{currEle.lastupdatedtime}</td>
                <td>{currEle.migratedother}</td>
                <td>{currEle.recovered}</td>
                <td>{currEle.state}</td>
                <td>{currEle.statecode}</td>
               
            </tr>
                    )
                })



            }
            </tbody>
            {/* <tr>
                <td>active</td>
                <td>confirmed</td>
                <td>deaths</td>
                <td>deltaconfirmed</td>
                <td>deltadeaths</td>
                <td>deltarecovered</td>
                <td>lastupdatedtime</td>
                <td>migratedother</td>
                <td>recovered</td>
                <td>state</td>
                <td>statecode</td>
                <td>statenotes</td>
                <td>active</td>

            </tr>
            <tr>
                <td>active</td>
                <td>confirmed</td>
                <td>deaths</td>
                <td>deltaconfirmed</td>
                <td>deltadeaths</td>
                <td>deltarecovered</td>
                <td>lastupdatedtime</td>
                <td>migratedother</td>
                <td>recovered</td>
                <td>state</td>
                <td>statecode</td>
                <td>statenotes</td>
                <td>active</td>

            </tr> */}
        </table>
        </center>
      </div>
      </div>
    </>
  )
}

export default StateWise;