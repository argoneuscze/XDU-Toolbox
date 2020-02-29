import React from "react";
import GearData from "../../data/gear_data.json";
import MaterialTable from "material-table";
import { ATTRIBUTES } from "../../utilities/constants.js";

const gearNameSet = new Set();

const data = Object.entries(GearData).map(([key, value]) => {
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
    skill_1: lastStage.skill_1.name,
    skill_2: lastStage.skill_2.name,
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
  { title: "Max. HP", field: "helpers.max_hp", filtering: false },
  { title: "Max. Attack", field: "helpers.max_attack", filtering: false },
  { title: "Max. Defense", field: "helpers.max_defense", filtering: false },
  { title: "Skill #1", field: "helpers.skill_1", sorting: false },
  { title: "Skill #2", field: "helpers.skill_2", sorting: false }
];

const CardTable = () => {
  return (
    <MaterialTable
      columns={columns}
      data={data}
      title="XDU Playable Units"
      options={{
        padding: "dense",
        pageSize: 100,
        pageSizeOptions: [100, 250, 500, 1000],
        search: false,
        filtering: true
      }}
    />
  );
};

export default CardTable;
