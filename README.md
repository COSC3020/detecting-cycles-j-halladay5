[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/3yAkp-x3)
# Detecting Cycles in Graphs

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

This implementation has two functions. The detectCycles function has a for loop that will iterate through every node in the graph. So this will in the worst case take V time, where V is the number of vertices in 
the graph. For each iteration it will call smallerCycles. If smallerCycles returns true, then the function will return true, if it returns false, it will continue and iterate over the next vertex in the graph.
The smallerCycles function will start by pushing the key/starting node onto the path. It will then enter a for loop which iterates over every edge in the graph that is connected to the key/starting node. In the
worst case this will take E time, where E is the number of edges connected to that node. Inside the for loop, it checks if pathNode, the vertex that is 
connected to the start node by that iteration's edge, is in path. If it isn't that means it hasn't been visited, and it will recursively call smallerCycles until it finds the end of the path, or until it finds 
a vertex that is already in the path. This indicates that a cycle is present. From there it will return true to the main call. If it doesn't find any nodes that are already in the path for each edge, then it
will return false, and continue searching the other edges if it isn't the last edge. If it doesn't find a cycle for any node, it will return false. So in summary, the detectCycles function will iterate through 
every vertex V in the graph and call smallerCycles V times, and for each time it's called it must go over every edge that connects the key/start node to another node, so in the worst case, it iterates E times,
where E is the number of edges in the graph. So altogther, the worst case time complexity is $\Theta(V * E)$.
