var extractText = require('./index'),
    assert = require('assert'),
    callInOrder = require('../call-in-order')

describe('extractText()', function(){
  // TODO decide whether this should work, or only accept strings wrapped in tags
  // it('should call the callback with just text when just text is given', function(done){
  //   extractText('Simple text. How boring.',
  //     function (text) {
  //       assert.equal('Simple text. How boring.', text)
  //       done()
  //     })
  // })
  it('should call the callback with the text inside a single tag', function(done){
    extractText('<h2>It Works!</h2>',
      function (text) {
        assert.equal('It Works!', text)
        done()
      })
  })
  it('should call the callback with the text inside each of multiple tags', function(done){
    extractText('<h2>It Works!</h2><p>I was amazed, but it really did work</p>',
        callInOrder(
          function (text) {
            assert.equal('It Works!', text)
          },
          function (text) {
            assert.equal('I was amazed, but it really did work', text)
            done()
          }
        ))
  })
  it('should call the callback with the text inside nested tags', function(done){
    extractText('<p>I was <span>amazed</span>, but it really did work</p>',
      function (text) {
        assert.equal('I was amazed, but it really did work', text)
        done()
      })
  })
  it('should call the callback with the text inside each of multiple nested tags',
    function (done) {
      extractText('<h2>It Works!</h2><p>I was <span><b>so</b> amazed</span>,'
                + ' but it really did work</p>',
                  callInOrder(function (text) { assert.equal('It Works!', text) },
                              function (text) {
                                assert.equal('I was so amazed, but it really did work', text)
                                done()
                  })
      )
    })
})
