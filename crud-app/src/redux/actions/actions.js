import { ActionType } from "../constants/action_type";
 
const getUsers =(users) => {
    return {
      type: ActionType.GET_USERS,  
      payload: users,
    }
  }

const deleteUser =() => {
    return {
      type: ActionType.REMOVE_SELECTED_USER,  
    }
  }
  
const addUser =() => {
    return {
      type: ActionType.ADD_USER,  
    }
  }

const getSingleUser =(user) => {
    return {
      type: ActionType.GET_SINGLE_USER,  
      payload: user,
    }
  }
const updateUser =() => {
    return {
      type: ActionType.UPDATE_USER,  
    }
  }


export {getUsers,deleteUser,addUser,getSingleUser,updateUser};