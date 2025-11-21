'use client';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
export default function Home() {
  const handleSubmit = (event) => {
  console.log("handling submit");
  event.preventDefault();
  const data = new FormData(event.currentTarget);

   let email = data.get('email')
   let pass = data.get('pass')
   let address = data.get('address')
   let tel = data.get('tel')
   let secondemail = data.get('secondemail')
   let secondpassword = data.get('secondpassword')

   console.log("Sent email:" + email)
   console.log("Sent pass:" + pass)
   console.log("Sent address:" + address)
   console.log("Sent tel:" + tel)
   console.log("Sent secondemail:" + secondemail)
   console.log("Sent secondpassword:" + secondpassword)


   runDBCallAsync(`http://localhost:3000/api/login?email=${email}&pass=${pass}&address=${address}&tel=${tel}&secondemail=${secondemail}&secondpassword=${secondpassword}`)
 }; // end handle submit
async function runDBCallAsync(url) {
    const res = await fetch(url);
    const data = await res.json();
    if(data.data== "valid"){
      console.log("login is valid!")
    } else {
      console.log("not valid  ")
    }
  }
  return (
    <Container maxWidth="sm">
    <Box sx={{ height: '100vh' }} >
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
    <TextField
      margin="normal"
      required
      fullWidth
      id="email"
      label="Email Address"
      name="email"
      autoComplete="email"
      autoFocus
    />
    <TextField
      margin="normal"
      required
      fullWidth
      name="pass"
      label="Password"
      type="pass"
      id="pass"
      autoComplete="current-password"
    />
    <TextField
          margin="normal"
          required
          fullWidth
          name="address"
          label="Address"
          type="pass"
          id="address"
          autoComplete="current-password"
        />
    <TextField
          margin="normal"
          required
          fullWidth
          name="tel"
          label="Telephone Number"
          type="pass"
          id="tel"
          autoComplete="current-password"
        />
    <TextField
          margin="normal"
          required
          fullWidth
          name="secondemail"
          label="Second Email"
          type="pass"
          id="secondemail"
          autoComplete="current-password"
        />
    <TextField
          margin="normal"
          required
          fullWidth
          name="secondpassword"
          label="Second Password"
          type="pass"
          id="secondpassword"
          autoComplete="current-password"
        />

    <FormControlLabel
      control={<Checkbox value="remember" color="primary" />}
      label="Remember me"
    />
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
    >
      Sign In
    </Button>
</Box>
</Box>
       </Container>

  ); // end return

}

