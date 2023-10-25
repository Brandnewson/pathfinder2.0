<h1>Pathfinder Visualiser 2.0</h1>

<h2> :sparkles:Ambition: </h2>
After creating my first generation of A-star pathfinder visualiser using Pygame. I became more ambitious and decided to expand my reach to the following:

- ReactJS
- Djiksta's algorithm
- Front-end Web Development

<h2> :pencil:Method: </h2>

Utilised ReactJS to create the brains of my project, here I further built on my knowledge from my Business Analyser Web App for website development, exposing myself to both ReactJS and Flask in the process. 

**Djikstra's Algorithm** was implemented as follows:
- Search around start node, point each node back to its prior node.
- Keep extending the search parameters by adding new nodes to the algorithm
- whenever a new node is recorded, sort by closest to furthest from goal
- keep going until you hit the goal
- Backtrack and you have the fastest possible route.

**A*star Algorithm** was implemented as follows
- Astar works by utilsing heuristics, i.e. how far is current node to goal
- We calculate through a manhattan number (diff of current node and goal's x&y coords)
- Whenever we seach a new node, calculate that node's manhattan number
- If new node has a better path, that gets appended to top of the list
- Keep going until you hit the goal
- The first path that hits the target, will be the fastest possible route.

Features

- Set point A
- Set point B
- Set up "walls" for the algorithm to figure its way around
- Execute the A-star algorithm
- Execute the Djiksta's algorithm
- Clearing of board for multiple usages
- CSS to showcase the execution of algorithm

<h3> :tv:Demo: </h3>

https://user-images.githubusercontent.com/63832502/185536998-9ebb3d99-314d-46d4-bfa4-9ed48b232288.mp4
