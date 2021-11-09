import { Typography } from "@material-ui/core";
import { Container, Grid } from "@mui/material";
import React from "react";
import { useParams } from 'react-router-dom'
import { NVTD } from '../../data/data'
import withLayout from "../../layout/withLayout";
import { RenderBlog } from '../../utils/renderEngine'

function NVTDBlogPage() {

  const { nvtdId } = useParams();

  return (
    <Grid>
      <Container>
        <Grid container style={{ margin: "80px 0" }}>
          <Grid item xs={12}>
            <Typography variant='h2'>{NVTD[nvtdId].title}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography align='left'>{NVTD[nvtdId].author}</Typography>
            <Typography align='left'>{NVTD[nvtdId].date}</Typography>
          </Grid>
        </Grid>
        <RenderBlog elements={NVTD[nvtdId].element} />
        <br />
        <br />
        <br />
        <br />
      </Container>
    </Grid>
  )
}

export default withLayout(NVTDBlogPage);