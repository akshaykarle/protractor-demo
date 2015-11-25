// Tests for the calculator.
exports.config = {
  framework: 'jasmine2',
  chromeDriver = '/usr/local/bin/chromedriver',
  seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: [
    'spec.js'
  ]
};

if (process.env.SNAP_CI) {

}
