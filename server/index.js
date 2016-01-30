var cloak = require('cloak');

var expressServer = require('./express_server');

var getActiveMembers = function(members) {
  return members.filter(function(member) {
    return !member._socket.disconnected;
      
  });
  
};

const ROOM_SIZE = 3;

cloak.configure({
  express: expressServer,
  autoJoinLobby: false,
  defaultRoomSize: ROOM_SIZE,
  pruneEmptyRooms: 150,
  reconnectWait: 1000,
  messages: {
    
    some_message_type: function(data, user) {
      user.getRoom().messageMembers('reportAction', data);
          
    },
  },

  room: {
    init: function() {
      // callback on new room
    },
    pulse: function() {
      // called periodically for rooms
    },
    newMember: function() {
      // fun called when a new member joins the room. this is the room, function arg is the user
    },
    memberLeaves: function() {
       // called when a member leaves the room. this is the room, function arg is the user
    },
    close: function() {
       // callback on closing of room
    },
    shouldAllowUser: function() {
       // function that takes a user and returns true if the user is allowed to join at this time. default is to always allow users to join rooms   
    },
  },
  
});

cloak.run();
