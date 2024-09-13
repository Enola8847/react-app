/* eslint-disable no-unused-expressions */
import "./App.css";
import Header from "./component/Header";
import Addform from "./component/Addform";
import Item from "./component/Item";
import { useState, useEffect } from "react";
function App() {
  const [editeId, SetediteID] = useState(null);
  const [task, SetTask] = useState(
    JSON.parse(localStorage.getItem("task")) || []
  );
  const [theme, SetTheme] = useState("light");
  const [title, setTitle] = useState(""); //ลบข้อมูลโดยจะเลือกID
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);
  //ลบข้อมูลโดยเลือก ID
  function DeleteTask(id) {
    const result = task.filter((item) => item.id !== id);
    SetTask(result);
  }

  //บันทึกข้อมูล
  function saveTask(e) {
    e.preventDefault();
    if (!title) {
      alert("ใส่ข้อมูลด้วยครับ");
    } else if (editeId) {
      //อัพเดตข้อมูล
      const updateTask = task.map((item) => {
        //จะหารายการที่รหัสตรงกันกับ ID
        if (item.id == editeId) {
          return { ...item, title: title };
        }
        return item;
      });
      SetTask(updateTask);
      SetediteID(null);
      setTitle("");
    } else {
      //เพิ่มร่ายการใหม่
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        title: title,
      };
      SetTask([...task, newTask]);
      setTitle("");
    }
  } //แก้ไข้ข้อมูลโดยจะหาข้อมูลที่ตรงกับ ID
  function editeTask(id) {
    SetediteID(id);
    const editTask = task.find((item) => item.id === id);
    setTitle(editTask.title);
  }

  return (
    <div className={"App " + theme}>
      <Header theme={theme} SetTheme={SetTheme} />
      <div className="contanier">
        <Addform
          title={title}
          setTitle={setTitle}
          saveTask={saveTask}
          editeId={editeId}
        />
        <section>
          {task.map((data) => (
            <Item
              key={data.id}
              data={data}
              DeleteTask={DeleteTask}
              editeTask={editeTask}
            />
          ))}
        </section>
      </div>
    </div>
  );
}
export default App;
