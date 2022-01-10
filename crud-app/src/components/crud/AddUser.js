import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import { Grid,Button,ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {useNavigate} from 'react-router-dom';
import axios from "axios"
import {addUser} from '../../redux/actions/actions'
import {useSelector, useDispatch} from "react-redux"

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
        marginBottom: theme.spacing(2),
         width: '100%',
    }
    },
  }));

 
const AddUser = () => {
    const classes = useStyles();
    const [state,setState] = useState({
        firstname:"",
        email:"",
        gender:"female",
    });
    const dispatch = useDispatch()

    const{firstname,email,gender}=state;

    const navigate = useNavigate();

    const handleChange = (e) => {
       let{name,value}= e.target;
       setState({...state,[name]: value})
  };

    const onAdd = (user) => {
        return function(dispatch){
      axios.post("http://localhost:5000/users",user)
      .then((ress)=>{
          console.log("ress",ress)
          dispatch(addUser())
      })    
    }}

    const onSubmit = (e) => {
        e.preventDefault() 
           if (!firstname || !email || !gender){
             alert('Please input all input field')
           } 
           else {
            dispatch(onAdd(state))
            navigate("/")
           }
         }
   
    return (
        <Grid container  sm={10} style={{display: "flex", justifyContent:"flex-start" ,margin:"0 auto"}}>
            <Grid item xs={12} sm={8} style={{padding: "0px 4%",}}>
               
                <h3>ADD USER</h3>
              
                <Button style={{marginBottom:"20px"}} onClick={()=>  navigate("/")}  variant="contained" color="primary">GO BACK</Button>
                
                <form onSubmit={onSubmit} className={classes.root}  noValidate autoComplete="off">                  
                    <TextField name="firstname" label="First Name"  value={firstname} onChange={handleChange} type="text" />
                    <TextField name="email" label="Email" value={email} onChange={handleChange} type="email"/>  
                    <TextField                   
                       name="gender"
                       select
                       label="Gender"
                       value={gender}
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
                    <Button  type='submit' style={{marginTop:"10px"}} variant="contained" color="primary">ADD USER</Button>

                </form>
            </Grid>
        </Grid>
)}

export default AddUser
