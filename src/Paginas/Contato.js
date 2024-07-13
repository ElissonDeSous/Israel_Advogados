
import instagran from "./img/instagram-removebg-preview.png"
import OutlookIcon from "./img/IconOutlook.png"
function Contato(){
  return(
    <div>
     <section className=" mt-[100px] ">
           <div className="flex  flex-col lg:items-center  w-[350px]  lg:w-[100%]   ">
            <h2 className=" text-4xl flex justify-center m-[20px]">Entre em contato</h2>
              <div className="flex m-2   items-center">
                   <a href="https://www.instagram.com/israel.advocacia/" target="_blank"> <img className="w-[50px]"    src= {instagran} alt=""/></a>
                    <p className="m-2">@israel.advocacia</p>
             
               </div>
                
             <div className="flex m-2  lg:relative left-2  ">
         
                <a href="https://www.linkedin.com/in/israel-oliveira-pereira-a4a629150/"><img className="w-[50px]" src="https://icones.pro/wp-content/uploads/2021/03/icone-linkedin-ronde-originale.png" alt=""/></a>
                <p className="m-2">Israel Oliveira Pereira
                </p>
             </div>
             <div className="flex m-2 items-center lg:relative left-[40px] ">
                <a href="" target="_blank"><img className="w-[50px]" src={OutlookIcon} alt=""/></a>
                <p className="m-2">israel.advocacia@outlook.com
                </p>
             </div>
             
           </div>
           <div className="w-[100%]">
              <img src="" className=" w-full]"  alt=""/>
           </div>
        </section>

    </div>
  )
}

export default Contato