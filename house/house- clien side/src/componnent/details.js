
 import React, { useState }  from 'react';
 import Button from '@mui/material/Button';
 import Typography from '@mui/material/Typography';
 import Container from '@mui/material/Container';
 import Stack from '@mui/material/Stack';
 import Card from '@mui/material/Card';
 import CardContent from '@mui/material/CardContent';
 import {useNavigate, useLocation} from 'react-router-dom';
 import Alert from '@mui/material/Alert';
 
 //componnent to display the ditails
 export default function Details(){
    const navigate = useNavigate();
    const location = useLocation();
    const [detailsobj,setDetailsobj]=useState(false)
    //save the error stae
    const [errorobj,setErrorobj]=useState()
    //call API to get details
    React.useEffect(() => {
      fetch(`http://localhost:8000/api/houses/${location.state.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }})
        .then(results => results.json())
        .then(data => {
          if(data.house.error){
            setErrorobj(data.house.error.name)
          }
          setDetailsobj(data.house[0]);
        })
        .catch((error) => {
          setErrorobj("server error")
        });
      },[]
   );
  //nevigate to update on click the "update" button
    const update_house = async e => {
      navigate('/update', {
        state:{detailsobj:detailsobj}
        
      });
    }
    return (
    <div>
      {detailsobj===false?
        (errorobj?
          <Alert severity="error">{errorobj}</Alert>
          :'Loading....')
        :detailsobj?
          <Container component="main" maxWidth="xs" >
            <Card sx={{ minWidth: 275,maxWidth:20 }}>  
              <CardContent>
                <Typography component="h1" variant="h4">
                  House Details
                </Typography>
                <Typography variant="h6" component="div">
                  Id:
                </Typography>
                <Typography  variant="h8"color="text.secondary">
                  {detailsobj.id}
                </Typography>
                <Typography variant="h6" component="div">
                  Address:
                </Typography>
                <Typography  variant="h8"color="text.secondary">
                  {detailsobj.address}
                </Typography>
                <Typography variant="h6" component="div">
                  currentValue :
                </Typography>
                <Typography  variant="h8"color="text.secondary">
                  {detailsobj.currentValue}
                </Typography>
                <Typography variant="h6" component="div">
                  loanAmount:
                </Typography>
                <Typography  variant="h8"color="text.secondary">
                  {detailsobj.loanAmount}
                </Typography>
                <Typography variant="h6" component="div">
                  Risk:
                </Typography>
                <Typography  variant="h8"color="text.secondary">
                  {detailsobj.risk}
                </Typography>
                <Stack sx={{ width: '100%' }} spacing={2}>
                  <Button
                  onClick={update_house}
                  margin="normal"
                  fullWidth
                  variant="contained"
                  >
                    Update
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Container>
        :<Alert   severity="error">ID NOT FOUND</Alert> }
        </div>)
  }