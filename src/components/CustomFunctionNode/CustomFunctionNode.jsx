import { Handle, Position } from "@xyflow/react";
import "./CustomFunctionNode.css";
import { useState } from "react";
import { FormControlLabel, Checkbox, FormGroup, Divider } from "@mui/material";

const CustomFunctionNode = () => {
  const items = ["Server 1", "Server 2", "Server 3", "Server 4", "Server 5"];
  const [selectedItems, setSelectedItems] = useState([]);

  const handleToggle = (item) => {
    const currentIndex = selectedItems.indexOf(item);
    const newSelectedItems = [...selectedItems];

    if (currentIndex === -1) {
      newSelectedItems.push(item);
    } else {
      newSelectedItems.splice(currentIndex, 1);
    }

    setSelectedItems(newSelectedItems);
  };

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div
        style={{
          backgroundColor: "#F5F5DC",
          padding: "5px 10px",
          borderRadius: "5px",
        }}
      >
        <div style={{ fontSize: "18px", fontWeight: "600" }}>
          Select from the listed servers
        </div>
        <Divider />
        <FormGroup>
          {items.map((item) => (
            <FormControlLabel
              key={item}
              control={
                <Checkbox
                  size="small"
                  color="tertiary"
                  checked={selectedItems.indexOf(item) !== -1}
                  onChange={() => handleToggle(item)}
                  name={item}
                  style={{ fontSize: "3px", padding: "0 10px" }}
                />
              }
              label={item}
            />
          ))}
        </FormGroup>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
};

export default CustomFunctionNode;
