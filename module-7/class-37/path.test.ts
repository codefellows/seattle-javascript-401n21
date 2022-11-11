import exp from "constants";
import { Graph, Node } from "./graph";

const graph = new Graph<string, number>();
const pandora = graph.addNode("Pandora");
const arendelle = graph.addNode("Arendelle");
const metroville = graph.addNode("Metroville");
const monstropolis = graph.addNode("Monstropolis");
const narnia = graph.addNode("Narnia");
const naboo = graph.addNode("Naboo");

function biEdge(
  graph: Graph<string, number>,
  from: Node<string, number>,
  to: Node<string, number>,
  cost: number
) {
  graph.addEdge(from, to, cost);
  graph.addEdge(to, from, cost);
}

biEdge(graph, pandora, arendelle, 150);
biEdge(graph, pandora, metroville, 82);
biEdge(graph, metroville, arendelle, 99);
biEdge(graph, monstropolis, arendelle, 42);
biEdge(graph, narnia, metroville, 37);
biEdge(graph, metroville, monstropolis, 105);
biEdge(graph, metroville, naboo, 26);
biEdge(graph, naboo, narnia, 250);
biEdge(graph, naboo, monstropolis, 73);

function businessTrip(
  // O(n * e), where n is length of trip queue & e is average number of edges per node
  // O(n * 1), where n is length of trip queue & edges are stored as a map, with the destination as the key
  // Os(1)
  graph: Graph<string, number>,
  tripQueue: Node<string, number>[]
): number | null {
  let cost = 0; // Os(1)
  let currentCity = tripQueue.shift()!; // O(1), Os(1)
  // While we can go through the list
  while (tripQueue.length > 0) {
    // O(n == length of trip queue)
    // Find the adjacent city
    // const neighbors = graph.neighbors(currentCity); // O("1"), Os("1")
    let next = tripQueue.shift()!;

    // If the next city is not adjacent, return null
    if (!currentCity.edges.has(next)) {
      // O(1)
      return null;
    }

    // Otherwise, add the cost and continue
    // cost += ??; // Look through the node's edges to find the correct edge
    // cost += currentCity.edges.find((edge) => edge.nodes[1] === next)!.value;
    cost += currentCity.edges.get(next)!;
    // O(e == average number of edges on a node)
    currentCity = next; // Advance the pointer
  }

  return cost;
}

test("businessTrip", () => {
  expect(businessTrip(graph, [naboo, pandora])).toBe(null);
  expect(businessTrip(graph, [narnia, arendelle, naboo])).toBe(null);
  expect(businessTrip(graph, [metroville, pandora])).toBe(82);
  expect(businessTrip(graph, [arendelle, monstropolis, naboo])).toBe(115);
});
