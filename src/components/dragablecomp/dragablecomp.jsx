import Draggable from "react-draggable";
import "./dragablecomp.css"

const DragableComp = ({ value }) => {
 
  return (
    <div>
      {value.map((item) => {
        return (
          <Draggable>
            <div className="drag-box">
              <div className="drag-value">{item}</div>
            </div>
          </Draggable>
        );
      })}
    </div>
  );
};
export default DragableComp;
