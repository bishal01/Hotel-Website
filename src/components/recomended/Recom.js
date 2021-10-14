import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import img1 from "./img1.jpg"
import img2 from "./img2.jpg"
import img3 from "./img3.jpg"
import img4 from "./img4.jpg"
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'







const useStyles = makeStyles((theme) => ({



    grid: {
      flexGrow: 1,
      minHeight:"90vh",
      width:"95%",
      margin:"3rem auto 0px auto "

      


      
      
    },
    root:{
        display:"flex",
        justifyContent:"center",
        marginBottom:"2rem"
        
      
 
    },


description:{
    position:"absolute",
    left:"0px",
    bottom:"20px",
    zIndex:1,
    width:"100%",
    padding:"15px",
    textAlign:"center",
    color:"#FFF3FA",
    fontSize:"18px",
    height:"auto",
    overflow:"hidden",
   



    

    
},
heading:{
    marginBottom:"15px",
    color:"#fff",
    fontWeight:700,
    fontSize:"2rem",
  
  


},

mon:{
    color:"#ED5E93",fontWeight:700,fontSize:"2rem"
},
typ:{
    fontSize:"20px",
   

  
   


},
desc:{
    marginTop:"10px",
    width:"90%",
  

},
uicard:{
    width:"300px",
    height:'80vh',
    background:"radial-gradient(#111 50%,#000 100% )",
    overflow:"hidden",
    position:"relative",
    



},
img:{
    width:"100%",
    height:'80vh',
    display:"block",
    transform:"scale(1.3)",
    transition:"all 0.3s ease-out",
    zIndex:10,
    opacity:0.7,
    overflow:"hidden",
  


    
    '&:hover': 
    { 
        transform:"scale(1.2) transLateY(-1px) ",
        opacity:0.3
          
    }

},
detail:{

    fontSize:"1.2rem",
    fontWeight:500,
  
    
    
},
button:{
   color:"#fff",
   background:"red",
   display:"inline-block",
   padding:"10px 25px ",
   textDecoration:"none",
   borderRadius:"5px",
   textAlign:"center",

 


}




}))

const Recom = () => {
    const classes=useStyles()
    return (
        <>
          

              <Grid className={classes.grid} container   direction="row"
                   justifyContent="center"
                  alignItems="center" >

                  <Grid className={classes.root} item md={3}  xs={12} sm={12} >
                      
            
              <div className={classes.uicard}>
                  <img className={classes.img} src={img1} alt="" />

                  <div className={classes.description}>
                      <h3 className={classes.heading} >  Facility Room </h3>
                      <div>
                      <Typography className={classes.typ} ><span className={classes.mon}>3000 RS</span> /Pernight </Typography>
                          </div>
                      <div className={classes.desc} >
                          <div style={{display:"flex",justifyContent:"space-around"}} >
                      <Typography className={classes.detail} > Size: </Typography>
                      <Typography className={classes.detail}  > 30ft</Typography>
                      </div>
                      <div style={{display:"flex",justifyContent:"space-around"}} >
                      <Typography className={classes.detail}  > Capacity: </Typography>
                      <Typography className={classes.detail} > Max Person 5 </Typography>
                      </div>
                      <div style={{display:"flex",justifyContent:"space-around"}} >
                      <Typography className={classes.detail} > Services: </Typography>
                      <Typography className={classes.detail}  > Wifi,Television,<br/>Bathroom...</Typography>
                      
                      </div>
                      <div style={{marginTop:"20px"}} > 
                    <Link className={classes.button}   to="/Hotel-Website/Book-Now">Book Now</Link>
                    </div>

              

                  </div>

            

              </div>  
              </div>
                  


                      </Grid>
                      <Grid item md={3} sm={12} xs={12} >
                      
                      <div className={classes.root} >
                     <div className={classes.uicard}>
                         <img className={classes.img} src={img2} alt="" />
       
                         <div className={classes.description}>
                             <h3 className={classes.heading} > Couple Room </h3>
                             <div>
                             <Typography className={classes.typ} ><span className={classes.mon}>1500 RS</span> /Pernight </Typography>
                                 </div>
                             <div className={classes.desc} >
                                 <div style={{display:"flex",justifyContent:"space-around"}} >
                             <Typography className={classes.detail} > Size: </Typography>
                             <Typography className={classes.detail}  > 30ft</Typography>
                             </div>
                             <div style={{display:"flex",justifyContent:"space-around"}} >
                             <Typography className={classes.detail}  > Capacity: </Typography>
                             <Typography className={classes.detail} > Max Person 5 </Typography>
                             </div>
                             <div style={{display:"flex",justifyContent:"space-around"}} >
                             <Typography className={classes.detail} > Services: </Typography>
                             <Typography className={classes.detail}  > Wifi,Television,<br/>Bathroom...</Typography>
                             
                             </div>
                             <div style={{marginTop:"20px"}} > 
                             <Link className={classes.button}   to="/Hotel-Website/Book-Now">Book Now</Link>
                           </div>
       
                             </div>
       
                         </div>
       
                   
       
                     </div>  
                     </div>
                         
       
       
                             </Grid  >
                             <Grid item md={3} sm={12} xs={12} >
                      
                      <div className={classes.root} >
                     <div className={classes.uicard}>
                         <img className={classes.img} src={img3} alt="" />
       
                         <div className={classes.description}>
                             <h3 className={classes.heading} > Single Room </h3>
                             <div>
                             <Typography className={classes.typ} ><span className={classes.mon}>900 RS</span> /Pernight </Typography>
                                 </div>
                             <div className={classes.desc} >
                                 <div style={{display:"flex",justifyContent:"space-around"}} >
                             <Typography className={classes.detail} > Size: </Typography>
                             <Typography className={classes.detail}  > 30ft</Typography>
                             </div>
                             <div style={{display:"flex",justifyContent:"space-around"}} >
                             <Typography className={classes.detail}  > Capacity: </Typography>
                             <Typography className={classes.detail} > Max Person 5 </Typography>
                             </div>
                             <div style={{display:"flex",justifyContent:"space-around"}} >
                             <Typography className={classes.detail} > Services: </Typography>
                             <Typography className={classes.detail}  > Wifi,Television,<br/>Bathroom...</Typography>
                             
                             </div>
                             <div style={{marginTop:"20px",display:"flex",justifyContent:"center"}} > 
                             <Link className={classes.button}   to="/Hotel-Website/Book-Now">Book Now</Link>
                           </div>
       
                             </div>
       
                         </div>
       
                   
       
                     </div>  
                     </div>
                         
       
       
                             </Grid>
                             <Grid item md={3} sm={12} xs={12}  >
                      
                      <div className={classes.root} >
                     <div className={classes.uicard}>
                         <img className={classes.img} src={img4} alt="" />
       
                         <div className={classes.description}>
                             <h3 className={classes.heading} > Deluxe Room </h3>
                             <div>
                             <Typography className={classes.typ} ><span className={classes.mon}>1000 RS</span> /Pernight </Typography>
                                 </div>
                             <div className={classes.desc} >
                                 <div style={{display:"flex",justifyContent:"space-around"}} >
                             <Typography className={classes.detail} > Size: </Typography>
                             <Typography className={classes.detail}  > 30ft</Typography>
                             </div>
                             <div style={{display:"flex",justifyContent:"space-around"}} >
                             <Typography className={classes.detail}  > Capacity: </Typography>
                             <Typography className={classes.detail} > Max Person 5 </Typography>
                             </div>
                             <div style={{display:"flex",justifyContent:"space-around"}} >
                             <Typography className={classes.detail} > Services: </Typography>
                             <Typography className={classes.detail}  > Wifi,Television,<br/>Bathroom...</Typography>
                             
                             </div>
                             <div style={{margin:"20px auto 0px auto ",width:"100%",}} > 
                             <Link className={classes.button}   to="/Hotel-Website/Book-Now">Book Now</Link>
                           </div>
       
                             </div>
       
                         </div>
       
                   
       
                     </div>  
                     </div>
                         
       
       
                             </Grid>
                    



              </Grid>
             
        </>
    )
}

export default Recom
