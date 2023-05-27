const logger = require('./logger');

  
  function showError() {
    throw new Error("ERROR!");
  }
  
  try {
    showError();
  } catch (e) {
    logger.log("error", e.toString());
  }

