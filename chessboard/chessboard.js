/* Chess Board string problem */

var chessBoard = "";
for (let boardRow = 1; boardRow <= 8; boardRow++) {
  for (let boardColumn = 1; boardColumn <= 8; boardColumn++) {
    if (boardRow % 2 != 0) {
      if (boardColumn % 2 != 0) {
        chessBoard += "#";
      } else chessBoard += " ";
    } else {
      if (boardColumn % 2 != 0) {
        chessBoard += " ";
      } else {
        chessBoard += "#";
      }
    }
  }
  chessBoard += "\n";
}

console.log(chessBoard);