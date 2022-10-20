
// july 6th 2022 --- kind of format conversion

export const DateConvert = (date, format) => {

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

    let currentday = new Date()
    let today = `${monthNames[currentday.getMonth()] } ${getOrdinalNum(currentday.getDate())} ${currentday.getFullYear()}`
    let yesterday = `${monthNames[currentday.getMonth()] } ${getOrdinalNum(currentday.getDate()-1)} ${currentday.getFullYear()}`
    

    let inputdate =  Date.parse(date);
    var finaldate = new Date(inputdate);
    let onlydate = `${monthNames[finaldate.getMonth()] } ${getOrdinalNum(finaldate.getDate())} ${finaldate.getFullYear()}`
    let  result= format === 'withouttime' ? onlydate === today? 'Today' : onlydate === yesterday ? "Yesterday" : onlydate
    :`${monthNames[finaldate.getMonth()] } ${getOrdinalNum(finaldate.getDate())} ${finaldate.getFullYear()} at ${finaldate.getHours()} : ${finaldate.getMinutes()} :${finaldate.getSeconds()}`

    
    return result;
}

const getOrdinalNum = (number) => {
    let selector;
  
    if (number <= 0) {
      selector = 4;
    } else if ((number > 3 && number < 21) || number % 10 > 3) {
      selector = 0;
    } else {
      selector = number % 10;
    }
  
    return number + ['th', 'st', 'nd', 'rd', ''][selector];
  };