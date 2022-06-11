const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = batteryBatches.reduce((accumulator,batchCount)=>{ // The initial variable comes first in the list of argmnats
    return accumulator += batchCount
},0);
