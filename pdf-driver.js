// Source - https://stackoverflow.com/a/78166895
// Posted by Bojidar Marinov
// Retrieved 2026-06-21, License - CC BY-SA 4.0

(async function() {
  const {Builder} = require('selenium-webdriver');
  const firefox = require('selenium-webdriver/firefox');
  const {writeFileSync} = require('fs');

  let options = new firefox.Options().addArguments('--headless');
  let driver = await new Builder().forBrowser('firefox').setFirefoxOptions(options).build();

  try {
    await driver.get(process.argv[2]);

    let printResult = await driver.printPage({background: true, width: 21.0, height: 29.7}); // A4
    let printResultDecoded = Buffer.from(printResult, 'base64')

    writeFileSync(process.argv[3], printResultDecoded);
  } finally {
    await driver.close();
  }
})();
