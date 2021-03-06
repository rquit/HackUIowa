import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "./goals.css";

import { useCollectionData } from "react-firebase-hooks/firestore";

import { auth } from "../auth.js"
const firestore = firebase.firestore();

export default function Goal() {
    const { uid } = auth.currentUser;
    const goalsRef = firestore.collection(uid);
    const query = goalsRef.orderBy("dueDate", "asc").limit(25);
  
    const [goals] = useCollectionData(query, { idField: 'id' });
  
    const [title, setTitle] = useState("");
    const [formValue, setFormValue] = useState("");
    const [dueDate, setDueDate] = useState("");

    const newDate = new Date().toLocaleDateString();
    const newTime = new Date().toLocaleTimeString();
    const dateAndTime = ` ${newDate}, at ${newTime}`;
  
    const submitGoal = async(e) => {
      e.preventDefault();
  
      await goalsRef.add({
        title: title,
        text: formValue,
        createdAt: dateAndTime,
        dueDate: dueDate.replace(/-/g, "/").substr(5) + "/" + dueDate.replace(/-/g, "/").substr(0, 4),
      });
  
      setFormValue("");
      setTitle("");
      setDueDate("");
    }
  
    return (
    <div>
        <form className="goal-submission" onSubmit={submitGoal}>
          <ul className="goal-submission-header">
            <li><label htmlFor="submit-form-title">Add New Goal</label></li>
            <div id="header-buttons">
            <li id="header-button"><button className="btn btn-outline-info goal-submit submit-button" type="submit">Submit</button></li>
            <li id="header-button">
              <label htmlFor="checkbox-hide" className="btn btn-outline-dark">Hide</label>
              <input id="checkbox-hide" type='checkbox' data-toggle='collapse' data-target='.collapsediv1'></input>
            </li>
            <li id="header-button">
              <label htmlFor="checkbox-hide-2" className="btn btn-outline-dark">Hide Goals</label>
              <input id="checkbox-hide-2" type='checkbox' data-toggle='collapse' data-target='.collapsediv2'></input>
            </li>
            </div>
          </ul>

          <div className="collapsediv1">
          <input required maxLength="30" id="submit-form-title" className="submit-form-title" placeholder="(required) What's your goal? Max: 30 characters." value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea required className="submit-form-desc" placeholder="(required) Give some details! Keep it short, simple and attainable! Enter a Due Date below." value={formValue} onChange={(e) => setFormValue(e.target.value)} />
          <input required type="date"className="submit-form-title" value={dueDate} onChange={(e) => setDueDate(e.target.value)}></input>
          </div>
        </form>

        <div className="goals-visual">
          <ul>
              {goals && goals.map(goal => <Goals key={goal.id} goal={goal} />)}
          </ul>
        </div>
    </div>
    )
}

function Goals(props) {
    const { uid } = auth.currentUser;
    const { title, text, createdAt, dueDate } = props.goal;
    const removeGoal = async(e) => {
      e.preventDefault();

      await firestore.collection(uid).doc(props.goal.id).delete();
    }
  
    return (
        <div className="goal">
          <ul>
            <li><p className="title">{title}</p></li>
            <li><button onClick={removeGoal} className="btn btn-outline-success">I've Completed This</button></li>
          </ul>
          <p className="collapsediv2 goal-text">{text}</p>
          <div className="timestamp-container">
            <p className="date-timestamp">Made: {createdAt}</p>
            <p className="date-timestamp">Due: {dueDate}</p>
          </div>
          
        </div>
    )
}