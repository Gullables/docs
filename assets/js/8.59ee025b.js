(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{207:function(t,e,n){"use strict";n.r(e);var s=n(0),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"creating-events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#creating-events"}},[t._v("#")]),t._v(" Creating Events")]),t._v(" "),n("p",[t._v("Discord.js and Klasa contain a large number of events that can trigger under certain situations. You can listen to those events and run a function every time they are emitted in a bot.")]),t._v(" "),n("h2",{attrs:{id:"your-first-event"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#your-first-event"}},[t._v("#")]),t._v(" Your first Event")]),t._v(" "),n("p",[t._v("To create an event:")]),t._v(" "),n("ol",[n("li",[t._v("Head to your addon folder and create a new folder called "),n("code",[t._v("events")]),t._v(".")]),t._v(" "),n("li",[t._v("Inside the events folder, create a new file called "),n("code",[t._v("welcome.js")]),t._v(".")])]),t._v(" "),n("p",[t._v("Once you are done, the structure should look like this:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v(".\n└── my-first-addon\n    ├── events\n    │   └── welcome.js\n    ├── index.js\n    └── package.json\n")])])]),n("ol",{attrs:{start:"3"}},[n("li",[t._v("Open "),n("code",[t._v("welcome.js")]),t._v(" and type in this code:")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Event "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@botbind/klasa"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("extends")]),t._v(" Event "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GuildMemberAdd"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("member")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    member"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello!"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("Here we are importing the "),n("code",[t._v("Event")]),t._v(" class and exporting a new Event. In this example, we are listening for "),n("code",[t._v("GuildMemberAdd")]),t._v(". That means whenever a new member joins the server, this will send them a DM.")]),t._v(" "),n("h2",{attrs:{id:"event-options"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-options"}},[t._v("#")]),t._v(" Event Options")]),t._v(" "),n("p",[t._v("Here all the options at once, you only have to add whichever ones you need to change:")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Event "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@botbind/klasa"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("extends")]),t._v(" Event "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yourEventName"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"theEventToListenTo"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      emitter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("client"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      enabled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      once"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("params")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h2",{attrs:{id:"event-types"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-types"}},[t._v("#")]),t._v(" Event Types")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Event Name")]),t._v(" "),n("th",[t._v("Description")]),t._v(" "),n("th",[t._v("Parameter returned")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("strong",[t._v("channelCreate")])]),t._v(" "),n("td",[t._v("Emitted whenever a channel is created.")]),t._v(" "),n("td",[t._v("channel")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("channelDelete")])]),t._v(" "),n("td",[t._v("Emitted whenever a channel is deleted.")]),t._v(" "),n("td",[t._v("channel")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("channelPinsUpdate")])]),t._v(" "),n("td",[t._v("Emitted whenever the pins of a channel are updated.")]),t._v(" "),n("td",[t._v("channel, time")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("channelUpdate")])]),t._v(" "),n("td",[t._v("Emitted whenever a channel is updated - e.g. name change, topic change.")]),t._v(" "),n("td",[t._v("oldChannel, newChannel")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("clientUserGuildSettingsUpdate")])]),t._v(" "),n("td",[t._v("Emitted whenever the client user's settings update.")]),t._v(" "),n("td",[t._v("clientUserGuildSettings")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("clientUserSettingsUpdate")])]),t._v(" "),n("td",[t._v("Emitted when the client user's settings update.")]),t._v(" "),n("td",[t._v("clientUserSettings")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("debug")])]),t._v(" "),n("td",[t._v("Emitted for general debugging information.")]),t._v(" "),n("td",[t._v("info")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("disconnect")])]),t._v(" "),n("td",[t._v("Emitted when the client's WebSocket disconnects and will no longer attempt to reconnect.")]),t._v(" "),n("td",[t._v("event")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("emojiCreate")])]),t._v(" "),n("td",[t._v("Emitted whenever a custom emoji is created in a guild.")]),t._v(" "),n("td",[t._v("emoji")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("emojiDelete")])]),t._v(" "),n("td",[t._v("Emitted whenever a custom guild emoji is deleted.")]),t._v(" "),n("td",[t._v("emoji")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("emojiUpdate")])]),t._v(" "),n("td",[t._v("Emitted whenever a custom guild emoji is updated.")]),t._v(" "),n("td",[t._v("oldEmoji, newEmoji")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("error")])]),t._v(" "),n("td",[t._v("Emitted whenever the client's WebSocket encounters a connection error.")]),t._v(" "),n("td",[t._v("error")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("guildBanAdd")])]),t._v(" "),n("td",[t._v("Emitted whenever a member is banned from a guild.")]),t._v(" "),n("td",[t._v("guild, user")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("guildBanRemove")])]),t._v(" "),n("td",[t._v("Emitted whenever a member is unbanned from a guild.")]),t._v(" "),n("td",[t._v("guild, user")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("guildCreate")])]),t._v(" "),n("td",[t._v("Emitted whenever the client joins a guild.")]),t._v(" "),n("td",[t._v("guild")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("guildDelete")])]),t._v(" "),n("td",[t._v("Emitted whenever a guild is deleted/left.")]),t._v(" "),n("td",[t._v("guild")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("guildIntegrationsUpdate")])]),t._v(" "),n("td",[t._v("Emitted whenever a guild integration is updated")]),t._v(" "),n("td",[t._v("guild")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("guildMemberAdd")])]),t._v(" "),n("td",[t._v("Emitted whenever a user joins a guild.")]),t._v(" "),n("td",[t._v("member")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("guildMemberAvailable")])]),t._v(" "),n("td",[t._v("Emitted whenever a member becomes available in a large guild.")]),t._v(" "),n("td",[t._v("member")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("guildMemberRemove")])]),t._v(" "),n("td",[t._v("Emitted whenever a member leaves a guild, or is kicked.")]),t._v(" "),n("td",[t._v("member")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("guildMembersChunk")])]),t._v(" "),n("td",[t._v("Emitted whenever a chunk of guild members is received (all members come from the same guild).")]),t._v(" "),n("td",[t._v("members, guild")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("guildMemberSpeaking")])]),t._v(" "),n("td",[t._v("Emitted once a guild member starts/stops speaking.")]),t._v(" "),n("td",[t._v("member, speaking")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("guildMemberUpdate")])]),t._v(" "),n("td",[t._v("Emitted whenever a guild member changes - i.e. new role, removed role, nickname.")]),t._v(" "),n("td",[t._v("oldMember, newMember")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("guildUnavailable")])]),t._v(" "),n("td",[t._v("Emitted whenever a guild becomes unavailable, likely due to a server outage.")]),t._v(" "),n("td",[t._v("guild")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("guildUpdate")])]),t._v(" "),n("td",[t._v("Emitted whenever a guild is updated - e.g. name change.")]),t._v(" "),n("td",[t._v("oldGuild, newGuild")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("message")])]),t._v(" "),n("td",[t._v("Emitted whenever a message is created.")]),t._v(" "),n("td",[t._v("message")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("messageDelete")])]),t._v(" "),n("td",[t._v("Emitted whenever a message is deleted.")]),t._v(" "),n("td",[t._v("message")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("messageDeleteBulk")])]),t._v(" "),n("td",[t._v("Emitted whenever messages are deleted in bulk.")]),t._v(" "),n("td",[t._v("messages")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("messageReactionAdd")])]),t._v(" "),n("td",[t._v("Emitted whenever a reaction is added to a cached message.")]),t._v(" "),n("td",[t._v("messageReaction, user")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("messageReactionRemove")])]),t._v(" "),n("td",[t._v("Emitted whenever a reaction is removed from a cached message.")]),t._v(" "),n("td",[t._v("messageReaction, user")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("messageReactionRemoveAll")])]),t._v(" "),n("td",[t._v("Emitted whenever all reactions are removed from a cached message.")]),t._v(" "),n("td",[t._v("message")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("messageUpdate")])]),t._v(" "),n("td",[t._v("Emitted whenever a message is updated - e.g. embed or content change.")]),t._v(" "),n("td",[t._v("oldMessage, newMessage")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("presenceUpdate")])]),t._v(" "),n("td",[t._v("Emitted whenever a guild member's presence changes, or they change one of their details.")]),t._v(" "),n("td",[t._v("oldMember, newMember")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("rateLimit")])]),t._v(" "),n("td",[t._v("Emitted when the client hits a rate limit while making a request")]),t._v(" "),n("td",[t._v("rateLimitInfo")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("ready")])]),t._v(" "),n("td",[t._v("Emitted when the client becomes ready to start working.")]),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("reconnecting")])]),t._v(" "),n("td",[t._v("Emitted whenever the client tries to reconnect to the WebSocket.")]),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("resume")])]),t._v(" "),n("td",[t._v("Emitted whenever a WebSocket resumes.")]),t._v(" "),n("td",[t._v("replayed")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("roleCreate")])]),t._v(" "),n("td",[t._v("Emitted whenever a role is created.")]),t._v(" "),n("td",[t._v("role")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("roleDelete")])]),t._v(" "),n("td",[t._v("Emitted whenever a guild role is deleted.")]),t._v(" "),n("td",[t._v("role")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("roleUpdate")])]),t._v(" "),n("td",[t._v("Emitted whenever a guild role is updated.")]),t._v(" "),n("td",[t._v("oldRole, newRole")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("typingStart")])]),t._v(" "),n("td",[t._v("Emitted whenever a user starts typing in a channel.")]),t._v(" "),n("td",[t._v("channel, user")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("typingStop")])]),t._v(" "),n("td",[t._v("Emitted whenever a user stops typing in a channel.")]),t._v(" "),n("td",[t._v("channel, user")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("userNoteUpdate")])]),t._v(" "),n("td",[t._v("Emitted whenever a note is updated.")]),t._v(" "),n("td",[t._v("user, oldNote, newNote")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("userUpdate")])]),t._v(" "),n("td",[t._v("Emitted whenever a user's details (e.g. username) are changed.")]),t._v(" "),n("td",[t._v("oldUser, newUser")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("voiceStateUpdate")])]),t._v(" "),n("td",[t._v("Emitted whenever a user changes voice state - e.g. joins/leaves a channel, mutes/un-mutes.")]),t._v(" "),n("td",[t._v("oldMember, newMember")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("warn")])]),t._v(" "),n("td",[t._v("Emitted for general warnings.")]),t._v(" "),n("td",[t._v("info")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("webhookUpdate")])]),t._v(" "),n("td",[t._v("Emitted whenever a guild text channel has its web hooks changed.")]),t._v(" "),n("td",[t._v("channel")])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);