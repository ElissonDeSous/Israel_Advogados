
import instagran from "./img/instagram-removebg-preview.png"
import OutlookIcon from "./img/IconOutlook.png"
function Contato(){
  return(
    <div>
     <section className=" mt-[100px] ">
           <div className="flex  flex-col lg:items-center  w-[350px]  lg:w-[100%]   ">
            <h2 className=" text-4xl flex justify-center m-[20px]">Entre em contato</h2>
              <div className="flex m-2   items-center">
                    <img className="w-[50px]"    src= "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt=""/>

                    <a href="https://www.instagram.com/israel.advocacia/">
                    <p className="m-2">@israel.advocacia</p>
                    </a>
                    
             
               </div>
                
             <div className="flex m-2  lg:relative left-2  ">
         
                <img className="w-[50px]" src="https://icones.pro/wp-content/uploads/2021/03/icone-linkedin-ronde-originale.png" alt=""/>
                <a href="https://www.linkedin.com/in/israel-oliveira-pereira-a4a629150/">
                <p className="m-2">Israel Oliveira Pereira
                </p></a>
                
             </div>
             <div className="flex m-2 items-center lg:relative left-[40px] ">
                <a href="" target="_blank"><img className="w-[50px]" src="https://www.liblogo.com/img-logo/ou154oc7d-outlook-logo-outlook-free-icon-of-circle-icons.png" alt=""/></a>
                <p className="m-2">israel.advocacia@outlook.com
                </p>
             </div>
             
           </div>
           <div className="w-[100%]">
              <img src="" className=" w-full]"  alt=""/>
           </div>
          <div className="flex fixed bottom-[50px] left-[300px] m-2 items-center lg:fixed lg:bottom-2 lg:left-[1200px]  ">
         
               <a href="https://wa.me/12997917063?text=Olá, Dr. Israel! Gostaria de marcar uma consulta." target="_blank"><img className="w-[50px]" src= "https://imagepng.org/wp-content/uploads/2017/08/whatsapp-icone-1.png" alt=""/></a>
          </div>
        </section>

    </div>
  )
}

export default Contato