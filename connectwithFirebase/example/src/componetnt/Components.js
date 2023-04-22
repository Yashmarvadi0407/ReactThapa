
import React, { useEffect, useState } from 'react'


function Components() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        pass: "",
        phone: ""
    })

    let name, value;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUser({ ...user, [name]: value })
    }
    const [call, setCall] = useState({})
    // console.log(call.entries());
    // const postdata= async(event)=>{
    //     console.log(event);
    //     event.preventDefault()

    //     const {name,email,pass,phone}=user

    // // if((name&&email&&pass&&phone)){
    // //     const res=await fetch("https://reactform-1e4ae-default-rtdb.firebaseio.com/formtable.json",{
    // //         method:"POST",
    // //         headers:{
    // //             "Content-Type":"application/json"
    // //         },
    // //         body:JSON.stringify({
    // //             name,
    // //             email,
    // //             pass,
    // //             phone
    // //         })
    // //     })

    // // if(res)
    // // {
    // //     setUser({
    // //         name:"",
    // //         email:"",
    // //         pass:"",
    // //         phone:""
    // //        })  
    // //        alert("data stored in data base")
    // // }
    // // }
    // // else{
    // //   alert("fill data properly")
    // // }}

    // const res=await fetch("https://reactform-1e4ae-default-rtdb.firebaseio.com/formtable.json")
    // const data = await res.json()
    // setCall(data)
    // console.log(data)


    // //const data = await res.json()

    // //console.log(data);
    // // console.log(data.email);
    // // for(let i in data){
    // //     console.log(`id : ${i} email:${data[i]}`);
    // // }
    // }

    async function postData() {
        const res = await fetch("https://reactform-1e4ae-default-rtdb.firebaseio.com/formtable.json")
        const data = await res.json()
        // const {...data} = await res.json()
        // let arr = []
        // for (let i in data){
        //     arr.push(data[i])
        // }
        setCall(data)
        // Object.entries(data).map((i)=>{
        //     console.log(i[1].email);
        // })
        // let temp = {
        //     name:"yash",
        //     Age:20
        // }

        // console.log(Object.entries(temp));

        // console.log(data)
    }

    function submitHandlar(event) {
        event.preventDefault()
        // let temp = {
        //     name:"yash",
        //     Age:20
        // }

        // console.log(temp.entries());
        postData()
    }

    useEffect(() => {
        postData()
    }, [])
    return (
        <> <center>
            <form method=''>
                <label> Name::</label>
                <input
                    type='text'
                    name='name'
                    value={user.name}
                    onChange={getUserData}
                    required
                />
                <br></br><br></br>
                <label> Email::</label>
                <input type='text'
                    name='email'
                    value={user.email}
                    onChange={getUserData}
                    required
                />
                <br></br><br></br>
                <label> Password::</label>
                <input type='text'
                    name='pass'
                    value={user.pass}
                    onChange={getUserData}
                    required
                />
                <br></br><br></br>
                <label> Phone::</label>
                <input type='text'
                    name='phone'
                    value={user.phone}
                    onChange={getUserData} required />
                <div><br></br>

                    <button onClick={submitHandlar}>submit</button>

                    {

                        Object.entries(call).map((i) => {
                            return (
                                <h4><span>{`email : ${i[1].email}`}</span><span>{`  name:${i[1].name}`}</span></h4>
                            )
                        })
                    }
                    <br /><br></br>
                </div>
            </form>
        </center>
        </>
    );
}

export default Components;
