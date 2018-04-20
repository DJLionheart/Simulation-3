const initialState = {
    username: '',
    userid: '',
    profilepic: ''
}

const GET_USER_INFO = 'GET_USER_INFO';


export function getUserInfo(userid, username, profilepic) {
    return {
        type: GET_USER_INFO,
        payload: {
            userid: userid,
            username: username,
            profilepic: profilepic
        }
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {

    case GET_USER_INFO:
        let { userid, username, profilepic } = action.payload;
        console.log("REDUCER: ", action.payload);
        
        return Object.assign({}, state, { userid: userid, username: username, profilepic: profilepic })


    
    default: 
        return state;
    }
    
}