import * as React from 'react';
//import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
//import FormControlLabel from '@mui/material/FormControlLabel';
//import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//import { makeStyles } from '@material-ui/core/styles';



// function Copyright(props: any) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }
//const useStyles = makeStyles((theme) => ({
  // root: {
  //   height: '100vh',
  // },
  // image: {
  //   backgroundImage: 'url(https://cdn.discordapp.com/attachments/737315317608349707/1073169940883984424/image2.png)',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  // },



const theme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get('username'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://cdn.discordapp.com/attachments/737315317608349707/1073169940883984424/image2.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 20,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div>
            <img src="https://cdn.discordapp.com/attachments/737315317608349707/1073146370011181066/image.png" height={120} width={120}></img>
            <br></br>
            </div>
            <Typography component="h1" variant="h5">
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                InputLabelProps={{style: {fontFamily:"ibm_plex_sans_thairegular"}}}
                label="ชื่อผู้ใช้งาน"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                InputLabelProps={{style: {fontFamily:"ibm_plex_sans_thairegular"}}}
                label="รหัสผ่าน"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Grid container>
                <Grid item >
                  <Link href="#" variant="body2" fontFamily={'ibm_plex_sans_thairegular'} align="left" >
                    ลืมรหัสผ่าน
                  </Link>
                </Grid>
        
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 ,fontSize: 20, fontFamily: 'ibm_plex_sans_thairegular'}}
              >
                เข้าสู่ระบบ
              </Button>
              </Grid>
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}