import React from 'react';
import withLayout from '../../layout/withLayout';
import MainAboutUs from '../../widgets/AboutUsPage/Main';
import Quotes from '../../widgets/AboutUsPage/Quote';
import { Container, Typography } from '@material-ui/core';

function AboutPage() {
  return <div>
    <MainAboutUs />
    <Quotes content="Không có ngôn từ, không có viết lách và không có sách, sẽ không có lịch sử, không có khái niệm về nhân loại. - Hermann Hesse" />
  </div>
}


export default withLayout(AboutPage)