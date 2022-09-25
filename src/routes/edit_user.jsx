import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';

import * as React from 'react';
import EditIcon from '@mui/icons-material/Edit';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function EditUser() {
  let params = useParams();

  const [userInfo, setUserInfo] = useState({})
  const users_url = `https://62245c1c3af069a0f9b408a2.mockapi.io/users/${params.id}`;


  useEffect(() => {

        fetch(users_url)
        .then(response => response.json())
        .then(data => setUserInfo(data))
      
    }, []);

    return (
      
      <main style={{ padding: "1rem 0" }}>
        {console.log(userInfo)}
        <h2>Edit User</h2>
        <Formik
      initialValues={{
        FirstName: userInfo.FirstName ? userInfo.FirstName :"",
        LastName: userInfo.LastName ? userInfo.LastName :"",
        emailID: userInfo.emailID ? userInfo.emailID : "",
        designation: userInfo.designation ? userInfo.designation : "",
      }}
      onSubmit={async (values) => {
        console.log(values);
        fetch(users_url, {method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(values)})
      }}
      enableReinitialize={true}
    >{formik => (
      <Form onSubmit={formik.handleSubmit}>


        <Card sx={{ width:'20em', height:'10em', backgroundColor:'lightblue', marginBottom: '1em', textAlign:'Left'}}>
          <CardContent>
          <Typography sx={{ fontSize: 14,}} color="black" gutterBottom>
            <label htmlFor="FirstName">First Name </label>
            <input id="FirstName" name="FirstName" placeholder="Jane" {...formik.getFieldProps('FirstName')}/>
          </Typography>
          <Typography sx={{ fontSize: 14,}} color="black" gutterBottom>
            <label htmlFor="LastName">Last Name </label>
            <input id="LastName" name="LastName" placeholder="Doe" {...formik.getFieldProps('LastName')}/>
          </Typography>
          <Typography sx={{ fontSize: 14,}} color="black" gutterBottom>  
            <label htmlFor="emailID">Email </label>
            <input
              id="emailID"
              name="emailID"
              placeholder="jane@acme.com"
              type="email"
              {...formik.getFieldProps('emailID')}
            />
            </Typography>
            <Typography sx={{ fontSize: 14,}} color="black" gutterBottom>
            <label htmlFor="designation">Designation </label>
            <input id="designation" name="designation" placeholder="software engineer" {...formik.getFieldProps('designation')}/>
            </Typography>
            <Button color="primary" variant="contained" fullWidth type="submit">
          SAVE
        </Button>
        </CardContent>
        </Card>
      </Form>
    )}
    </Formik>
      </main>
    );
  }