import { Grid, Typography } from "@material-ui/core";
import React from "react";
import UpBlogStart from "../../components/UpBlogStart";

const BIG = {
  image: null,
  title: "Hello from the other side",
  content: "loremad adwod soigjse sefnseo aefe awdawd segrs awdd sgse adwwad sgee adwadwa segseg adwad"
}


export default function Featured() {
  return (
    <>
      <Grid container justifyContent='center' >
        <Grid item style={{ maxWidth: "1350px", margin: "40px 0", }}>
          <Grid container direction='column' justifyContent='flex-start' alignContent='flex-start' style={{ paddingLeft: 8 }}>
            <Grid item>
              <Typography variant='h4' align='left' style={{ fontWeight: 200 }}>Featured Articles</Typography>
            </Grid>
            <div style={{ borderBottom: "2px black solid", marginBottom: 24, paddingBottom: 24, height: 2, width: 500 }}></div>
          </Grid>
          <Grid container>
            <UpBlogStart xs={6} title={BIG.title} image={BIG.image} content={BIG.content} height={500} width={"100%"} />
            <Grid item xs={6}>
              <Grid container>
                <UpBlogStart xs={6} title={BIG.title} image={BIG.image} content={BIG.content} height={300} width={"100%"} />
                <UpBlogStart xs={6} title={BIG.title} image={BIG.image} content={BIG.content} height={300} width={"100%"} />
                <UpBlogStart xs={6} title={BIG.title} image={BIG.image} content={BIG.content} height={300} width={"100%"} />
                <UpBlogStart xs={6} title={BIG.title} image={BIG.image} content={BIG.content} height={300} width={"100%"} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}