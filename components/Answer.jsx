import React from 'react'
import { makeStyles,createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(() => 
   createStyles({
     'button': { 
       marginBottom: '7px',
       '&:hover': {
           backgroundColor:'#f50057',
          color:'#fff'
       }
     }
   
  }));
  



const Answer = (props) =>{
    const classes = useStyles();



    return (
        <>
             <Button variant="outlined" color="secondary" className={classes.button}
                      onClick={()=>props.select(props.content,props.nextId)}>
                   {props.content}

             </Button>
        </>
    )
}

export default Answer
