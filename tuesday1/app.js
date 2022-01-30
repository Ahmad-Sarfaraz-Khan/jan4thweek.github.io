 fetch("https://api2.binance.com/api/v3/ticker/24hr")
  .then((obj)=>{
   return obj.json()
}).then(data=>{
   
   tableCreator(data)
})
var tableCreator=(arr)=>{
   var tbody=document.getElementById('main')
   arr.forEach((data)=>{
       var newrow=document.createElement('div')
       newrow.className="card"
       var child=`
       <div class="headcard">
         ${data.symbol}
       </div>
       <div class="card1">
         <div class="maincard">
           <div class="card2">
             <p>Name</p>
             <p>${data.volume}</p>
           </div>
           <br>
           <div class="card3">
             <p>Count</p>
             <p>${data.count}</p>
           </div>
           <div class="card4">
             <p>Price</p>
             <p>${data.openPrice}</p>
           </div>
         </div>
       </div>
     `
       newrow.innerHTML=child
       tbody.appendChild(newrow)           
       console.log(data);
   })
}
