const io = require('socket.io-client')
const http = require('http')
const ioBack = require('socket.io')
const PORT = 'http://localhost:5000'

let socket
let httpServer
let httpServerAddr
let ioServer

describe('Test to see if the rooms are returned', () => {
  beforeEach((done) => {
    // jest.setTimeout(30000)
    // Setup
    // Do not hardcode server port and address, square brackets are used for IPv6
    ;(socket = io.connect(PORT)),
      {
        'reconnection delay': 0,
        'reopen delay': 0,
        'force new connection': true,
        transports: ['websocket'],
      }
    socket.on('connect', () => {
      done()
    })
  })

  afterEach((done) => {
    // Cleanup
    if (socket.connected) {
      socket.disconnect()
    }
    done()
  })

  test.only('should recieve array of rooms back', async () => {
    // once connected, emit Hello World
    socket.emit('requestRoomList')
    // jest.setTimeout(30000)
    socket.on('roomList', ({ roomlist }) => {
      // Check that the message matches
      expect(roomlist).toBe(['C++', 'Python'])
    })
  })
})
