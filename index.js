// const express = require('express')
import express from "express"
import cors from 'cors'
const app = express()
import Krepsinis from "./krepsinis.js"

app.use(cors()) //prie aplikacijos priskiriam konfiguracija ar moduli

app.use('/images', express.static('images'))

app.get('/', function (req, res) {

  let objektas = {
      round: "Round 26",
      date: "10 Feb 2022",
      stadium: "Peace and Friendship Stadium",
      time: "21:00",
      team1: "Olympiacos Piraeus",
      team2: "Anadolu Efes Istanbul"
  }

  console.log(objektas.degrees)
  res.json(objektas)
})

app.get('/result', function (req, res) {

    function getRandomNum(min, max) {
          let randomNum = Math.floor(Math.random()*(max-min+1)+min);
          return randomNum;
    }
  
  
    let objektas = {
        result: [getRandomNum(0, 100), getRandomNum(0, 100)],
        half: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
    }
  
    console.log(objektas.degrees)
    res.json(objektas)
  })

  //inicijuojame Krepsini
  const rezultatas = new Krepsinis();
  console.log(rezultatas)

  app.get('/checkscore', function(req, res) {
      res.json(rezultatas)

  })

app.listen(3003)