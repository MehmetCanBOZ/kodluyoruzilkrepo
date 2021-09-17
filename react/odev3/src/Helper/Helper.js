export const getDate = (timeStamp) =>{
    var date = new Date(timeStamp*1000);

    return date.getDay(); 
}

export const dayNumber = [
    ["Sun"],["Mon"],["Tue"],["Wed"],["Thu"],["Fri"],["Sat"],
]