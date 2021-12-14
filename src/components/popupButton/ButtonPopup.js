import React, { useState } from "react"
import TaskCreator from "../taskcreator/TaskCreator"

function ButtonPopup(props) {
  const [usepopup, setUsepopup] = useState(false)

  return (
    <div className = "button">
      <button onClick={() => { setUsepopup(true) }}>Add Task</button>
      {usepopup && <TaskCreator onExit={() => setUsepopup(false)} fullitem = {props.fullitem}/>}
    </div>)
}

export default ButtonPopup