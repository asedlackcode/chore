import React, {useState,useContext,useEffect} from 'react';
import Choreitem from '../ChoreItem';
import ChoreService from '../../Services/ChoreService';
import { AuthContext } from '../../Context/AuthContext';
import "./New.css";
import Message from '../Message';

function New() {
    const [chore,setChore] = useState({name : ""});
    const [chores,setChores] = useState([]);
    const [message,setMessage] = useState(null);
    const authContext = useContext(AuthContext);
    const [fy,completeFy] = useState(false);
    const [by,completeBy] = useState(false);
    const [dt,completeDt] = useState(false);
    const [tc,completeTc] = useState(false);
    const [sm,completeSm] = useState(false);
    const [bath,completebath] = useState(false);
    const [lk,completeLk] = useState(false);

    const user = authContext.user;

    useEffect(() => {
        
        console.log(user)
    },[]);

    const onSubmit = e => {
        e.preventDefault();
        if (fy === true) {
            ChoreService.updateFrontyard();
        }
        else if (by === true) {
            ChoreService.updateBackyard();
        }
        else if (dt === true) {
            ChoreService.updateDailytrash();
        }
        else if (tc === true) {
            ChoreService.updateTrash2Curb();
        }
        else if (sm === true) {
            ChoreService.updateSweepmop();
        }
        else if (bath === true) {
            ChoreService.updateBath();
        }
        else if (lk === true) {
            ChoreService.updateLivingroom();
        }
        
    }

    const handleCheckbox = (e) => {
        const name = e.target.value;
        if (name === "frontyard"){
            completeFy(true);
        }
        else if (name === "backyard"){
            completeBy(true);
        }
        else if (name === "dailytrash"){
            completeDt(true);
        }
        else if (name === "trash2curb"){
            completeTc(true);
        }
        else if (name === "sweepmop"){
            completeSm(true);
        }
        else if (name === "bathroom") {
            completebath(true)
        }
        else if (name === "livingroom"){
            completeLk(true);
        }
    }

    // const onChange = e => {
    //     setChore({name: e.target.value});
    // }


    return(
        <div className="container justify-content-center">
            <h3 className="newTitle animate__animated animate__flipInX">What did you do?</h3>
            <form className="form-group" onSubmit={onSubmit}>
            <div className="form-check animate__animated animate__fadeIn animate__slow">
                <input className="form-check-input" type="checkbox" name="frontyard" value="frontyard" onChange={handleCheckbox}/>
                <label className="form-check-label" htmlFor="frontyard">
                Front Yard
                </label>
            </div>
            <br/>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" name="backyard" value="backyard" onChange={handleCheckbox}/>
                <label className="form-check-label" htmlFor="backyard">
                Backyard
                </label>
            </div>
            <br/>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" name="dailytrash" value="dailytrash" onChange={handleCheckbox}/>
                <label className="form-check-label" htmlFor="dailytrash">
                Daily Trash
                </label>
            </div>
            <br/>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" name="trash2curb" value="trash2curb" onChange={handleCheckbox}/>
                <label className="form-check-label" htmlFor="trash2curb">
                Trash to Curb
                </label>
            </div>
            <br/>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" name="sweepmop" value="sweepmop" onChange={handleCheckbox}/>
                <label className="form-check-label" htmlFor="sweepmop">
                Sweep & Mop
                </label>
            </div>
            <br/>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" name="bathroom" value="bathroom" onChange={handleCheckbox}/>
                <label className="form-check-label" htmlFor="bathroom">
                Bathroom
                </label>
            </div>
            <br/>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" name="livingroom" value="livingroom" onChange={handleCheckbox}/>
                <label className="form-check-label" htmlFor="livingroom">
                Living Room/Kitchen
                </label>
            </div>

            <a  className="submit"><button type="submit" onSubmit={onSubmit} className="btn btn-info submit">Submit</button></a>
            {message ? <Message message={message}/> : null}
            </form>
        </div>
    )
}

export default New;