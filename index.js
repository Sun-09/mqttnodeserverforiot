// *Eta Diye Value Publish Hocche to MQTT Broker*

const express = require('express');
const path = require('path');
const mqtt = require("mqtt");
// var client = mqtt.connect('mqtt://test.mosquitto.org');
const app = express()
port = process.env.PORT || 3000;

let value;
// ClientId for mqttClient and host
const clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8)
// MattHost
const host = 'tcp://91.121.93.94'

app.use(express.json());
app.use('/', express.static(path.join(__dirname, 'public2')))
app.use('/about', express.static(path.join(__dirname, 'about')))
app.use('/more', express.static(path.join(__dirname, 'more')))
app.use('/contacts', express.static(path.join(__dirname, 'contacts')))

app.post('/button', (req, res) => {
    value = req.body
    console.log(req.body)
     //html css js
if(req.body.button_one_value === true){
    res.send({
        "status": true,
        "messege": "mqtt button1 is clicked"
      })
    let sendMessage = "P";
    client.publish('sonu', sendMessage, { qos: 0, retain: false })
}
else if(req.body.button_one_value === false){
    res.send({
        "status": true,
        "messege": "mqtt button2 is clicked"
      })
    let sendMessage = "Q";
    client.publish('sonu', sendMessage, { qos: 0, retain: false }) 
}

else if(req.body.button_two_value === true){
  res.send({
      "status": true,
      "messege": "mqtt button2 is clicked"
    })
  let sendMessage = "R";
  client.publish('sonu', sendMessage, { qos: 0, retain: false }) 
}

else if(req.body.button_two_value === false){
  res.send({
      "status": true,
      "messege": "mqtt button2 is clicked"
    })
  let sendMessage = "S";
  client.publish('sonu', sendMessage, { qos: 0, retain: false }) 
}

else if(req.body.button_three_value === true){
  res.send({
      "status": true,
      "messege": "mqtt button2 is clicked"
    })
  let sendMessage = "T";
  client.publish('sonu', sendMessage, { qos: 0, retain: false }) 
}

else if(req.body.button_three_value === false){
  res.send({
      "status": true,
      "messege": "mqtt button2 is clicked"
    })
  let sendMessage = "U";
  client.publish('sonu', sendMessage, { qos: 0, retain: false }) 
}

else if(req.body.button_four_value === true){
  res.send({
      "status": true,
      "messege": "mqtt button2 is clicked"
    })
  let sendMessage = "V";
  client.publish('sonu', sendMessage, { qos: 0, retain: false }) 
}


else if(req.body.button_four_value === false){
  res.send({
      "status": true,
      "messege": "mqtt button2 is clicked"
    })
  let sendMessage = "W";
  client.publish('sonu', sendMessage, { qos: 0, retain: false }) 
}






    
    
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})






// const host = 'ws://127.0.0.1:1883'

// let sendMessage=process.argv[2]


const options = {
  keepalive: 30,
  clientId: clientId,
  protocolId: 'MQTT',
  protocolVersion: 4,
  clean: true,
  reconnectPeriod: 1000,
  connectTimeout: 30 * 1000,
  will: {
    topic: 'WillMsg',
    payload: 'Connection Closed abnormally..!',
    qos: 0,
    retain: false
  },
  rejectUnauthorized: false
}

console.log('connecting mqtt client')
const client = mqtt.connect(host, options)

client.on('error', function (err) {
  console.log(err)
  client.end()
})

client.on('connect', function () {
  console.log('client connected:' + clientId)
  // console.log("");
  client.subscribe('sonu', { qos: 0 },(sub_message)=>{
      console.log("Message From Server : "+sub_message);
  })
//   client.subscribe('topic', { qos: 1 })

//   client.publish('topic', sendMessage, { qos: 0, retain: false })
})

client.on('message', function (topic, message, packet) {
  console.log('Received Message:= ' + message.toString() + '\nOn topic:= ' + topic)
  // console.log("\n"+JSON.stringify(packet))
})
//client on
client.on('close', function () {
  console.log(clientId + ' disconnected')
})