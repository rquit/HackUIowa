import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "./goals.css";

import { useCollectionData } from "react-firebase-hooks/firestore";

import { auth } from "./auth.js"
const firestore = firebase.firestore();

export default function Goal() {
    const { uid } = auth.currentUser;
    const goalsRef = firestore.collection(uid);
    const query = goalsRef.orderBy("createdAt", "desc").limit(25);
  
    const [goals] = useCollectionData(query, { idField: 'id' });
  
    const [title, setTitle] = useState("");
    const [formValue, setFormValue] = useState("");
  
    const submitGoal = async(e) => {
      e.preventDefault();
  
      await goalsRef.add({
        title: title,
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
  
      setFormValue("");
      setTitle("");
    }
  
    return (
    <div>
        <form className="goal-submission" onSubmit={submitGoal}>
          <label for="submit-form-title"><strong>Add a new goal!</strong></label>
          <input className="submit-form-title" placeholder="Main goal" value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea className="submit-form-desc" placeholder="Give some details!" value={formValue} onChange={(e) => setFormValue(e.target.value)} />
          <button className="btn btn-outline-info goal-submit" type="submit">Submit</button>
        </form>
        <ul>
            {goals && goals.map(goal => <Goals key={goal.id} goal={goal} />)}
        </ul>
    </div>
    )
}
  
function Goals(props) {
    const { title, text } = props.goal;
  
    return (
        <div>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}