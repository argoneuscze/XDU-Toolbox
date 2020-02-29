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
import CardDetailStageRow from "./CardDetailStageRow";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const CardDetail = ({ data }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small">
        <TableHead>
          <TableRow>
            <TableCell>Stage</TableCell>
            <TableCell>Rarity</TableCell>
            <TableCell>Level</TableCell>
            <TableCell>HP</TableCell>
            <TableCell>Attack</TableCell>
            <TableCell>Defense</TableCell>
            <TableCell>Skill #1</TableCell>
            <TableCell>Skill #2</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.stages.map(stage => (
            <CardDetailStageRow key={stage.code} data={stage} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CardDetail;
