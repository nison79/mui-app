import React, { useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import CheckBox from '@material-ui/core/CheckBox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField'

import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography'


import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { orange,green } from '@material-ui/core/colors';


import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'


const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(50deg, #333, #FE6B8B , #1111)',
    border:0,
    borderRadius:15,
    color: 'white', 
    padding: '10px 30px',
    marginBottom: 30
  }
})

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 30,
    }
  },
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}


function CheckboxExample() {
  const [checked, setChecked] = useState(true)
  return(
    <div>
    <FormControlLabel
      control={
          <CheckBox
          checked={checked}
          icon={<DeleteIcon/>}
          checkedIcon={<SaveIcon />}
          onChange={(e)=>setChecked(e.target.checked)}
          inputProps={{
            'aria-label' : 'secondary checkbox'
          }}
          >
          </CheckBox>}
          label='Testing Checkbox'
        />    
    </div>

  )
}

function App() {
  
  return (
    <ThemeProvider theme ={theme}>
      <Container maxWidth='lg'>
        <div className="App">
          <header className="App-header">
          <AppBar>
            <ToolBar>
              <IconButton>
                <MenuIcon/>
              </IconButton>
              <Typography variant = 'h6'>
                  Destroy
              </Typography>
              <Button>
                Login
              </Button>
            </ToolBar>
          </AppBar>
          <Typography variant = 'h2' component='div' >
            Welcome DUDE
          </Typography>
          <Typography variant = 'subtitle1' >
            learn something
          </Typography>        
          <ButtonStyled/>

          <Grid container spacing={2} justify='center'>
            <Grid item xs={3} sm={6}>
              <Paper style={{ height:75, width:'100%' }}/>
            </Grid>
            <Grid item xs={3} sm={6}>
              <Paper style={{ height:75, width:'100%' }}/>
            </Grid>
            <Grid item xs={3} lg={12}>
              <Paper style={{ height:75, width:'100' }}/>
            </Grid>
          </Grid>

          <TextField
          variant='filled'
          color='secondary'
          type='email'
          label='The Time'
          placeholder = 'georgenison@gmail.com'
          />
          <CheckboxExample/>
            <ButtonGroup variant='contained' color = 'primary'>
              <Button 
                startIcon={<SaveIcon />}
                onClick={()=>alert('oooo careful')} 
                >
                  Save
              </Button> 

              <Button 
                endIcon={<DeleteIcon />}
                onClick={()=>alert('oooo careful')}
                color= 'secondary'
              >
              Discard
              </Button> 
            </ButtonGroup>
          </header>
        </div>
        </Container>
    </ThemeProvider>
  );
}

export default App;
