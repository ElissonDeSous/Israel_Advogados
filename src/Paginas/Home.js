import banner from "./img/banner.jpg"
import imgDireito1 from "./img/imagemDireitocivel.jpg"
import "./home.css"

function Home (){
    return(
        <div>
             <section>
            
                <img src={banner} width="100%" height="200px"  alt=""/>
    
       
        <div className="h-[300px] w-full  flex flex-col  justify-center items-center">
          <h2 id="h2" className="md:text-7xl text-3xl font-serif ">Israel Advogados</h2>
         <p className="m-[20px] md:text-2xl text-1xl">OAB/SP - 464.844</p>
                <p className=" m-[20px] md:text-2xl ">O Direito não só é uma busca pela Justiça, mas <span className="flex justify-center">  também uma busca pela verdade!</span></p>
        </div>

        <div className="bg-cyan-950 h-[300px] lg:flex lg:flex-col flex flex-col justify-center items-center text-white ">
            <h2 className=" text-3xl md:text-4xl">Áreas de atuação</h2>
            <p className="text-1xl m-[20px]">Serviços oferecidos

            </p>
        </div>
        <div id="conteudo1" className="  lg:flex lg:justify-center ">
            <div className="flex justify-center">
                <img src= {imgDireito1} className=" w-[100%]  lg:w-[490px] lg:h-[326px] "  alt=""/>
            </div>
            <div className="   flex flex-col justify-center items-center w-[350px] md:w-[100%] m-[20px] lg:w-[400px] lg:h-[327px">
               <h2 className="text-2xl font-bold" >Direito Cível
               </h2>
               <p className="w-[300px] m-[20px] text-justify ">
               Com vasta experiência na área do Direito Cível, nosso escritório tem um histórico comprovado de sucesso em diversos casos. Atendemos clientes em São Paulo e em todo o Brasil, com a máxima eficiência e celeridade, sempre focados em alcançar os melhores resultados legais para nossos clientes.
               </p>
               
            </div>
            <div className="w-[full]">
               <img src="https://www.unipe.edu.br/wp-content/uploads/2022/11/direito.webp" className="w-full lg:w-[490px] lg:h-[327px] md:w-[100%]"  alt=""/>
            </div>
        
        </div>
        <div id="conteudo1" className="  lg:flex  lg:justify-center  justify-center">
            <div className="flex m-[20px] flex-col sm:justify-normal justify-center items-center  w-[350px] md:w-[100%] lg:w-[400px] lg:[327]">
                <h2 className=" font-bold text-2xl m-[20px flex justify-center lg:justify-center w-[300px] lg:w-[350px] ">Direito Trabalhista
                </h2>
                <p className="w-[300px] m-[20px] text-justify " >
                Especializados em Direito Trabalhista, acumulamos anos de prática bem-sucedida nesta área. Atuamos em São Paulo e em todo o território nacional, prestando serviços com agilidade e eficácia. Nossos clientes confiam em nossa expertise para conduzir processos trabalhistas, visando sempre a proteção de seus direitos e interesses de maneira exemplar
                </p>
                
             </div>
             <div id="containerimg" className="flex w-[100%] md:w-[100%] lg:w-[420px] ">
                <img id= "imagem" src="https://wp.ebradi.com.br/wp-content/uploads/2020/07/ebradi_ebradi_image_467-1080x675.jpeg" className=" w-[100%] lg:w-[490px] xl:w-[420px] lg:h-[327]  "  alt=""/>
             </div>
             <div className=" lg:relative lg:bottom-[20px]  flex m-[20px] flex-col   items-center  w-[350px] md:w-[100%] lg:w-[400px] lg:[327]">
                <h2 className=" font-bold text-2xl m-[20px] flex justify-center lg:justify-center w-[300px] lg:w-[350px] mt-[20px] ">Direito de Danos Pessoais</h2>
                <p className=" lg:relative lg:bottom-[20px]  w-[300px] m-[20px]  text-justify ">
              
                O Israel Advogados tem uma equipe de especialistas prontos para assessorar os clientes na área de São Paulo em questões relacionadas a Direito de danos pessoais. Estendemos nossas experiências jurídicas para ajudar a atender clientes de todos os tipos e tamanhos.

                </p>
                
             </div>

             
        </div>
        <div className="flex justify-center h-[100px] items-center font-bold lg:text-3xl">
                <h2> Atuação em todas as áreas do Direito</h2>

             </div>
         
            <div className="flex fixed bottom-[50px] left-[300px] m-2 items-center lg:fixed lg:bottom-2 lg:left-[1200px]  ">
         
                <a id="whats" href="https://wa.me/12997917063?text=Olá, Dr. Israel! Gostaria de marcar uma consulta." target="_blank"><img className="w-[50px]" src= "https://imagepng.org/wp-content/uploads/2017/08/whatsapp-icone-1.png" alt=""/></a>
             </div>
         </section>
        </div>
         
    )
}
export default Home