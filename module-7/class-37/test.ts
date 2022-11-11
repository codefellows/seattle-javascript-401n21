import { depthFirst, Graph } from "./graph";

// THE WARM UP IS AT THE BOTTOM OF THE PAGE
const graph = new Graph<string, undefined>();
const pandora = graph.addNode("Pandora");
const arendelle = graph.addNode("Arendelle");
const metroville = graph.addNode("Metroville");
const monstropolis = graph.addNode("Monstropolis");
const narnia = graph.addNode("Narnia");
const naboo = graph.addNode("Naboo");

graph.addEdge(pandora, arendelle, undefined);
graph.addEdge(arendelle, monstropolis, undefined);
graph.addEdge(arendelle, metroville, undefined);
graph.addEdge(metroville, monstropolis, undefined);
graph.addEdge(metroville, narnia, undefined);
graph.addEdge(metroville, naboo, undefined);
graph.addEdge(monstropolis, naboo, undefined);
graph.addEdge(narnia, naboo, undefined);
// Bi-directional edges
graph.addEdge(arendelle, pandora, undefined);
graph.addEdge(metroville, arendelle, undefined);
graph.addEdge(monstropolis, arendelle, undefined);
graph.addEdge(monstropolis, metroville, undefined);
graph.addEdge(naboo, metroville, undefined);
graph.addEdge(narnia, metroville, undefined);
graph.addEdge(naboo, monstropolis, undefined);
graph.addEdge(naboo, narnia, undefined);

test("breadth first", () => {
  // const traversal = breadthFirst(graph, metroville);
  const traversal = depthFirst(graph, naboo);
  console.log(traversal);
  // expect(traversal).toEqual([
  //   "Pandora",
  //   "Arendelle",
  //   "Metroville",
  //   "Monstropolis",
  //   "Narnia",
  //   "Naboo",
  // ]);
});

// The above breadth first was class 35's assignment.
// Today's warm up is depth first.

test.skip("depth first", () => {
  const traversal = depthFirst(graph, pandora);
  expect(traversal).toEqual([
    "Pandora",
    "Arendelle",
    "Metroville",
    "Narnia",
    "Naboo",
    "Monstropolis",
  ]);
});
