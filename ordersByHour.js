let orders = [
    {
        id: 1,
        time: "12:14:00",
        total: 732.84
    },
    {
        id: 2,
        time: "17:39:33",
        total: 4113.22
    },
    {
        id: 3,
        time: "21:47:00",
        total: 49.00
    },
    {
        id: 4,
        time: "09:55:00",
        total: 291.23
    },
    {
        id: 5,
        time: "01:32:00",
        total: 482.99
    },
    {
        id: 6,
        time: "13:24:00",
        total: 43.99
    }
]

let bucket = {
    '00':0,
    '01':0,
    '02':0,
    '03':0,
    '04':0,
    '05':0,
    '06':0,
    '07':0,
    '08':0,
    '09':0,
    '10':0,
    '11':0,
    '12':0,
    '13':0,
    '14':0,
    '15':0,
    '16':0,
    '17':0,
    '18':0,
    '19':0,
    '20':0,
    '21':0,
    '22':0,
    '23':0
}

let hoursArray = orders.map( array =>  array.time.substr(0,2))

console.log(hoursArray)

hoursArray.forEach(hour => {
    
})

function ordersByHour(array) {
    for(let i=0; i<array.length; i++) {
        const hour = 
    }
}

console.log(bucket)
// bucket[hour] = bucket[hour] + 1

