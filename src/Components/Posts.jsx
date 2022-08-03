import { useEffect } from "react";
import { useState } from "react";
import PostItem from "./PostItem";



 function getData({page}){
    return  fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
                 .then((res) =>{
                   return res.json();
                 })
 }


 export default function Posts(){

    const [post,setPost] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(()=>{
        FetchData(page);
    },[page])

    
     const FetchData = async(page=1) =>{
        try{
            setLoading(true);
            const data = await getData({page});
            setPost(data);
            setLoading(false);
        }
        catch(err){
            setLoading(false);
            console.log(err);
        }
        
     }


    //  handlePage
    const handlePage = (changeBy) =>{
        setPage(page+changeBy);
    }


     if(loading){
       return <div>.....Loading</div>
     }
      return(
         <div>

             <ul>
                {post.map((item) =>{
                    return (
                        <PostItem title={item.title} id={item.id} />
                    )
                })}
             </ul>
             <button onClick={ ()=>handlePage(-1)} disabled={page===1}>Prev</button>
             <button>{page}</button>
             <button onClick={ ()=> handlePage(1)}>Next</button>

         </div>
    )
 }


   
     


  