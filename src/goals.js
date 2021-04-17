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
          <ul>
            <li><label htmlFor="submit-form-title">Add New Goal</label></li>
            <li><button className="btn btn-outline-info goal-submit" type="submit">Submit</button></li>
          </ul>
          <input required maxLength="30" className="submit-form-title" placeholder="(required) What's your goal? Max: 30 characters." value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea required className="submit-form-desc" placeholder="(required) Give some details! Keep it short, simple and attainable!" value={formValue} onChange={(e) => setFormValue(e.target.value)} />
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
    const { title, text } = props.goal;
    const removeGoal = async(e) => {
      e.preventDefault();

      await firestore.collection(uid).doc(props.goal.id).delete();
    }
  
    return (
        <div className="goal">
          <ul>
            <li><p className="title">{title}</p></li>
            <li><button onClick={removeGoal} className="btn btn-outline-danger">Remove</button></li>
          </ul>
          <p>{text}</p>
        </div>
    )
}