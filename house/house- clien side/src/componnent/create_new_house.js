
import React, { useState }  from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { useNavigate} from 'react-router-dom';
import Alert from '@mui/material/Alert';
//function to call API for create house
async function createHouse(credentials) {
  return fetch('http://localhost:8000/api/houses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  .then(data => data.json())
}
//componnent to create new house
export default function Create_new_House() {
  const navigate = useNavigate();
  //save the house state
  const [address, setAddress] = useState();
  const [currentValue, setCurrentValue] = useState();
  const [loanAmount, setLoanAmount] = useState();
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
      let res=null
      try{  
        res = await createHouse({
          address,
          currentValue,
          loanAmount
        });
        if(!res.res.error)
          navigate('/id', {
            state:{id:res.res}
            });
        else
          setError("server error")
      }
      catch(err){
        setError("server error")
      } 
    }

    }
    return (
      <Container component="main" maxWidth="xs" >
        <div >
          <Typography component="h1" variant="h5">
           Create A House
          </Typography>
          <form onSubmit={handleSubmit}  >
            <TextField
              onChange={e => setAddress(e.target.value)}
              required
              variant="outlined"
              margin="normal"
              fullWidth
              autoComplete="address"
              autoFocus
              id="outlined-required"
              label="address"
            />
            <TextField
              onChange={e => setCurrentValue(e.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="currentValue"
              autoComplete="currentValue"
              label="currentValue"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
             <TextField
              onChange={e => setLoanAmount(e.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="loanAmount"
              autoComplete="loanAmount"
              label="loanAmount"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
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
                  Create
              </Button>
            </Stack>
          </form>
        </div>
      </Container>
  );
}






