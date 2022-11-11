export interface Node<NV, EV> {
  value: NV;
  // edges: Edge<NV, EV>[];
  edges: Map<Node<NV, EV>, EV>;
}

export interface Edge<NV, EV> {
  value: EV;
  nodes: [Node<NV, EV>, Node<NV, EV>];
}

export class Graph<NV, EV> {
  private nodes = new Set<Node<NV, EV>>();
  addNode(value: NV): Node<NV, EV> {
    const node: Node<NV, EV> = { value, edges: new Map() };
    this.nodes.add(node);
    return node;
  }

  addEdge(a: Node<NV, EV>, b: Node<NV, EV>, value: EV): void {
    const edge: Edge<NV, EV> = { value, nodes: [a, b] };
    // a.edges.push(edge);
    a.edges.set(b, value);
  }

  getNodes(): Set<Node<NV, EV>> {
    return this.nodes;
  }

  neighbors(node: Node<NV, EV>): Set<Node<NV, EV>> {
    return new Set(node.edges.keys());
  }

  size(): number {
    return this.nodes.size;
  }
}

export function breadthFirst<NV, EV>(
  graph: Graph<NV, EV>,
  start: Node<NV, EV>
): NV[] {
  const q = [start];
  const visited = new Set<Node<NV, EV>>();
  const traversal: NV[] = [];
  let next = q.shift();
  while (next !== undefined) {
    if (!visited.has(next)) {
      visited.add(next);
      traversal.push(next.value);
      q.push(...graph.neighbors(next));
    }
    next = q.shift();
  }
  return traversal;
}

export function depthFirst<NV, EV>(
  graph: Graph<NV, EV>,
  start: Node<NV, EV>
): NV[] {
  const s = [start];
  const visited = new Set<Node<NV, EV>>();
  const traversal: NV[] = [];
  let next = s.pop();
  while (next !== undefined) {
    if (!visited.has(next)) {
      visited.add(next);
      traversal.push(next.value);
      s.push(...graph.neighbors(next));
    }
    next = s.pop();
  }
  return traversal;
}
