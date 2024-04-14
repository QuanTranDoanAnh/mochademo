describe('Test Suite 2', function() {
  it('Check Login 2', function() {
    console.log("Check Login Passed 2")
  })

  it('Check Home Page 2', function() {
    console.log("Home Page Passed 2")
  })

  it('Navigate to Home Page 2', function() {
    console.log("Navigate to Home Page Passed 2")
    console.log(this.test.fullTitle())
    throw Error("Test Failure 2")
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