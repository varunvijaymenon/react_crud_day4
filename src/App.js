import logo from './logo.svg';
import './App.css';
import { Outlet,Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import * as React from 'react';
import EditIcon from '@mui/icons-material/Edit';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function App() {

  const [usersList, setUserslist] = useState([])
  const users_url = 'https://62245c1c3af069a0f9b408a2.mockapi.io/users';

  useEffect(() => {

        fetch(users_url)
        .then(response => response.json())
        .then(data => setUserslist(data))
      
    
    }, []);


  return (
    <div className="App">
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/create-user">Create User</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/users">List Users</Link>

      </nav>

      <div className='user_container'>
      {usersList.map(user => {
        return (
          <Card sx={{ width:'20em', height:'12em', backgroundColor:'lightblue', marginBottom: '1em', textAlign:'Left'}} key={user.id}>
            <CardContent >
              <Typography sx={{ fontSize: 14,}} color="black" gutterBottom>
              ID: {user.id}
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="black" gutterBottom>
              First Name: {user.FirstName}
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="black" gutterBottom>
              Last Name: {user.LastName}
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="black" gutterBottom>
              Email ID: {user.emailID}
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="black" gutterBottom>
              Designation: {user.designation}
              </Typography>
          
              <Button variant="outlined" startIcon={<EditIcon />} component={Link} to={`/edit-user/${ user.id }`}>
                Edit
              </Button>
              </CardContent>
          </Card>
        )
        })}
        </div>
      {/* <Outlet/> */}
    </div>
  );
}

export default App;
