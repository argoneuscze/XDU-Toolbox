import React from "react";
import GearData from "../../data/gear_data.json";
import MaterialTable from "material-table";
import { ATTRIBUTES } from "../../utilities/constants.js";
import CardDetail from "./CardDetail.js";

const gearNameSet = new Set();

const tableData = Object.entries(GearData).map(([key, value]) => {
  const new_value = {
    id: key,
    ...value
  };

  gearNameSet.add(value.char_name);

  const firstStage = value.stages[0];
  const lastStage = value.stages[value.stages.length - 1];

  new_value["helpers"] = {
    max_hp: lastStage.hp,
    max_attack: lastStage.attack,
    max_defense: lastStage.defense,
    max_total: lastStage.hp + lastStage.attack + lastStage.defense,
    rarity_str: firstStage.rarity + "☆"
  };

  return new_value;
});

const getCharLookups = () => {
  return [...gearNameSet].reduce((obj, val) => ({ ...obj, [val]: val }), {});
};

const getAttributeLookups = () => {
  return ATTRIBUTES.reduce((obj, val) => ({ ...obj, [val]: val }), {});
};

const columns = [
  { title: "ID", field: "id", type: "numeric" },
  {
    title: "Character",
    field: "char_name",
    lookup: getCharLookups()
  },
  { title: "Skill Name", field: "skill_name" },
  {
    title: "Rarity",
    field: "helpers.rarity_str",
    lookup: { "3☆": "3☆", "4☆": "4☆", "5☆": "5☆" }
  },
  { title: "Attribute", field: "attribute", lookup: getAttributeLookups() },
  {
    title: "Max. HP",
    field: "helpers.max_hp",
    filtering: false,
    type: "numeric"
  },
  {
    title: "Max. Attack",
    field: "helpers.max_attack",
    filtering: false,
    type: "numeric"
  },
  {
    title: "Max. Defense",
    field: "helpers.max_defense",
    filtering: false,
    type: "numeric"
  },
  {
    title: "Max. Stat Total",
    field: "helpers.max_total",
    type: "numeric",
    filtering: false
  }
];

const CardTable = () => {
  return (
    <MaterialTable
      columns={columns}
      data={tableData}
      title="XDU Global Playable Units"
      options={{
        padding: "dense",
        pageSize: 25,
        pageSizeOptions: [25, 50, 100, 250, 500],
        search: false,
        filtering: true
      }}
      detailPanel={rowData => <CardDetail data={rowData} />}
      onRowClick={(event, rowData, togglePanel) => togglePanel()}
    />
  );
};

export default CardTable;
