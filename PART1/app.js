"use strict";

$(function() {

    const baseURL = "http://numbersapi.com";
    const $request1 = $("#request1");
    const $request2 = $("#request2");
    const $request3 = $("#request3");
    const favoriteNumber = 26;
    const listOfFavoriteRangeNumber = [5,21,26,86];

    $.getJSON(`${baseURL}/${favoriteNumber}?json`).then(res => $request1.append(`<li>${res.text}</li>`));

    $.getJSON(`${baseURL}/${listOfFavoriteRangeNumber}?json`).then(res => 
     {
        for (const [key, value] of Object.entries(res)) {
            $request2.append(`<li>${value}</li>`)
          }
      });
    
    let listOfRequest=[];
    for (let i = 0; i < 4; i++) { 
        listOfRequest.push($.getJSON(`${baseURL}/${favoriteNumber}?json`));
    }
    Promise.all(listOfRequest).then(facts => { facts.forEach(res => $request3.append(`<li>${res.text}</li>`)); });
});