import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import withLayout from '../../layout/withLayout';
import SideBlogPreview from '../../components/SideBlogPreview';
import { NVTD } from '../../data/data';
import { RenderBlog } from '../../utils/renderEngine'

function Nvtd() {
  return <>
    <Grid container justifyContent='center' style={{ marginTop: 80, marginBottom: 80 }}>
      <Grid container justifyContent='center'>
        <Typography style={{ fontSize: 40, fontWeight: 100, marginBottom: 56 }}>NHIỆM VỤ THỜI ĐẠI</Typography>
      </Grid>
      <Grid container justifyContent='center'>
        <SideBlogPreview href='nvtd/0' id={NVTD[0].id} title={NVTD[0].title} content={NVTD[0].shortDes} revert={false} image={NVTD[0].coverImg} />
        <SideBlogPreview href='nvtd/1' id={NVTD[1].id} title={NVTD[1].title} content={NVTD[1].shortDes} image={NVTD[1].coverImg} revert={true} />
        <SideBlogPreview href='nvtd/2' id={NVTD[2].id} title={NVTD[2].title} content={NVTD[2].shortDes} image={NVTD[2].coverImg} revert={false} />
      </Grid>
    </Grid>
  </>
}

export default withLayout(Nvtd);