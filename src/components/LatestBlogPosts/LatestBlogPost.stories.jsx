import React from 'react';
import LatestBlogPost from './LatestBlogPost';
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: 'LatestBlogPost',
  decorators: [withKnobs]
};

export const latestBlogPost = () => <LatestBlogPost />;
