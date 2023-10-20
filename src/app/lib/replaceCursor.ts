import React from 'react';

type EdgeT = { center: number; left: number; right: number };

export default function replaceCursor(
  cursorPosition: number | null,
  inputArray: string[],
  move?: ({}: EdgeT) => void
) {
  let edge: EdgeT = { center: 0, left: 0, right: 0 };

  let inputStr = '';

  let closestDistance = 0;
  inputArray.map((tag) => {
    if (!cursorPosition) {
      cursorPosition = 0;
    }

    if (inputStr.length === cursorPosition) {
      edge.center = cursorPosition;
      edge.left = cursorPosition;
      edge.right = cursorPosition;
    } else {
      closestDistance = cursorPosition - inputStr.length;

      edge.center = inputStr.length;
    }

    edge.left = inputStr.length;
    inputStr += tag;
    edge.right = inputStr.length;
    if (closestDistance >= Math.abs(cursorPosition - inputStr.length)) {
      edge.center = inputStr.length;
      // console.log(edge.left);
    }
  });
  if (move) {
    move(edge);
  }
}
