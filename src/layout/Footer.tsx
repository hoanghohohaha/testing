import { Avatar, IconButton, Typography } from '@material-ui/core'
import { Grid } from '@mui/material'
import React from 'react'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return <>
    <Grid container style={{ background: "#181D23", padding: "40px 24px 24px 24px" }} justifyContent='space-around' alignItems='center'>
      <Grid item xs={4} style={{ marginLeft: -100 }}>
        <Grid container direction='column' alignItems='center' >
          <Avatar src='https://doagahehoc242.cloudfront.net/uploads/posts/801/082936ad_12072021-zoe-image-7.jpg' style={{ height: 80, width: 80 }} />
          <Grid>
            <Grid item>
              <Typography style={{ color: "white" }} variant='h2'>Bảo Tàng Lịch Sử Các Triều Đại Việt Nam</Typography>
            </Grid>
            <Grid item>
              <Typography style={{ color: "white" }} variant='h5'>The Museum of Vietnamese Ancient Dynasties</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Grid container direction='column' alignItems='flex-start' justifyContent='flex-start'>
          <Grid item style={{ marginBottom: 24 }}>
            <Typography variant='h4' style={{ color: "white" }} ><b>Contact</b></Typography>
          </Grid>
          <Grid item>
            <Grid container alignItems='center'>
              <Grid item xs={1}>
                <IconButton>
                  <FacebookIcon style={{ color: "white" }} />
                </IconButton>
              </Grid>
              <Grid item xs={11} style={{ paddingLeft: 16 }}>
                <Typography align='left' style={{ color: "white" }}>email@gmail.com</Typography>
              </Grid>
              <Grid item xs={1}>
                <IconButton>
                  <InstagramIcon style={{ color: "white" }} />
                </IconButton>
              </Grid>
              <Grid item xs={11} style={{ paddingLeft: 16 }}>
                <Typography align='left' style={{ color: "white" }}> 4200 Whitman</Typography>
              </Grid>
              <Grid item xs={1}>
                <IconButton>
                  <LinkedInIcon style={{ color: "white" }} />
                </IconButton>
              </Grid>
              <Grid item xs={11} style={{ paddingLeft: 16 }}>
                <Typography align='left' style={{ color: "white" }}>0123456789</Typography>
              </Grid>black
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <Grid container style={{ background: "#181D23" }} justifyContent='center'>
      <Typography style={{ color: 'white', margin: "8px 0px 8px 40px" }}>@WEBTRIEUDAI2021. Developed by Buc with ☕</Typography>
    </Grid>
  </>
}