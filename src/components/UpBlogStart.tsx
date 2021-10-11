import { Typography } from '@material-ui/core'
import { Grid } from '@mui/material'
import React from 'react'

import Stock1 from '../static/stock1.png'

export default function UpBlogStart({ xs, image, title, content, height, width }: any) {
  return (
    <Grid item xs={xs} style={{ border: '8px white solid' }}>
      <Grid container direction='column'>
        <Grid item>
          <div style={{
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: image ? `url("${image}")` : `url("${Stock1}")`,
            height: height,
            maxWidth: "100%",
            width: width
          }}></div>
        </Grid>
        <Grid item >
          <Grid container style={{ maxWidth: 500, marginTop: 24 }} direction='column' justifyContent='left'>
            <Grid item>
              <Typography align='left' style={{ fontWeight: 400, fontSize: 12, color: "red" }}>ARTICLE</Typography>
            </Grid>
            <Grid item>
              <Typography align='left' style={{ fontWeight: 800, fontSize: height >= 500 ? 40 : 24, }}>
                {title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography align='left'>
                {content}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}