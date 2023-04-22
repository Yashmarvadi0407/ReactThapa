import { useRouter} from 'next/router'
// const pageNo=()=>{
//   const router=useRouter()
//   const pagenumber=router.query.pageNo
//     return(
//         <> hello {pagenumber}</>
//     )
// }



export const getStaticPaths=async()=>{

  const res=await fetch("https://jsonplaceholder.typicode.com/posts")
  const data=await res.json()
 //console.log(data[1].title);
  const paths=data.map((currEl)=>{
    return{
      params:{
        pageNo:currEl.id.toString()
      }
    }
  })
 return{
  paths:paths,
  fallback:false
 }
}


export const getStaticProps=async(context)=>{
  const id=context.params.pageNo
  //console.log(id);
  const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data=await res.json()
 //console.log(data)
  return {
     props:{ 
         data:data }
  }
 }
 

const pageNo=({data})=>{
  
    return(
        <> <h1> {data.id}</h1>
        <h1> {data.title}</h1>
        <p> {data.body}</p></>
    )
}
export default pageNo