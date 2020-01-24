import React from 'react';
import Top from '../../src/components/Top'

export default {
  title: 'Top',
  component: Top,
  excludeStories: /.*Data$/,
};

export const topStory = () => <Top />

topStory.story = {
  name: 'Top'
}
