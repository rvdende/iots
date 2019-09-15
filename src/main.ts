// @ts-ignore: esp module
import events from "events";

var WebSocket = require("ws");
var wifi = require("Wifi"); 

/*
const config = {
  ssid: "YOURWIFINAME",
  password: "yourwifipass",
  host: "yourprototypeserverIP",
  port: 8080
}
*/



console.log("booting");

declare interface AP {
  /** SSID string. */
  ssid: string;
  /** access point MAC address in 00:00:00:00:00:00 format. */
  mac: string;
  /** open, wep, wpa, wpa2, or wpa_wpa2. */
  authMode: string;
  /** wifi channel 1..13. */
  channel: number;
  /** true if the SSID is hidden (ESP32/ESP8266 only) */
  hidden: boolean;
  /** signal strength in dB in the range -110..0. */
  rssi: number
}





class Proto{
  wifi:any;
  ws:any;
  connected:boolean = false;

  constructor() {
    console.log("proto class !!!!!!!")  
    
    this.wifi = wifi;

    this.wifi.on('associated',() => { 
      console.log("We're connected to an AP"); 
    });
      
    this.wifi.on('connected',() => { 
      console.log("We have an IP Address"); 
      this.socketConnect();
    });
      
    this.wifi.on('disconnected',() => { 
      console.log("We disconnected"); 
      this.connectWifi(); // retry
    });    

    this.wifi.disconnect();

    setInterval(()=>{ this.post(); },5000)

    setTimeout( ()=>{
      this.connectWifi();
    },500)
  }

  scanWifi() {
    console.log("scanning wifi...")
    this.wifi.scan( (apList:AP[])=>{ console.log(apList) });
  }

  connectWifi () {
    console.log("connecting wifi...")
    this.wifi.connect(config.ssid, {password:config.password}, (err:Error) => {
      console.log("connected? err=", err, "info=", this.wifi.getIP());
      //wifi.save();
    });
  }

  socketConnect() {
         
      // @ts-ignore: esp module
      this.ws = new WebSocket(config.host,{path: '/',port: config.port, // default is 80
      // protocol : "echo-protocol", // websocket protocol name (default is none)
      // protocolVersion: 13, // websocket protocol version, default is 13
      // origin: 'Espruino',
      // keepAlive: 60,
      // headers:{ some:'header', 'ultimate-question':42 } // websocket headers to be used e.g. for auth (default is none)
      });
  
      this.ws.on('open', () => {
        console.log("Connected to server");
        this.ws.send(JSON.stringify({connect:"true", apikey: "pel3cxq8xzy5hrr8bmhk2i7lc7ee8i16"}))
      });
  
      this.ws.on('message', (msg:string) => {
        //console.log("MSG: " + msg);
        var servermsg = JSON.parse(msg);
        console.log(servermsg);

        if (servermsg.auth) {
          if (servermsg.auth == "success") {
            this.connected = true;
          }
        }
      
        
      });
  }

  post() {
    
    if (this.connected) {
      console.log("sending a device update")
      this.ws.send(JSON.stringify({id:"espdevice", data: { timestamp: new Date() }}))
    }
    
  }
}

var iotdevice = new Proto();

//iotdevice.scanWifi();


setInterval( ()=>{console.log(new Date())},60000)

////------------ END PROTO







// @ts-ignore: esp module
//import wifi = require("Wifi");
// @ts-ignore: esp module
//import WebSocket = require("ws");

// @ts-ignore: esp module2

  

//wifi.scan( (apList:AP[])=>{ console.log(apList) });
 
//wifi.setHostname("rouanesppool");
// wifi.stopAP();




// // console.log("right after scan");

// // var http = require("http");
// // http.get("http://www.espruino.com", function(res) {
// //   res.on('data', function(data) {
// //     console.log(data);
// //   });
// // });

// // var wifi = require('Wifi');

// // var ssid = 'ROUAN_EXT_POOL';
// // var password = 'bitlab54321';


// // console.log("connecting to wifi")
// // wifi.connect(ssid, {password: password}, function (err) {
// //     if (err) console.log("err");
// //     console.log('Connected to Wifi.  IP address is:', wifi.getIP().ip);
// //     //wifi.save(); // Next reboot will auto-connect    
// //     connectToPrototype();
// // });







// wifi.on("connected", function(details:AP) {
//     console.log("wifi is connected!");
//     console.log(details);
//     //connectToPrototype();
// })

// console.log("booting rouan proto esp32")

// // // setInterval(()=>{
// // //     console.log("alive");
// // //     wifi.getStatus( (status) => {
// // //         console.log(status);
// // //     })
// // // },1000)