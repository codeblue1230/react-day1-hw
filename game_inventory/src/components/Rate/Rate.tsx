import React from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/system'
import { Link } from 'react-router-dom'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';


const NavLink = styled(Link)({
    color: 'rgb(28,28,28)',
    textDecoration: 'none'
})

const Title = styled('h1')({
    fontSize: '50px',
    textAlign: 'center'
})

const gameTitle = styled('h2')({
    fontSize: '50px',
    textAlign: 'center'
})

const SmallTitle = styled('div')({
    textAlign: 'center'
})

export const Rate = () => {
    return (
        <section>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Typography variant="h6" color="inherit" component="div">
                            <NavLink to="/">Home</NavLink>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Stack spacing={1}>
                <Title>Rate The Genre</Title>
                <SmallTitle>
                    <h3>FIrst Person Shoorters</h3>
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                    <h3>RPGs</h3>
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                    <h3>Sports</h3>
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                    <h3>Racing/Simulation</h3>
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                    <h3>Sandbox</h3>
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                    <h3>Puzzle</h3>
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                </SmallTitle>
            </Stack>
            <SmallTitle>
                <FormControl >
                    <FormLabel id="demo-radio-buttons-group-label" sx={{color: 'Blue', marginTop: '15px'}}>System of Choice</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                            >
                        <FormControlLabel value="Playstation" control={<Radio />} label="PlayStation" />
                        <FormControlLabel value="Xbox" control={<Radio />} label="Xbox" />
                        <FormControlLabel value="PC" control={<Radio />} label="PC" />
                        <FormControlLabel value="Other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
            </SmallTitle>
            <SmallTitle>
                <Box
                sx={{
                    width: 500,
                    maxWidth: '100%',
                    margin: '0 auto 0 auto'
                }}
                >
                    <TextField fullWidth label="What is your favorite game of all time? I know it's a tough question." id="textbox"/>
                </Box>
            </SmallTitle>
        </section>
        )
}
