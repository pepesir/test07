const fs = require("fs")


global.group = require('./data/group')

global._group = JSON.parse(fs.readFileSync('./database/group.json'))

