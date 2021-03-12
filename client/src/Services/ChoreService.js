
export default {
    getChores : ()=>{
        return fetch('/user/chores')
            .then(response=> {
                if(response.status !=401){
                    return response.json().then(data => data);
                }
                else
                    return {message : {msgBody : "Unauthorized"}, msgError: true}
            });
    },
    postChore : chore=> {
        return fetch('/user/chore', {
            method: "post",
            body : JSON.stringify(chore),
            headers: {
                'Content-Type' : 'application/json'
            }
        }).then(response=> {
            if(response.status !=401){
                return response.json().then(data => data);
            }
            else
                return {message : {msgBody : "Unauthorized"}, msgError: true}
        });
    },
    updateFrontyard : (id) => {
        return fetch('/user/frontyard/' + id, {
            method: "put",
            body : JSON.stringify(),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(res => res.json())
          .then(data => data);
           
    },
    updateBackyard : (id) => {
        return fetch('/user/backyard/' + id, {
            method: "put",
            body : JSON.stringify(),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(res => res.json())
          .then(data => data);
           
    },
    updateDailytrash : (id) => {
        return fetch('/user/dailytrash/' + id, {
            method: "put",
            body : JSON.stringify(),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(res => res.json())
          .then(data => data);
           
    },
    updateTrash2Curb : (id) => {
        return fetch('/user/trash2curb/' + id, {
            method: "put",
            body : JSON.stringify(),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(res => res.json())
          .then(data => data);
           
    },
    updateSweepmop : (id) => {
        return fetch('/user/sweepmop/' + id, {
            method: "put",
            body : JSON.stringify(),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(res => res.json())
          .then(data => data);
           
    },
    updateLivingroom : (id) => {
        return fetch('/user/livingroom/' + id, {
            method: "put",
            body : JSON.stringify(),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(res => res.json())
          .then(data => data);
           
    },
    updateBath : (id) => {
        return fetch('/user/bath/' + id, {
            method: "put",
            body : JSON.stringify(),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(res => res.json())
          .then(data => data);
           
    }

}