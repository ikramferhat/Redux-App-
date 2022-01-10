import { ActionType } from "../constants/action_type";

const initialState ={
    users: [],
    user: {},
    loading: false,
};

export const UsersReducer =(state = initialState,action) => {
    switch(action.type){
      case ActionType.GET_USERS:
        return {
                ...state,
                users: action.payload
        }
      case ActionType.REMOVE_SELECTED_USER:
      case ActionType.ADD_USER:
      case ActionType.UPDATE_USER:
          return {
                  ...state
            }
      case ActionType.GET_SINGLE_USER:
          return {
                  ...state,
                  oneuser:action.payload
            }
      default:
          return state;
    }
  } 


