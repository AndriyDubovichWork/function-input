import React from 'react';

export default function isOnEdge(
  inputArray: string[],
  cursorPosition: number | null,
  push?: (closest: number) => void
) {
  let edge = 0;

  let inputStr = '';
  // console.log(cursorPosition);

  inputArray.map((tag) => {
    let closestDistance = 0;
    if (!cursorPosition) {
      cursorPosition = 0;
    }

    if (inputStr.length === cursorPosition) {
      edge = cursorPosition;
    } else {
      closestDistance = cursorPosition - inputStr.length;

      edge = inputStr.length;
    }

    inputStr += tag;
    if (closestDistance >= Math.abs(cursorPosition - inputStr.length)) {
      edge = inputStr.length;
    }
  });
  if (push) {
    push(edge);
  }
}
