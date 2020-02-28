import React from "react";
import { TableRow, TableCell } from "@material-ui/core";

const CardRow = ({ id, data }) => {
  const lastStage = data.stages[data.stages.length - 1];

  console.log(lastStage);

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {id}
      </TableCell>
      <TableCell>TODO</TableCell>
      <TableCell>{data.char_name}</TableCell>
      <TableCell>{data.skill_name}</TableCell>
      <TableCell>{lastStage.hp}</TableCell>
      <TableCell>{lastStage.attack}</TableCell>
      <TableCell>{lastStage.defense}</TableCell>
      <TableCell>{lastStage.skill_1.desc}</TableCell>
      <TableCell>{lastStage.skill_2.desc}</TableCell>
    </TableRow>
  );
};

export default CardRow;
