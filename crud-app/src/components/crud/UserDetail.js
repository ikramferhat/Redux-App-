import React,{useState, useEffect} from 'react'
import { Grid,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {useNavigate,useParams} from 'react-router-dom';
import axios from "axios"
import {getSingleUser} from '../../redux/actions/actions'
import {useSelector, useDispatch} from "react-redux"

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
        marginBottom: theme.spacing(2),
         width: '100%',
    }
    },
  }));

 
const UserDetail = () => {
    const classes = useStyles();
    const [state,setState] = useState({
        firstname:"",
        email:"",
        gender:"female",
    });
    const dispatch = useDispatch()
    let {id} = useParams()
    const {oneuser} = useSelector((state) => state.allUsers)
    const{firstname,email,gender}=state;
    const navigate = useNavigate();

  
    
  const getSingle = (userid) => {
    return function(dispatch){
  axios.get(`http://localhost:5000/users/${userid}`)
  .then((res)=>{
      console.log('data',res.data)
      dispatch(getSingleUser(res.data))
  })
  .catch((error)=> console.log(error))    
}}

useEffect(() => {
  dispatch(getSingle(id))
 },[]);

useEffect(() => {
  if(oneuser){
    setState({...oneuser})
  }
 },[oneuser]);

 
   
    return (
        <Grid container  sm={10} style={{display: "flex", justifyContent:"flex-start" ,margin:"0 auto"}}>
            <Grid item xs={12} sm={8} style={{padding: "0px 4%",}}>
               
                <h3>DETAIL USER</h3>
              
                <Button style={{marginBottom:"20px"}} onClick={()=>  navigate("/")}  variant="contained" color="primary">GO BACK</Button>
                <div>
                    <h1>name : </h1>{firstname}
                    <h1>email : </h1>{email}
                    <h1>gender : </h1>{gender}

                </div>
            </Grid>
        </Grid>
)}

export default UserDetail


