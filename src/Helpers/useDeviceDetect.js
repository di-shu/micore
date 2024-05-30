import { useEffect, useState } from "react";

const InitState = {
  mobile: false,
  tablet: false,
  laptop: false,
  minWidthLaptop: false,
  desktop: false,
};

export const useDeviceDetect = () => {
  const [device, setDevice] = useState({
    mobile: false,
    tablet: false,
    laptop: false,
    minWidthLaptop: false,
    desktop: false,
  });

  useEffect(() => {
    const width = window.innerWidth;

    if (width > 0 && width < 576) {
      setDevice({ ...device, mobile: true });
    }

    if (width > 767 && width < 991) {
      setDevice({ ...device, tablet: true });
    }

    if (width > 992) {
      setDevice({ ...device, minWidthLaptop: true });
    }

    if (width > 992 && width < 1199) {
      setDevice({ ...device, minWidthLaptop: true, laptop: true });
    }

    if (width > 1200) {
      setDevice({ ...device, minWidthLaptop: true, desktop: true });
    }
  }, []);

  return device;
};
