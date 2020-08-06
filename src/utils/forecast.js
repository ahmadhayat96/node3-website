const request=require('request')

const forecast=(latitude,longitude,callback)=>{
   
    const url='http://api.weatherstack.com/current?access_key=3aca221f1edb5825a343fbdaf596d238&query='+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)+'&units=m'
    request({url,json: true},(error,{body})=>{
    if(error)
      callback('unable to connect to weather service',undefined)
    else if(body.error){
      callback('unable to find location!',undefined)
  }
    else{ 
        callback(undefined,
            'Weather summary: '+body.current.weather_descriptions[0]+
            ' current_temperature: '+ body.current.temperature+
            ' with '+ body.current.precip+'% chances of rain'
        )
      }
    })
}
module.exports=forecast