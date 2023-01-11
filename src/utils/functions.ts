import { IFields } from "../App";

export const validateVertical = (cards: IFields, user: string) => {
  const rows = Object.entries(cards).map((row) => row[1]);
  const aColumn = rows
    .map((row) => row.a)
    .every((column) => column.player === user);
  const bColumn = rows
    .map((row) => row.b)
    .every((column) => column.player === user);
  const cColumn = rows
    .map((row) => row.c)
    .every((column) => column.player === user);
  if (aColumn || bColumn || cColumn) return true;
  return false;
};

export const validateHorizontal = (cards: IFields, user: string) => {
  const rows = Object.entries(cards).map((row) => row[1]);
  return rows
    .map((row) =>
      Object.entries(row)
        .map((item) => item[1])
        .every((column) => column.player === user)
    )
    .reduce((prev, next) => (prev ? prev : next), false);
};

export const validateDiagonal = (cards: IFields, user: string) => {
  const matrix = Object.entries(cards)
    .map((row) => row[1])
    .map((row) =>
      Object.entries(row).map(
        (column) => column[1].marked && column[1].player === user
      )
    );
  let tb: boolean[] = Array(3);
  let bt: boolean[] = Array(3);

  function valid(i: number, j: number, length: number) {
    // console.log({ i, j, value: matrix[i][j] });
    if (i === j) {
      tb[i] = matrix[i][j];
      if (i === 1) bt[i] = matrix[i][j];
    }
    if (i === 0 && j === 2) {
      bt[i] = matrix[i][j];
    }
    if (i === 2 && j === 0) {
      bt[i] = matrix[i][j];
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = matrix.length - 1; j >= 0; j--) {
      valid(i, j, matrix.length);
    }
  }

  console.log({ tb, bt });
  return tb.every((item) => item === true) || bt.every((item) => item === true);
};

export const validateAllMarked = (cards: IFields) => {
  const matrix = Object.entries(cards)
    .map((row) => row[1])
    .map((row) => Object.entries(row).map((column) => column[1].marked))
    .flat(1)
    .every((field) => field === true);
  return matrix;
};
