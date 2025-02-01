import { ThemeProvider } from "styled-components";

const size = {
  xsm:'320px', //Tiny Devices
  small: '425px', // Extra Small Devices (Phones)
  mobile: '576px', // Small Devices (Phones)
  tablet: '768px', // Small Devices (Tablets)
  laptop: '1024px', // Medium Devices (Tablets and Small Laptops)
  desktop: '1440px', // Large Devices (Desktops)
};

const theme = {
  device: {
    // min-width queries (mobile-first)
    min: {
      xsm: `(min-width: ${size.xsm})`, // Tiny Devices and larger
      small: `(min-width: ${size.small})`, // Small Devices and larger
      mobile: `(min-width: ${size.mobile})`, // Mobile Devices and larger
      tablet: `(min-width: ${size.tablet})`, // Tablet Devices and larger
      laptop: `(min-width: ${size.laptop})`, // Laptop Devices and larger
      desktop: `(min-width: ${size.desktop})`, // Desktop Devices and larger
    },
    // max-width queries
    max: {
      xsm: `(max-width: ${size.xsm})`, // Tiny Devices
      small: `(max-width: ${size.small})`, // Extra Small Devices
      mobile: `(max-width: ${size.mobile})`, // Small Devices and smaller
      tablet: `(max-width: ${size.tablet})`, // Tablet Devices and smaller
      laptop: `(max-width: ${size.laptop})`, // Laptop Devices and smaller
      desktop: `(max-width: ${size.desktop})`, // Desktop Devices and smaller
    },
    range:{
        small: `(min-width: ${size.xsm}) and (max-width: ${parseInt(size.tablet) - 1}px)`, // 425px - 767px
        tablet: `(min-width: ${size.tablet}) and (max-width: ${parseInt(size.laptop) - 1}px)`, // 768px - 1023px
        laptop: `(min-width: ${size.laptop}) and (max-width: ${parseInt(size.desktop) - 1}px)`, // 1024px - 1439px  
    }
  },
};

// Theme provider component
// eslint-disable-next-line react/prop-types
const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;