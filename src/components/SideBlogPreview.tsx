import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import Stock1 from '../static/stock1.png';
import { Link } from 'react-router-dom'

export default function SideBlogPreview({ href, revert, image, title, content, data }: any) {
  return (
    <Grid container justifyContent='center' style={{ marginTop: 24, marginBottom: 24 }}>
      <Link to={href} style={{ textDecoration: "none", color: "black" }}>
        <Grid container direction='row' justifyContent='center' alignItems='center'>
          <Grid item>
            <div style={{
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundImage: image ? `url("${image}")` : `url("${Stock1}")`,
              height: 300,
              width: 400,
              marginRight: 100,
              display: revert ? "none" : ""
            }}></div>
          </Grid>
          <Grid item  >
            <Grid container style={{ maxWidth: 500, marginTop: -40 }} direction='column' justifyContent='center' alignItems={revert ? 'flex-end' : 'flex-start'}>
              <Grid item>
                <Typography align={revert ? 'right' : 'left'} style={{ fontWeight: 400, fontSize: 12, color: "red" }}>ARTICLE</Typography>
              </Grid>
              <Grid item>
                <Typography align={revert ? 'right' : 'left'} style={{ fontWeight: 800, fontSize: 24, }}>
                  {title}
                </Typography>
              </Grid>
              <Grid item>
                <Typography align={revert ? 'right' : 'left'}>
                  {content.slice(0, 400) + "..."}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <div style={{
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundImage: image ? `url("${image}")` : `url("${Stock1}")`,
              height: 300,
              width: 400,
              marginLeft: 100,
              display: !revert ? "none" : ""
            }}></div>
          </Grid>
        </Grid>
      </Link>
    </Grid>
  )
}