import { Typography } from "@material-ui/core";
import { Container, Grid } from "@mui/material";
import React from "react";
import { useParams } from 'react-router-dom'
import { NVTD } from '../../data/data'
import withLayout from "../../layout/withLayout";
import { RenderBlog } from '../../utils/renderEngine'
import { HISTORY_FACE } from '../../data/data'

function GMLSBlogPage() {

  const { gmlsId } = useParams();

  return (
    <Grid>
      <Container>
        <Grid container style={{ margin: "80px 0" }}>
          <Grid item xs={12}>
            <Typography variant='h2'>{HISTORY_FACE[gmlsId].title}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography align='left'>{HISTORY_FACE[gmlsId].author}</Typography>
            <Typography align='left'>{HISTORY_FACE[gmlsId].date}</Typography>
          </Grid>
        </Grid>
        <RenderBlog elements={HISTORY_FACE[gmlsId].element} />
        <br />
        <br />
        <br />
        <br />
      </Container>
    </Grid>
  )
}

export default withLayout(GMLSBlogPage);