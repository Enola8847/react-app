/* eslint-disable react/prop-types */
import "./Item.css";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";

function Item(props) {
  // จะรับค่า props ที่ส่งมาจากApp ผ่าน <Item/>
  // แล้วเปลี่ยนให้รับค่าง่ายๆเป็นข้อมูลนั้นๆดังข้าง
  const { data, DeleteTask, editeTask } = props;
  return (
    <>
      <div className="list-item">
        <p className="title">{data.title}</p>
        <div className="button-container">
          <MdModeEdit
            className="btn"
            onClick={() => {
              editeTask(data.id);
            }}
          >
            แก้ไข
          </MdModeEdit>
          <MdDelete
            className="btn"
            onClick={() => {
              DeleteTask(data.id);
            }}
          >
            ลบ
          </MdDelete>
        </div>
      </div>
    </>
  );
}
export default Item;
