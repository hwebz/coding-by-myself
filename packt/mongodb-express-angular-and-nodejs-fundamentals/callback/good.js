// 1. Don't nested functions. give them names and place them at the top level of your program
// 2. Use function hoisting to your advantage to move functions 'below the fold'
// 3. Handle every single error in every of your callback
// 4. Create reusable functions and place them in a module to reduce the cognitive load required to understand your code.
//    Splitting your code into small pieces like this also helps you handle errors, write tests, forces you to create a
//    stable and documented API for your code, and helps with refactoring

// example of separate functions and modularize it
module.exports.submit = formSubmit

function formSubmit (submitEvent) {
  var name = document.querySelector('input').value
  request({
    uri: "http://example.com/upload",
    body: name,
    method: "POST"
  }, postResponse)
}

function postResponse (err, response, body) {
  var statusMessage = document.querySelector('.status')
  if (err) return statusMessage.value = err
  statusMessage.value = body
}