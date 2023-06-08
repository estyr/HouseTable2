import React, { useState }  from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import Alert from '@mui/material/Alert';
//function to call API for update house
   async function updateHouse(credentials) {
    return fetch(`http://localhost:8000/api/houses/${credentials.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }
   //componnent to update house
  export default function Update() {   
    const navigate = useNavigate();
    const location = useLocation()
    const id=location.state.detailsobj.id
    //save the update house state
    const [address, setAddress] = useState(location.state.detailsobj.address);
    const [currentValue, setCurrentValue] = useState(location.state.detailsobj.currentValue);
    const [loanAmount, setLoanAmount] = useState(location.state.detailsobj.loanAmount);
    //save the error state
    const [error,setError]=useState();
    //function validation loanAmount must be >=currentValue
    const handleValidation=()=>{
      if(loanAmount<currentValue){
        setError("loanAmount must be >=currentValue")
        return false
      }
      return true;
   }
   //function on sbmit the form
    const handleSubmit = async e => {
      e.preventDefault();
      if(handleValidation()){
        var res=null
        try{  
          res = await updateHouse({
          id,
          address,
          currentValue,
          loanAmount
          });
          if(res.house.length >0)
            navigate('/details', {
              state:{id:id}
            });
          else{
            setError("server error")
          }
        }
        catch(error){
          setError("server error")
        }  
      }
    }
    return (
      <Box sx={{ minWidth: 275 }}>
        <Link to="/details"state={{id:id}}>{id}</Link>
        <Container component="main" maxWidth="xs">
          <Typography component="h1" variant="h5">
            Update A House
          </Typography>
              <form onSubmit={handleSubmit}  >
                <TextField
                  defaultValue={id}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  autoComplete="id"
                  InputProps={{
                    readOnly: true,
                  }}
                  label="id"
                  />
                <TextField
                  onChange={e => setAddress(e.target.value)}
                  defaultValue={address}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="outlined-required"
                  label="address"
                  />
                <TextField
                  onChange={e => {setCurrentValue(e.target.value)}}
                  defaultValue={currentValue}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="currentValue"
                  label="currentValue"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  />
               <TextField
                onChange={e => setLoanAmount(e.target.value)}
                defaultValue={loanAmount}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="loanAmount"
                label="loanAmount"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                />
              <TextField
                defaultValue={location.state.detailsobj.risk}
                variant="outlined"
                margin="normal"
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
                label="risk"
                />
              <Stack sx={{ width: '100%' }} spacing={2}>
                {error?
                  <Alert   severity="error">{error}</Alert>
                  :null}
                <Button
                  margin="normal"
                  type="submit"
                  fullWidth
                  variant="contained"
                  >
                  Update
                </Button>
              </Stack>
            </form>
        </Container>
       </Box>
    );
  }