//You just need to return these 2 items, nodesinshortestpathorder and visitednodesinorder to be able to animate the rest
export function Astar(grid, startNode, finishNode) {
    const visitedNodesInOrder = [];
    startNode.distance = 0;
    startNode.h = manhattanDistance(startNode);
    const unvisitedNodes = getAllNodes(grid);

    while (!!unvisitedNodes.length) {
      sortNodesByDistance(unvisitedNodes);
      const closestNode = unvisitedNodes.shift();

      if (closestNode.isWall) continue;
    
      if (closestNode.distance === Infinity) return visitedNodesInOrder;
      closestNode.isVisited = true;

      visitedNodesInOrder.push(closestNode);
      if (closestNode === finishNode) return visitedNodesInOrder;
      updateUnvisitedNeighbors(closestNode, grid);

      
    }
  }

  function sortNodesByDistance(unvisitedNodes, finishNode) {
    unvisitedNodes.sort((nodeA, nodeB) => (nodeA.distance + manhattanDistance(nodeA, finishNode))  - (nodeB.distance + manhattanDistance(nodeB, finishNode)));
  }
  
  function updateUnvisitedNeighbors(node, grid) {
    const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
    for (const neighbor of unvisitedNeighbors) {
      neighbor.distance = node.distance + 1;
      neighbor.previousNode = node;
      
    }
  }

  function manhattanDistance (node1) {
    let nodeArow = node1.row
    let nodeAcol = node1.col
    let nodeBrow = 10
    let nodeBcol = 35

    let x1 = nodeArow;
    let x2 = nodeBrow;
    let y1 = nodeAcol;
    let y2 = nodeBcol;
  
    let xChange = Math.abs(x1 - x2);
    let yChange = Math.abs(y1 - y2);
    return (xChange + yChange);
  }

  function getUnvisitedNeighbors(node, grid) {
    const neighbors = [];
    const {col, row} = node;
    if (row > 0) neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
    return neighbors.filter(neighbor => !neighbor.isVisited);
  }
  
  function getAllNodes(grid) {
    const nodes = [];
    for (const row of grid) {
      for (const node of row) {
        nodes.push(node);
      }
    }
    return nodes;
  }
  
  // Backtracks from the finishNode to find the shortest path.
  // Only works when called *after* the dijkstra method above.
  export function stargetNodesInShortestPathOrder(finishNode) {
    const nodesInShortestPathOrder = [];
    let currentNode = finishNode;
    while (currentNode !== null) {
      nodesInShortestPathOrder.unshift(currentNode);
      currentNode = currentNode.previousNode;
    }
    return nodesInShortestPathOrder;
  }