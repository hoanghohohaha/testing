import { Grid, Typography } from "@mui/material"
import parse from 'html-react-parser';
import React from 'react'

interface IElement {
  type: string;
  content: any;
}


function RenderElement(data: IElement, index: number) {
  if (data.type === "text") {
    return <Typography align='justify' style={{ fontFamily: "Raleway", marginTop: 16, fontSize: 19 }
    }> {data.content} </Typography>
  }
  if (data.type === 'bold') {
    return <Typography style={{ fontFamily: "Raleway", margin: 24, fontSize: 24, fontWeight: 800 }} align='left' > {data.content} </Typography>
  }
  if (data.type === 'italic') {
    return <Typography align='justify' style={{ fontFamily: "Raleway", marginTop: 16, fontSize: 19, fontStyle: "italic" }
    }> {data.content} </Typography>
  }
  if (data.type === 'imagetext') {
    return <Typography align='center' style={{ fontFamily: "Raleway", marginTop: 24, fontStyle: "italic" }
    }> {data.content} </Typography>
  }
  if (data.type === 'source') {
    return <Typography align='right' style={{ fontFamily: "Raleway", fontStyle: "italic" }
    }> {data.content} </Typography>
  }
  if (data.type === 'image') {
    return <Grid container justifyContent='center' >
      <div style={
        {
          marginTop: 24,
          width: 500, backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          height: 400,
          backgroundImage: `url("${data.content}")`,
        }
      }> </div>
    </Grid>
  }
  if (data.type === 'iframe') {
    return <Grid container justifyContent='center' >
      {parse(data.content)}
    </Grid>
  }
}

function RenderBlog({ elements }: any) {
  return <Grid>
    {elements.map((e, i) => (RenderElement(e, i)))}
  </Grid>
}

export { RenderBlog }