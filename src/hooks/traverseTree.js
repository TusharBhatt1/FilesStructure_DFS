const useTraverseTree=(tree,folderId,item,isFolder)=>{

function insertNode(tree,folderId,item,isFolder)
{
if(tree.id==folderId && tree.isFolder)
{
tree.items.unshift({
  id: new Date().getDate(),
  name: item,
  isFolder:isFolder,
  items:[]
})


return tree
}
let latestNode=[]

latestNode=tree.items.map((f)=>{
  return insertNode(f,folderId, item, isFolder)
})

return {...tree,items:latestNode}

}
return {insertNode}

}
export default useTraverseTree