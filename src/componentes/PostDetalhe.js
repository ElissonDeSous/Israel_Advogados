import { Link } from "react-router-dom"

const PostDetalhe = ({post})=>{
    return(
        <div className="w-[900px]flex flex-col justify-center items-center p-2 mb-[20px]">
             <img className="mb-[20px] xl:relative xl:left-[100px]" src={post.imagem} width="600px" alt={post.titulo} />
            <h2 className="lg:text-4xl font-bold mb-[20px]">{post.titulo}</h2>

         <h2>
            <div className="mb-[100px]">
                <p className="mb-[20px] text-justify">
                {post.paragrafo1}
                </p>
                <p className="mb-[20px] text-justify">
                {post.paragrafo2}
                </p>
                <p className="mb-[20px] text-justify">
                {post.paragrafo3}
                </p>
                <p className="mb-[20px] text-justify">
                {post.paragrafo4}
                </p>
                <p className="mb-[20px] text-justify">
                {post.paragrafo5}
                </p>
                <p className="mb-[20px] text-justify">
                {post.paragrafo6}
                </p>
                <p className="mb-[20px]text-justify">
                {post.paragrafo8}
                </p>
                <p className="mb-[20px] text-justify">
                {post.paragrafo9}
                </p>
                <p className="mb-[20px] text-justify">
                {post.paragrafo10}
                </p>
                <p className="mb-[20px] text-justify">
                {post.paragrafo11}
                </p>
                <p className="mb-[20px] text-justify">
                {post.paragrafo12}
                </p>
                <p className="mb-[20px] text-justify">
                {post.paragrafo13}
                </p>
                <p className="mb-[20px] text-justify">
                {post.paragrafo14}
                </p>
                <p className="mb-[20px] text-justify">
                {post.paragrafo15}
                </p>
                <p className="mb-[20px] text-justify">
                {post.paragrafo16}
                </p>
                <p className="mb-[20px] text-justify">
                {post.paragrafo17}
                </p>
                <p className="mb-[20px] text-justify">
                {post.paragrafo18}
                </p>
                <p className="mb-[20px] text-justify">
                {post.paragrafo19}
                </p>
                <p className="mb-[20px] text-justify">
                {post.paragrafo20}
                </p>
                <p className="mb-[20px] text-justify">
                {post.paragrafo21}
                </p>
                <p className="mb-[20px] text-justify">
                {post.paragrafo22}
                </p>
                <p className="mb-[20px] text-justify">
                {post.paragrafo23}
                </p>
                <p className="mb-[20px] text-justify">
                {post.paragrafo24}
                </p>
                <p className="mb-[20px] text-justify">
                {post.paragrafo25}
                </p>
                <p className="mb-[20px] text-justify">
                {post.paragrafo26}
                </p>
                <p className="mb-[20px] text-justify">
                {post.paragrafo27}
                </p>
                <p className="mb-[20px] text-justify">
                {post.paragrafo28}
                </p>
                <p className="mb-[20px] text-justify">
                {post.paragrafo29}
                </p>
                <p className="mb-[20px] text-justify">
                {post.paragrafo30}
                </p>
             
               
             
              
               
                 
            </div>
        
         </h2>
                 
            
            
           
        </div>
    )
}
export default PostDetalhe