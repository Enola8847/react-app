/* eslint-disable react/prop-types */
import "./Addform.css";
function Addform(props) {
  // จะรับค่า props ที่ส่งมาจากApp ผ่าน <Addform/>
  // แล้วเปลี่ยนให้รับค่าง่ายๆเป็นข้อมูลนั้นๆดังข้าง
  const { title, setTitle, saveTask, editeId } = props;
  return (
    <>
      <h2>โน๊ตๆไปเหอะ</h2>
      <form onSubmit={saveTask}>
        <div className="form-control">
          <input
            type="text"
            className="Text-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit" className="Submit-btn">
            {editeId ? "อัพเดต" : "เพิ่ม"}
          </button>
        </div>
      </form>
    </>
  );
}
export default Addform;
