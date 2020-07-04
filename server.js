/*const express = require('express');
const path = require('path');
const app = express();
app.us(express.static(_dirname + '/dist/icep'));
app.get('/*', function(req,res){
    res.sendFile(path.join(_dirname+
        '/dist/icep/index.html'));});
app.listen(process.env.PORT || 8080);
*/
import express, { static } from 'express';
import { join } from 'path';
const app = express();
app.us(static(_dirname + '/dist/icep'));
app.get('/*', function(req,res){
    res.sendFile(join(_dirname+
        '/dist/icep/index.html'));});
app.listen(process.env.PORT || 8080);
