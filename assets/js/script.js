var hourHand = document.getElementsByClassName('hour_hand')[0];
var minuteHand = document.getElementsByClassName('minute_hand')[0];
var secondHand = document.getElementsByClassName('second_hand')[0];
setInterval(function(){
  var date = new Date();
  var degRotateSecondHand = (360 * date.getSeconds()/60)+'deg';
  var degRotateMinuteHand = (360 * date.getMinutes()/60)+'deg';
  var degRotateHourHand = (360 * date.getHours()/12)+0.5*(360 * date.getMinutes()/360)+'deg';
  console.log(degRotateHourHand);
  secondHand.style.transform = 'rotate'+'('+(degRotateSecondHand)+')';
  minuteHand.style.transform = 'rotate'+'('+(degRotateMinuteHand)+')';
  hourHand.style.transform = 'rotate'+'('+(degRotateHourHand)+')';
}, 200);