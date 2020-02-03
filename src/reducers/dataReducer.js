const dataReducer = (state=[] , action) => {
    switch(action.type){
        case 'ADD':
            console.log('action-------',action)
            //console.log(action.data);
            if(typeof(state[0]) === 'undefined')
            return action.data
            else
            return [...state,action.data]
        case 'DELETE':
            console.log('action-------',action.id,state.length)

            for(let i=0;i<state.length;i++){
                if(state[i].id === action.id){ state.splice(i,1);break;}
            } 
            console.log(state.length)
            return state;
        case 'EDIT':
            console.log('action-------',action.obj.id)
            for(let i=0;i<state.length;i++){
                if(state[i].id === action.obj.id){;state[i] = action.obj;break;}
            }
            return state;
        default:
            return state
    
    }        
}

export default dataReducer;