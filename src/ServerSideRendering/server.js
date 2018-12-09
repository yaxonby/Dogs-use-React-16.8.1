import  express from "express";
import  React  from  "react";
import {renderToString} from  'react-dom/server';
import  template  from  './template';
import  App  from  '../App';

var app=express();

app.use((req, res) => {
 return  res.end(
     template({
         body:   renderToString(<App  />)
    })
)
});

var   port= 3001;

app.listen(port, ()=>{console.log(`Ok. Server listen post ${port}`)})
