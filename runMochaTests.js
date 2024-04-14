const Mocha = require('mocha');
const fs = require('node:fs');
let mocha = new Mocha({
  parallel: true,
  jobs: 3,
  reporter: 'mochawesome',
  require: ['mochawesome/register']
})

async function getFiles(dir, fileNames) {
  fileNames = fileNames || [];
  let files = fs.readdirSync(dir);

  for (let i in files) {
    let name = dir +  '/' + files[i]
    if ( fs.statSync(name).isDirectory()) {
      getFiles(name, fileNames)
    } else {
      fileNames.push(name)
    }
  }
  return fileNames
}

async function runMocha() {
  let fileNames = await getFiles('tests')
  fileNames.forEach(function (testFileName) {
    mocha.addFile(testFileName)
  });

  mocha.run()
    .on('pass', async function(test) {
      console.log('The test passed: ' + test.title)
      console.log('The test passed: ' + test.fullTitle())
    })
    .on('fail', async function(test) {
      console.log('The test failed: ' + test.title)
      console.log('The test failed: ' + test.fullTitle())
    })
    .on('end', async function() {
      console.log('The test execution is complete: ')
    })
    .on('test end', async function(test) {
      console.log('Execution for test: ' + test.title + ' is complete')
    })
}

runMocha();