import { addParameters } from '@storybook/client-api';
 
addParameters({
  viewport: {
    viewports: {
      desktopLarge: {
        name: 'Desktop Large @1440px',
        styles: {
          width: '1440px',
          height: '900px',
        },
      },
      desktop: {
        name: 'Desktop @1024px',
        styles: {
          width: '1024px',
          height: '768px',
        },
      },
      tablet: {
        name: 'Tablet @768px',
        styles: {
          width: '768px',
          height: '480px',
        },
      },
      mobile: {
        name: 'Mobile @375px',
        styles: {
          width: '375px',
          height: '667px',
        },
      },
    },
    defaultViewport: 'responsive',
  },
});
