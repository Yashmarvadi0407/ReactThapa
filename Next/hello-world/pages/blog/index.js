import Link from 'next/link'
export const getStaticProps=async()=>{
 
 const res=await fetch("https://jsonplaceholder.typicode.com/posts");
 const data=await res.json()
//console.log(data)
 return {
    props:{ 
        data:data }
 }
}

const index=({data})=>{
       
    return( <>
        {data.slice(0,5).map((cuuele)=>{
          
        return( 
                <div key={cuuele.id} >
                    <h1> {cuuele.id}</h1>
                    <Link href={`/blog/${cuuele.id}`}><h1> {cuuele.title}</h1> </Link>
                </div>
            )
        })}
    </>)
}
export default index