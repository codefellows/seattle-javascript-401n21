export {};

interface Node<NV, EV> {
  value: NV;
  edges: Edge<NV, EV>[];
}

interface Edge<NV, EV> {
  value: EV;
  nodes: [Node<NV, EV>, Node<NV, EV>];
}

interface Airport {
  code: string;
}
interface Route {
  time: number;
}

let sea: Node<Airport, Route> = {
  value: { code: "SEA" },
  edges: [],
};

let ord: Node<Airport, Route> = {
  value: { code: "ORD" },
  edges: [],
};

let seaToOrd10am: Edge<Airport, Route> = {
  value: { time: 1000 },
  nodes: [sea, ord],
};

let seaToOrd12pm: Edge<Airport, Route> = {
  value: { time: 1200 },
  nodes: [sea, ord],
};

let ordToSea11am: Edge<Airport, Route> = {
  value: { time: 1100 },
  nodes: [ord, sea],
};

// sea.edges.push(seaToOrd10am, seaToOrd12pm);
// ord.edges.push(ordToSea11am);

function neighbors(origin: Node<Airport, Route>): Set<Node<Airport, Route>> {
  const neighborsWithDupes = origin.edges.map((edge) => edge.nodes[1]);
  const neighbors = new Set(neighborsWithDupes);
  // return [...neighbors];
  return neighbors;
}

// @ts-ignore
expect(neighbors(sea)).toEqual(new Set([ord])); // [ord, ord] does not equal [ord]

class Graph<NV, EV> {
  addNode(value: NV): Node<NV, EV> {}
  // addNode(): void {}
  // addNode(value: Node<NV, EV>): this {
  //   // ...
  //   return this;
  // }
  // addEdge(a: Node<NV, EV>, b: Node<NV, EV>, value: EV): this {
  //   return this;
  // }
  addEdge(a: Node<NV, EV>, b: Node<NV, EV>, value: EV): void {}
  getNodes(): Set<Node<NV, EV>> {
    return new Set();
  }
  neighbors(node: Node<NV, EV>): Set<Node<NV, EV>> {
    return new Set();
  }
  size(): number {
    return 0;
  }
}

let graph = new Graph<Airport, Route>();
sea = graph.addNode({ code: "SEA" });
ord = graph.addNode({ code: "ORD" });
graph.addEdge(sea, ord, { time: 1000 });
graph.addEdge(sea, ord, { time: 1200 });
graph.addEdge(ord, sea, { time: 1100 });

// @ts-ignore
expect(graph.neighbors(sea)).toEqual(new Set([ord]));
