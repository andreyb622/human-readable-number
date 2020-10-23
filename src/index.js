module.exports = function toReadable(number) {
  const n = 'zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split(' ');
    const d = 'twenty thirty forty fifty sixty seventy eighty ninety'.split(' ');
    const h = ' hundred'
    
    if(number < 20) {
      return n[number]
    }

    if(number < 100) {
      return number%10===0?d[Math.floor(number/10)-2]:d[Math.floor(number/10)-2]+' '+n[number%10]
    }

    if(number < 1000) {
      return number%100===0
      ?n[Math.floor(number/100)]+h
      :number%100<20
      ?n[Math.floor(number/100)]+h+' '+n[number%100]
      :number%10===0
      ?n[Math.floor(number/100)]+h+' '+d[Math.floor(Math.floor(number/10%10))-2]
      :n[Math.floor(number/100)]+h+' '+d[Math.floor(Math.floor(number/10%10))-2]+' '+n[number%10]
    }

}
