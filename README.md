# iots
IoT done with Typescript


# links:
https://www.npmjs.com/package/espruino
https://www.espruino.com/ESP32


```
Espruino Command-line Tool 0.1.20
-----------------------------------

USAGE: espruino ...options... [file_to_upload.js]

  -h,--help                : Show this message
  -j [job.json]            : Load options from JSON job file - see configDefaults.json
                               Calling without a job filename creates a new job file
                               named after the uploaded file
  -v,--verbose             : Verbose
  -q,--quiet               : Quiet - apart from Espruino output
  -m,--minify              : Minify the code before sending it
  -t,--time                : Set Espruino's time when uploading code
  -w,--watch               : If uploading a JS file, continue to watch it for
                               changes and upload again if it does.
  -e command               : Evaluate the given expression on Espruino
                               If no file to upload is specified but you use -e,
                               Espruino will not be reset
  --sleep 10               : Sleep for the given number of seconds after uploading code
  -n                       : Do not connect to Espruino to upload code
  --board BRDNAME/BRD.json : Rather than checking on connect, use the given board name or file
  --ide [8080]             : Serve up the Espruino Web IDE on the given port. If not specified, 8080 is the default.

  -p,--port /dev/ttyX      : Connect to a serial port
  -p,--port aa:bb:cc:dd:ee : Connect to a Bluetooth device by addresses
  -p,--port tcp://192.168.1.50 : Connect to a network device (port 23 default)
  -d deviceName            : Connect to the first device with a name containing deviceName
  -b baudRate              : Set the baud rate of the serial connection
                               No effect when using USB, default: 9600
  --no-ble                 : Disables Bluetooth Low Energy (using the 'noble' module)
  --list                   : List all available devices and exit

  --listconfigs            : Show all available config options and exit
  --config key=value       : Set internal Espruino config option

  -o out.js                : Write the actual JS code sent to Espruino to a file
  --ohex out.hex           : Write the JS code to a hex file as if sent by E.setBootCode
  --storage fn:data.bin    : Write a file named 'fn' to Storage, must be used with --ohex
  --storage .boot0:-       : Store program code in the given Storage file (not .bootcde)

  -f firmware.bin[:N]      : Update Espruino's firmware to the given file
                               Espruino must be in bootloader mode.
                               Optionally skip N first bytes of the bin file.

If no file, command, or firmware update is specified, this will act
as a terminal for communicating directly with Espruino. Press Ctrl-C
twice to exit.

Please report bugs via https://github.com/espruino/EspruinoTools/issues
```