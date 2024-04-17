const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

//linear no cycles
var test1 = {"W" : {"X" : 1},
             "X" : {"Y" : 1},
             "Y" : {"Z" :1 },
             "Z" :{}};
assert(JSON.stringify(detectCycles(test1) == JSON.stringify(false)));


//random with cycles & disconnected node
var test2 = { "Disconnected" :{},
             "A" : { "D" :4 },
             "B" : {"C" : 10, "A" :3 },
             "C" : {},
             "D" : {"B":1, "E":2},
             "E" : {"C":5}};
assert(JSON.stringify(detectCycles(test2) == JSON.stringify(true)));


//random no cycles & disconnected node
var test3 = {"Disconnected" :{},
             "A" : { "B" :2 , "D" :4 },
             "B" : {"C" : 10},
             "C" : {},
             "D" : {"B":1, "E":2},
             "E" : {"C":5}};
assert(JSON.stringify(detectCycles(test3) == JSON.stringify(false)));


//complete graph with cycles
var test4 = {"A" : {"B" : 2, "C" : 3, "D" : 1},
             "B" : {"A" : 2, "C" : 3, "D" : 1},
             "C" : {"A" : 2, "B" : 3, "D" : 1},
             "D" : {"A" : 2, "B" : 3, "C" : 1}};
assert(JSON.stringify(detectCycles(test4) == JSON.stringify(true)));


//single node with cycle
var test5 = {'A': {}};
assert(JSON.stringify(detectCycles(test5) == JSON.stringify(true)));


//circle with cycles
var test6 = {'B' : {'C' :2},
             'C' : {'D' :2},
             'D' : {'B': 2}};
assert(JSON.stringify(detectCycles(test6) == JSON.stringify(true)));
