import { Avatar, Grid, IconButton, Typography } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom'
import React from 'react'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { TextField } from '@mui/material';


const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white',
  },
  '& label': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  }, '& .MuiInputBase-input': {
    color: "white"
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
});

export default function Navbar() {

  return <>
    <Grid container justifyContent='space-between' alignItems='center' style={{ padding: "0 50px", background: "#181D23", }}>
      <Grid item>
        <Grid container justifyContent='flex-start' alignItems='center' style={{ width: "200%", paddingTop: 16, paddingBottom: 16 }}>
          <Grid item style={{ height: "72px" }}>
            <Avatar src='https://doagahehoc242.cloudfront.net/uploads/posts/801/082936ad_12072021-zoe-image-7.jpg' style={{ padding: "auto", height: 72, width: 72 }}></Avatar>
          </Grid>
          <Grid item style={{ marginLeft: 24 }}>
            <Grid container direction='column'>
              <Typography variant='h3' align='left' style={{ color: "white", fontSize: 40, fontWeight: 100 }}>WEB TRIEU DAI</Typography>
              <Typography variant='h5' align='left' style={{ color: "white", fontSize: 16, fontWeight: 400 }}>English</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container>
          <Grid item>
            <Grid container>
              <Grid item>
                <IconButton href='fb.com'>
                  <FacebookIcon style={{ color: "white" }} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton href='fb.com'>
                  <InstagramIcon style={{ color: "white" }} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton href='fb.com'>
                  <LinkedInIcon style={{ color: "white" }} />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <CssTextField style={{ color: "white" }} id="outlined-basic" label="Search" placeholder='Search' variant="outlined" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <Grid container alignItems='center' style={{ padding: "0 50px", background: "#181D23", }}>
      <div style={{ borderTop: "1px white solid", height: 2, width: "100%" }}> </div>
      <NavItem link="" text='Trang chủ' />
      <NavItem link='tlls' text='Tài liệu lịch sử' />
      <NavItem link='gtls' text='Giai thoại lịch sử' />
      <NavItem link='gmls' text='Gương mặt lịch sử' />
      <NavItem link='nvtd' text='Nhiệm vụ thời đại' />
      <NavItem link="about" text='Về chúng tôi' />
    </Grid>
  </>
}

function NavItem({ link, text }: any) {
  const location = useLocation();

  console.log(location && location.pathname)

  return <Grid style={{ paddingLeft: 16, paddingTop: 16, paddingBottom: 24, }}>
    <Link to={`/${link}`} style={{
      textDecoration: "none",
    }}
    >
      <Typography style={{ color: "white", fontWeight: (location.pathname === "/" && link === "") || (link !== "" && location?.pathname.includes(link)) ? 600 : 100 }}>{text}</Typography>
    </Link>
  </Grid>

}