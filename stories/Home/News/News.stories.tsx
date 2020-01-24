import React from 'react'
import News from '../../../src/components/Home/News'

export default {
  title: 'Home/News',
  component: News,
};

export const news = () => <News />;

news.story = {
  name: 'News',
};
