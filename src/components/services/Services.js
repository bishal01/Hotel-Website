import React from 'react'
import Typography from '@material-ui/core/Typography'
import {makeStyles, Paper,Divider} from '@material-ui/core'
import bear from './image/bear.jpg'
import cocktails from './image/Cocktails.jpg'
import hike from './image/hike.jpg'
import van from './image/van.jpg'



const useStyles=makeStyles(theme=>({
all:{
    backgroundColor:'#FFF3FA',
    width:'100%',
    
   
},

   services:{
       
       textAlign:'center',
       width:'100%',
       paddingTop:'3rem',

       
       
       
   },
   parent:{
       display:'flex',
       justifyContent:'space-around',
       alignItems:'center',
       width:"90%",
       margin:"0 auto",
       flexWrap:'wrap',
       textAlign:'center',
       
     paddingBottom:'3rem',
     
   },
   ser:{
    
    fontSize:'2.5rem'
   },
   paper:{
     
       justifyContent:"space-around",

       width:'250px',
       margin:'1rem 1rem ',
       height:'auto',
       backgroundColor:'transparent',
       [theme.breakpoints.down('sm')]:{
        width:'210px',
        
        
 }  

   },
   icon:{
       textAlign:"center",
       width:'100%',
   },
   title:{
       fontSize:'2rem'
   },
   body:{
       textAlign:'center',
       padding:'0 10px'
   },
   line:{
    width:'6%',
    margin:' .1rem auto',
    [theme.breakpoints.down('sm')]:{
      width:'10%'
    }

   },

   image:{
    width:'100%' ,
    height:'130px',
    objectFit:'cover'
   }


}))

const Services = () => {
    const classes=useStyles()
    return (
        <div className={classes.all} >
        <div className={classes.services} >
            <div style={{marginBottom:"3rem"}} >
              <Typography className={classes.ser}   color="initial">Services</Typography>
              <div className={classes.line} >
                    <Divider style={{height:'.3rem',background:"red"}} varient="middle" />
                    </div>
                    </div>
          <div className={classes.parent} >
          <Paper className={classes.paper} >
              <div className={classes.icon}  >
                  < img src={cocktails} alt="fresh drink" className={classes.image} />
                  </div>
                  <Typography className={classes.title} color="initial">Free Cocktails</Typography>
                  <Typography varient="body1" className={classes.body} >
                      This is the dummy text. You can learn this text from different sources.
                      This is the dummy text. You can learn this text from different sources
                      </Typography>
              </Paper>
              <Paper className={classes.paper} >
              <div className={classes.icon}  >
              < img src={hike} alt="hike" className={classes.image} />
                  </div>
                  <Typography  className={classes.title}  color="initial">Endless Hiking</Typography>
                  <Typography varient="body1" className={classes.body} >
                      This is the dummy text. You can learn this text from different sources.
                      This is the dummy text. You can learn this text from different sources
                      </Typography>
              </Paper>
              <Paper className={classes.paper} >
              <div className={classes.icon}  >
              < img src={van} alt="van" className={classes.image} />
                  </div>
                  <Typography  className={classes.title} color="initial">Free Shuttle </Typography>
                  <Typography varient="body1" className={classes.body} >
                      This is the dummy text. You can learn this text from different sources.
                      This is the dummy text. You can learn this text from different sources
                      </Typography>
              </Paper>
              <Paper className={classes.paper} >
              <div className={classes.icon}  >
              < img src={bear} alt="bear" className={classes.image} />
                  </div>
                  <Typography  className={classes.title} >Strongest Bear</Typography>
                  <Typography varient="body1" className={classes.body} >
                      This is the dummy text. You can learn this text from different sources.
                      This is the dummy text. You can learn this text from different sources
                      </Typography>
              </Paper>

                </div>

        </div>
        </div>
    )
}

export default Services
