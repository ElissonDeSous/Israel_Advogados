import { Link } from "react-router-dom"
import { useState } from "react"
import { useFechDocuments } from "../hooks/useFechDocuments";
import PostDetalhe from "../componentes/PostDetalhe";
import "./home.css"


function Blog(){
  const [query, setQuery] = useState("");
  const {documents:posts,load} = useFechDocuments("posts");
    const Name = "Administrador"
    return(
        <div className="flex flex-col items-center ">
          <div>
             
          </div>
            <h1 className=" text-2xl lg:text-4xl m-[20px] h-[60px] flex items-center font-bold ">Dr.Israel Oliveira Pereira</h1>
            <div>
              <div className="lg:w-[800px] p-2 mt[50px]">
               {posts && posts.map((post)=>(
                <div> 
                  <PostDetalhe key={post.id}  post = {post}/>
                </div> 
               ))}
                 <p className="text-justify">
                 </p>
               
               
              </div>
          
            </div>
            <div className="flex fixed bottom-[50px] left-[300px] m-2 items-center lg:fixed lg:bottom-2 lg:left-[1200px]  ">
         
              <a id='whats' href="https://wa.me/12997917063?text=Olá, Dr. Israel! Gostaria de marcar uma consulta." target="_blank"><img className="w-[50px]" src= "https://imagepng.org/wp-content/uploads/2017/08/whatsapp-icone-1.png" alt=""/></a>
          </div>
  
        </div>
    )
}
export default Blog