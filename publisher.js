var mqtt = require("mqtt");
var client = mqtt.connect({
  host: "localhost",
  port: 1883,
  clientId: "mqtt.publisher"
});

client.on("connect", function() {
  console.log("publisher.connected.");
});

setInterval(function() {
  var message ="datetime:"+ Date.now().toString();
  message+=",ax:"+0.1;
  message+=",ay:"+0.2;
  message+=",az:"+0.3;
  message+=",lx:"+0.1;
  message+=",ly:"+0.2;
  message+=",lz:"+0.3;
  message+=",gx:"+0.1;
  message+=",gy:"+0.2;
  message+=",gz:"+0.3;
  client.publish("itoyuNineAxis", message);
  console.log("publisher.publish:", message);
}, 1000);
