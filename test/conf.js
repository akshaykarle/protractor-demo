// Tests for the calculator.
exports.config = {
  framework: 'jasmine2',
  
  seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: [
    'spec.js'
  ]
};

if (process.env.SNAP_CI) {
  exports.config.chromeDriver = '/usr/local/bin/chromedriver';
}
