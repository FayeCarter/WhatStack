'use strict'
var expect = require('chai').expect,
  server = require('../index'),
  io = require('socket.io-client'),
  ioOptions = {
    transports: ['websocket'],
    forceNew: true,
    reconnection: false,
  }
let sender
let receiver

const chatUser1 = { name: 'Tom' }
const chatUser2 = { name: 'Sally' }

describe('Chat Events', function () {
  beforeEach(function (done) {
    // start the io server
    server.connect()
    // connect two io clients
    sender = io('http://localhost:5002/', ioOptions)
    receiver = io('http://localhost:5003/', ioOptions)

    // finish beforeEach setup
    done()
  })
  afterEach(function (done) {
    // disconnect io clients after each test
    server.io.on
    sender.close()
    receiver.close()
    done()
  })

  describe('Message Events', function () {
    it('Clients should receive a message when the `message` event is emited.', function (done) {
      sender.emit(chatUser1, 'Hello! please work!', 'C++')
      receiver.on('message', function (msg) {
        expect(msg).to.equal(chatUser1, 'Hello! please work!', 'C++')
        done()
      })
    })
  })
})
