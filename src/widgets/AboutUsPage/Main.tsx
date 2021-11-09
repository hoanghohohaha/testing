import { Grid, Typography } from '@material-ui/core'
import React from 'react'

export default function MainAboutUs() {

  return (
    <>
      <Grid container direction='column' justifyContent='center' alignContent='center' style={{ marginTop: 120 }}>
        <Grid item>
          <Typography style={{ fontWeight: 800, fontSize: 64 }}>Về chúng tôi</Typography>
        </Grid>
        <Grid item style={{ width: 700, margin: "40px 0", paddingBottom: 80 }}>
          <Typography>
            Một ngày không xa, khi những gì tân tiến, hiện đại lên ngôi, những giai thoại về các triều đại lịch sử của dân tộc có còn? Trước viễn cảnh đó, chúng tôi - thế hệ trẻ sinh ra và lớn lên trong hoàn cảnh đất nước đã vắng bóng quân thù - luôn ý thức được trách nhiệm gìn giữ và phát huy những trang sử huy hoàng của dân tộc, để con đường phát triển và hội nhập của con người Việt Nam không vô tình bỏ quên những không gian ký ức. Bảo tàng lịch sử các triều đại Việt Nam giúp chúng tôi hoàn thành trách nhiệm ấy.
          </Typography>
        </Grid>
      </Grid></>
  )
}