import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, query,orderBy, onSnapshot,where, QuerySnapshot } from "firebase/firestore"; 

export const useFechDocuments = (docCollection , uid = null )=>{

    const [documents, setDocument] = useState(null)
    const [erro , setErro] = useState(null)
    const [load, setLoad] = useState(null)
    const [cancelled , setCancelled] = useState(false)
    
    useEffect(()=>{

        async function LoadingData(){
            if(cancelled)return

            setLoad(true)
            const collectionRef = await collection(db,docCollection)

            try{
                let q
                q = await query(collectionRef, orderBy('createdAt', "desc"))
                await onSnapshot(q,(QuerySnapshot)=>{
                    setDocument(
                        QuerySnapshot.docs.map((doc) =>({
                            id: doc.id,
                            ...doc.data(),
                }))
                    )
                })

                setLoad(false)

            }catch(error){
                console.log(error)
                setErro(error.message)
            }
        }
  LoadingData();
    },[docCollection,cancelled])

    useEffect(()=>{
        return() => setCancelled(true)
    },[])

    return {documents, load, erro}
}
