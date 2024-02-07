var endate = "12 feburaray 2024 18:47 "
document.getElementById('end-date').innerHTML = endate

function clock(){
      const end = new Date(endate)
      console.log(end)
      const now = new Date()
      console.log(now)
      var inputs = document.querySelectorAll('input')
      const diff = (end - now)/1000
      console.log(diff)
      if(diff<0){
            return
      }
      ////////////////////   convert into days ////////////
     var daay = 3600 * 24
     var hours  = 60 * 60 
     var minut = 60
      inputs[0].value = (Math.floor(diff / daay ))
      inputs[1].value = (Math.floor((diff / 3600) % 24 ))
      inputs[2].value = (Math.floor((diff / 60) % 60 ))
      inputs[3].value = (Math.floor((diff % 60 )))


      // 1 day = 24 hr
      // 1 hr = 60 minutes
      // 1 minutes = 60 second
}
clock()

setInterval(() => {
      clock()
}, 1000);