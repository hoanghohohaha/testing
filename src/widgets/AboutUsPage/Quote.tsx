import { Grid, Typography, Button } from '@mui/material';
import React from 'react';

export default function Quotes({ content, button, buttonContent }: any) {

  return (
    <div style={{
      width: "100%", backgroundAttachment: "fixed", backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundImage: `url("https://i.guim.co.uk/img/media/19cb8a84dc8716884bd8bcd438f95ff18b5cff68/0_591_2953_1771/master/2953.jpg?width=1200&quality=85&auto=format&fit=max&s=b4447c6253c4e0e5b065e8d2485ab36d")`,
    }}>
      <Grid container style={{ backgroundColor: "rgba(36,39,44,0.8)" }} justifyContent='center'>
        <Grid item>
          <Grid container justifyContent='space-evenly' style={{ width: "100%", height: 500, padding: '48px 0' }} alignItems='center'>
            <Grid item xs={12}>
              <Grid container justifyContent='center' direction='column' alignItems='center'>
                <Grid item style={{ marginTop: 24, width: "65%" }}>
                  <Typography variant='h3' style={{ fontWeight: 600, fontSize: 40, color: 'white' }}>{content}</Typography>
                </Grid>
                <Grid item style={{ marginTop: 24, display: button ? "" : "none" }}>
                  <Button variant='contained' style={{ boxShadow: "none", borderRadius: 0, padding: "8px 48px", background: "#C21212" }}><Typography style={{ color: "white" }}>LEARN MORE</Typography></Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid >
    </div >
  )
}