// Tests for the calculator.
exports.config = {
  framework: 'jasmine2',
  
  capabilities: {
    browserName: 'chrome'
  },
  
  specs: [
    'spec.js'
  ]
};

if (process.env.SNAP_CI) {
  exports.config.chromeDriver = '/usr/local/bin/chromedriver';
}
