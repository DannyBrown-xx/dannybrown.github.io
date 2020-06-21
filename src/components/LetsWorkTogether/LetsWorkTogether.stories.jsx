import React from 'react';
import LetsWorkTogether from './LetsWorkTogether';
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: 'LetsWorkTogether',
  decorators: [withKnobs]
};

export const latestBlogPost = () => <LetsWorkTogether />;
