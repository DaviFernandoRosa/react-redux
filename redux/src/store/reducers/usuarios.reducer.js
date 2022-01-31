

const initialState = {
   usuarios: {
       active: null,
       list:[
            'davi',
            'salomao',
            'thales',
            'accel',
            'yago',
            'Camila'
       ]
   }
    
}

const usuariosReducer = (state = initialState.usuarios, action) =>{
    if(action.type === 'CHANGE_USER'){
        return{
            ...state,
            active: action.payload
        }
    }
    return state;
}

export default usuariosReducer;