afterEach(async function() {
  console.log(this.currentTest.title)
  console.log(this.currentTest.file)
  console.log(this.currentTest.parent.title)
  console.log(this.currentTest.fullTitle())
  console.log(this.currentTest.state)
})