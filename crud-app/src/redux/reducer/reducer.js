import { combineReducers } from "redux";
import { UsersReducer} from "./UserReduer";


const reducer = combineReducers({
    allUsers: UsersReducer,
});

export default reducer;