// utils/analytics.js
// Google Analytics 4 helper

export const logEvent = (eventName, params = {}) => {
  if (window.gtag) {
    window.gtag("event", eventName, params);
  } else {
    console.warn("Google Analytics not initialized");
  }
};

