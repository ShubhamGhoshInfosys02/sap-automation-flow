/* eslint-disable react-hooks/exhaustive-deps */
import { Handle, Position } from "@xyflow/react";
import "./CustomFunctionNode.css";
import { useEffect, useState } from "react";
import { FormControlLabel, Checkbox, FormGroup, Divider } from "@mui/material";
import { updateNodeValue } from "../../redux/slices/startPanelSlice";
import { useDispatch } from "react-redux";

// eslint-disable-next-line react/prop-types
const CustomFunctionNode = ({ data }) => {
  const dispatch = useDispatch();
  const items = ["Server 1", "Server 2", "Server 3", "Server 4", "Server 5"];
  const [selectedItems, setSelectedItems] = useState([]);
  console.log("server selection data", data);
  useEffect(() => {
    console.log("selectedItems", selectedItems);
    dispatch(updateNodeValue({ ...data, value: selectedItems }));
  }, [selectedItems]);

  const handleToggle = (item) => {
    const currentIndex = selectedItems.indexOf(item);
    const newSelectedItems = [...selectedItems];

    if (currentIndex === -1) {
      newSelectedItems.push(item);
    } else {
      newSelectedItems.splice(currentIndex, 1);
    }

    setSelectedItems(newSelectedItems.sort());
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
          {items.map((item, index) => (
            <>
              <FormControlLabel
                key={item}
                control={
                  <Checkbox
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: "1rem", // Add a border
                      },
                    }}
                    size="small"
                    color="success"
                    checked={selectedItems.indexOf(item) !== -1}
                    onChange={() => handleToggle(item)}
                    name={item}
                    style={{ padding: "0 10px" }}
                  />
                }
                label={item}
              />
              {index + 1 < items.length ? <Divider /> : <></>}
            </>
          ))}
        </FormGroup>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
};

export default CustomFunctionNode;
