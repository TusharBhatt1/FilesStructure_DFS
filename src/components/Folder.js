import { useState } from "react";

const Folder=({handleNewNode,allData})=>{

  const[isExpand , setIsExpand]= useState(false)
  const [isCreate, setIsCreate]= useState({
    visible: false,
    isFolder:null
  })

  const onAddFolder=(e)=>
  {
if(e.keyCode==13 && e.target.value)
{
  handleNewNode(allData.id,e.target.value,isCreate.isFolder)
  setIsCreate({
    ...isCreate,visible:false
  })
  setIsExpand(true)
}
  }

  if(allData.isFolder)
  {
    return(
      <div>
           <div className='folder'>
          
           <p style={{cursor:"pointer"}}  onClick={()=>setIsExpand(!isExpand)}>📁 {allData.name}</p> 
          
          
           <div className="buttons">
           <button onClick={()=>setIsCreate({visible:!isCreate.visible,isFolder:true})}> Folder +</button>
           <button onClick={()=>setIsCreate({visible:!isCreate.visible,isFolder:false})}> File +</button>
           </div> 
           </div>
          
           {
             isCreate.visible ? 
             (
              isCreate.isFolder 
              ? (
              <> <span>📁</span>  <input autoFocus onKeyDown={(e)=>onAddFolder(e)} onBlur={()=>setIsCreate({...isCreate,visible:false})}/> </>)
              : (<> <span>📃</span> <input autoFocus  onKeyDown={(e)=>onAddFolder(e)} onBlur={()=>setIsCreate({...isCreate,visible:false})}/> </>)

             )
             : null
           }
          
      
        <div className="innerFiles">
        {isExpand &&
        allData.items.map(data=><Folder handleNewNode={handleNewNode} allData={data}/>)}
        </div>
      </div>
      
      )
  }
 else
 {
   return(
     <p>📃{allData.name}</p>
   )
 }
  
}
export default Folder;
