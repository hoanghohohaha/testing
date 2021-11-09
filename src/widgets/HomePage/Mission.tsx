import { Button, Typography } from '@material-ui/core';
import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';

import STOCK1 from '../../static/stock1.png'
import STOCK2 from '../../static/stock2.jpg'
import STOCK3 from '../../static/stock3.jpg'

interface DisplayImage {
  [key: string]: any;
}

const images: DisplayImage[] = [{
  id: 0,
  image: STOCK1,
}, {
  id: 1,
  image: STOCK2,
}, {
  id: 2,
  image: STOCK3,
}]

export default function MissionSection() {
  const [index, setIndex] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState(images[index]);

  useEffect(() => {
    setSelectedImage(images[index]);
  }, [index])

  function NavButton({ value, i }: any) {
    return (
      <div onClick={() => { setIndex(value) }}
        style={{ cursor: "pointer", background: i === index ? "red" : "white", height: 20, width: 20, borderRadius: 50 }}>
      </div>
    )
  }

  return (
    <div style={{
      width: "100%", backgroundAttachment: "fixed", backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundImage: `url("${selectedImage?.image}")`,
    }}>
      <div style={{ backgroundColor: "rgba(36,39,44,0.8)" }}>
        <Grid container justifyContent='space-evenly' style={{ width: "80%", height: 700, margin: 'auto', padding: '48px 0' }} alignItems='center'>
          <Grid item xs={5}>
            <Grid container justifyContent='center' direction='column'>
              <Grid item style={{ marginTop: 24 }}>
                <Typography variant='h3' style={{ fontWeight: 600, fontSize: 40, color: 'white' }}>Sứ Mệnh</Typography>
              </Grid>
              <Grid item style={{ marginTop: 24 }}>
                <Typography variant='h4' style={{ fontWeight: 200, color: "white" }}>Gìn giữ những giai thoại/ chính sử về các triều đại trong lịch sử dân tộc có thể sẽ biến mất không lâu sau này. </Typography>
              </Grid>
              <Grid item style={{ marginTop: 24 }}>
                <Button variant='contained' style={{ boxShadow: "none", borderRadius: 0, padding: "8px 48px", background: "#C21212" }}><Typography style={{ color: "white" }}>TÌM HIỂU THÊM</Typography></Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={5}>
            <Grid container justifyContent='center'>
              <div style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage: `url("${selectedImage?.image}")`,
                height: "300px",
                width: "100%",
                maxWidth: 480
              }}></div>
            </Grid>
            <Grid container justifyContent='center'>
              <Grid item style={{ width: "50%", padding: "18px 50px" }}>
                <Grid container justifyContent='space-evenly' >
                  {images?.map(e => <NavButton i={e.id} value={e.id} key={e.id} />)}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}