import React from "react";
import ColumnOneItem from "../columnItems/ColumnOneItem";
function ColumnOne({
  leftColumnItems,
  dndValues,
  setDndValues,
  initialDndState,
}) {
  const showColumnOneItems = () => {
    return leftColumnItems.map((item, index) => (
      <ColumnOneItem
        key={item.name}
        item={item}
        index={index}
        dndValues={dndValues}
        setDndValues={setDndValues}
      />
    ));
  };
  return (
    <div>
      <div>Column 1</div>
      <div>{showColumnOneItems()}</div>
    </div>
  );
}

export default ColumnOne;
