import React, {useState,useContext,useEffect} from 'react';
import Choreitem from './ChoreItem';
import ChoreService from '../Services/ChoreService';
import { AuthContext } from '../Context/AuthContext';

const FrontYard = props => {
    const [chore,setChore] = useState({name : ""});
    const [chores,setChores] = useState([]);
    const [message,setMessage] = useState(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        ChoreService.getChores().then(data => {
            setChores(data.chores);
        });
    },[]);

    return(
        <div className="container justify-content-center">
            <ul className="list-group">
                {
                    chores.map(chore => {
                        return <ChoreItem key={chore_id} chore={chore}/>
                    })
                }
            </ul>
            
        </div>
    )
}

export default FrontYard;