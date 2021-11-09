import React, { useEffect, useState } from "react";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Avatar, IconButton, Typography } from "@material-ui/core";
import { Grid } from "@mui/material";
import withLayout from "../../layout/withLayout";
import { Link } from 'react-router-dom'
import { HISTORY_FACE } from '../../data/data'

function Gmls() {
  const [index, setIndex] = useState<number>(0);
  const [selectData, setSelectData] = useState(HISTORY_FACE[index])

  useEffect(() => {
    setSelectData(HISTORY_FACE[index]);
  }, [index])

  function SmallDot({ i, selectedIndex }: any) {
    return <Grid onClick={() => { setIndex(i) }}>
      <div style={{ borderRadius: 100, background: i === selectedIndex ? "red" : "black", width: 16, height: 16 }}>
      </div>
    </Grid>
  }

  function handleSwitch(action: string) {
    if (action === "+") {
      index < HISTORY_FACE.length - 1 ? setIndex(index + 1) : setIndex(0);
    }
    if (action === "-") {
      index > 0 ? setIndex(index - 1) : setIndex(HISTORY_FACE.length - 1);
    }
  }

  return (
    <Grid container justifyContent='center'>
      <div style={{ maxWidth: 1440, marginTop: 56 }}>
        <Grid container>
          <Typography style={{ fontSize: 40, fontWeight: 100, marginBottom: 56 }}>GƯƠNG MẶT LỊCH SỬ</Typography>
        </Grid>
        <Grid container justifyContent='center'>
          <Grid container justifyContent='space-evenly' alignItems='center'>
            <Grid item>
              <IconButton onClick={() => { handleSwitch("-") }}>
                <NavigateBeforeIcon style={{ color: "black", height: 100, width: 100 }} />
              </IconButton>
            </Grid>
            <Grid item>
              <Avatar src={selectData.coverImg} style={{ height: 400, width: 400 }} />
            </Grid>
            <Grid item>
              <IconButton onClick={() => { handleSwitch("+") }}>
                <NavigateNextIcon style={{ color: "black", height: 100, width: 100 }} />
              </IconButton>
            </Grid>
          </Grid>
          <Grid container direction='column' alignItems='center'>
            <Grid item>
              <Link to={`gmls/${selectData.id}`} style={{ textDecoration: "none", color: "black" }}>
                <Typography style={{ marginTop: 40, fontSize: 40, fontWeight: 600 }}>{selectData.name}</Typography>
              </Link>
            </Grid>
            <Grid item style={{ maxWidth: 500 }}>
              <Typography style={{ marginTop: 40, marginBottom: 20 }}>{selectData.shortDes}</Typography>
            </Grid>
            <Grid container justifyContent='space-evenly' style={{ maxWidth: 400, margin: "40px 0px 100px 0px" }}>
              {HISTORY_FACE?.map(e => (<SmallDot key={e.id} i={e.id} selectedIndex={index}></SmallDot>))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Grid>
  )
}

export default withLayout(Gmls);