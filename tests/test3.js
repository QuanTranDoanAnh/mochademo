describe('Test Suite 3', function() {
  it('Check Login 3', function() {
    console.log("Check Login Passed 3")
  })

  it('Check Home Page 3', function() {
    console.log("Home Page Passed 3")
  })

  it.skip('Navigate to Home Page 3', function() {
    console.log("Navigate to Home Page Passed 3")
    console.log(this.test.fullTitle())
    throw Error("Test Failure 3")
  })

  // describe("Home page to Payments Page Tests", function(){
  //   it("Homepage to Payment Test 1", function () {
  //     console.log("Test Payment Page Passed 1")
  //   })

  //   it("Homepage to Payment Test 2", function () {
  //     console.log("Test Payment Page Passed 2")
  //   })

  //   it("Homepage to Payment Test 3", function () {
  //     console.log("Test Payment Page Passed 3")
  //   })
  // })
})