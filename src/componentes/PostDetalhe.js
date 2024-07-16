import { Link } from "react-router-dom"

const PostDetalhe = ({post})=>{
    return(
        <div className="flex flex-col p-2 mb-[20px] border-solid border-2 border-black">
            
            <h2 className="lg:text-4xl font-bold mb-[20px]">{post.titulo}</h2>
            <p className="mb-[20px]" >{post.texto}</p>
            <img className="mb-[20px]" src={post.imagem} width="300px" alt={post.titulo} />
        </div>
    )
}
export default PostDetalhe