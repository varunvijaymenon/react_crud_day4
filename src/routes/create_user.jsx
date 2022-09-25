
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import * as React from 'react';
import EditIcon from '@mui/icons-material/Edit';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CreateUser() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Create User</h2>
        <Formik
      initialValues={{
        FirstName: '',
        LastName: '',
        emailID: '',
        designation: '',
      }}
      onSubmit={async (values) => {
        console.log(values);
        fetch('https://62245c1c3af069a0f9b408a2.mockapi.io/users', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(values)})
        .then(response => {
          if (response.status === 201){
            alert("Created user successfully")
          }
          else{
            alert("Create user Failed")
          }
        
        })
        // await new Promise((r) => setTimeout(r, 500));
        // alert(JSON.stringify(values, null, 2));
        console.log(JSON.stringify(values))
      }}
    >
      <Form>
        <Card sx={{ width:'20em', height:'11em', backgroundColor:'lightblue', marginBottom: '1em', textAlign:'Left'}}>
          <CardContent>
          <label htmlFor="FirstName">First Name </label>
          <Field id="FirstName" name="FirstName" placeholder="Jane" /><br/>
          <label htmlFor="LastName">Last Name </label>
          <Field id="LastName" name="LastName" placeholder="Doe" /><br/>

          <label htmlFor="emailID">Email </label>
          <Field
            id="emailID"
            name="emailID"
            placeholder="jane@acme.com"
            type="email"
          /><br/>
          
          <label htmlFor="designation">Designation </label>
          <Field id="designation" name="designation" placeholder="Software Engineer" /><br/><br/>
        
          <Button color="primary" variant="contained" fullWidth type="submit">
            SAVE
          </Button>
        </CardContent>
      </Card>
      </Form>
    </Formik>
      </main>
    );
  }
