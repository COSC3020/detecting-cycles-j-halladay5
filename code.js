function detectCycles(graph)
{
    for(var key in graph)
    {
        var path = [];
        
        if(smallerCycles(graph, key, path))
        {
            return true;
        }
    }
    return false;
}

function smallerCycles(graph, key, path=[])
{
    path.push(key);
    for(var pathNode in graph[key])
    {
        if(!path.includes(pathNode))
        {
            var smaller = smallerCycles(graph, pathNode, path);
                
            if(!smaller)
            {
                path = [];
                path.push(key);
                
            }else{
                return true;
            }
        }else{
            return true;
        }
        
    }
    
    return false;
}   
