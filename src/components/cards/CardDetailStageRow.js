import React from "react";
import { TableRow, TableCell } from "@material-ui/core";

const CardDetailStageRow = ({ data }) => {
  console.log(data);

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {data.code}
      </TableCell>
      <TableCell>{data.rarity}☆</TableCell>
      <TableCell>{data.level}</TableCell>
      <TableCell align="right">{data.hp}</TableCell>
      <TableCell align="right">{data.attack}</TableCell>
      <TableCell align="right">{data.defense}</TableCell>
      <TableCell>
        <b>{data.skill_1.name}</b>: {data.skill_1.desc}{" "}
        <i>[{data.skill_1.cooldown}s]</i>
      </TableCell>
      <TableCell>
        <b>{data.skill_2.name}</b>: {data.skill_2.desc}{" "}
        <i>[{data.skill_2.cooldown}s]</i>
      </TableCell>
    </TableRow>
  );
};

export default CardDetailStageRow;
