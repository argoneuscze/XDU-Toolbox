import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  makeStyles
} from "@material-ui/core";
import GearData from "../../data/gear_data.json";
import CardRow from "./CardRow.js";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const CardTable = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Attribute</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Skill</TableCell>
            <TableCell>Max. HP</TableCell>
            <TableCell>Max. Attack</TableCell>
            <TableCell>Max. Defense</TableCell>
            <TableCell>Skill #1</TableCell>
            <TableCell>Skill #2</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(GearData).map(key => (
            <CardRow key={key} id={key} data={GearData[key]} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CardTable;
