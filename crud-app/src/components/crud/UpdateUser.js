import React,{useState, useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import { Grid,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {useNavigate,useParams} from 'react-router-dom';
import axios from "axios"
import {getSingleUser,updateUser} from '../../redux/actions/actions'
import {useSelector, useDispatch} from "react-redux"

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
        marginBottom: theme.spacing(2),
         width: '100%',
    }
    },
  }));

 
const UpdateUser = () => {
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

    const handleChange = (e) => {
       let{name,value}= e.target;
       setState({...state,[name]: value})
  };


    
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

    const onUpdate = (user,id) => {
        return function(dispatch){
      axios.put(`http://localhost:5000/users/${id}`,user)
      .then((ress)=>{
          dispatch(updateUser())
      })    
    }}

    const onSubmit = (e) => {
        e.preventDefault() 
           if (!firstname || !email || !gender){
             alert('Please input all input field')
           } 
           else {
            dispatch(onUpdate(state,id))
            navigate("/")
           }
         }
   
    return (
        <Grid container  sm={10} style={{display: "flex", justifyContent:"flex-start" ,margin:"0 auto"}}>
            <Grid item xs={12} sm={8} style={{padding: "0px 4%",}}>
               
                <h3>EDIT USER</h3>
              
                <Button style={{marginBottom:"20px"}} onClick={()=>  navigate("/")}  variant="contained" color="primary">GO BACK</Button>
                
                <form onSubmit={onSubmit} className={classes.root}  noValidate autoComplete="off">                  
                    <TextField 
                       name="firstname" 
                       label="First Name"  
                       value={firstname || ""} 
                       onChange={handleChange} 
                       type="text" />

                    <TextField name="email"
                       label="Email"
                       value={email || ""}
                       onChange={handleChange}
                       type="email"/>  

                    <TextField                   
                       name="gender"
                       select
                       label="Gender"
                       value={gender || ""}
                       onChange={handleChange}
                       SelectProps={{
                        native: true,
                      }}
                       helperText="Please select your gender"
                      >
                         <option key="male" value="male">
                        Male
                        </option>
                        <option key="female" value="female">
                        Female
                        </option>
                    </TextField>
                    <Button  type='submit' style={{marginTop:"10px"}} variant="contained" color="primary">UPDATE</Button>

                </form>
            </Grid>
        </Grid>
)}

export default UpdateUser

