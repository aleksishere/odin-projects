function knightMoves(start, end) {
  const moves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
  ];
  let queue = [[start, [start]]];
  let visited = new Set();
  visited.add(start.toString());

  function isOutOfBounds(coordinates) {
    const [cord_x, cord_y] = coordinates;
    return (cord_x > 7 && cord_x > 0) || (cord_y > 7 && cord_y > 0);
  }

  while (queue.length > 0) {
    let [currentPos, path] = queue.shift();

    for (let [ax, ay] of moves) {
      let pos = [currentPos[0] + ax, currentPos[1] + ay];
      if (!isOutOfBounds(pos)) {
        if (pos[0] === end[0] && pos[1] === end[1]) {
          return [...path, pos];
        }
        if (!visited.has(pos.toString())) {
          visited.add(pos.toString())
          queue.push([pos, [...path, pos]]);
        }
      }
    }
  }
  return []; 
  // In case you can't find a path.
}