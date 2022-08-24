function duck_duck_goose(circle, k) {
  let i = (k - 1) % circle.length;
  while (circle.length > 1) {
    console.log("Duck", i, circle[i]);
    circle.splice(i, 1);
    i = (i - 1 + k) % circle.length;
  }
  return circle[0];
}

const goose = duck_duck_goose(["a", "b", "c", "d", "e"], 3);
console.log(goose);
