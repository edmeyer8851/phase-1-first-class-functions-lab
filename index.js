// Code your solution in this file!
const returnFirstTwoDrivers = drivers => {
    const firstTwoDrivers = drivers.slice(0, 2);
    return firstTwoDrivers;
}

const returnLastTwoDrivers = drivers => {
    const lastTwoDrivers = drivers.slice(drivers.length-2, drivers.length);
    return lastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (number){
    return fare => fare * number;
}

function fareDoubler (fare){
    const getMultiplier = createFareMultiplier;
    return getMultiplier(2)(fare);
}

function fareTripler (fare){
    const getMultiplier = createFareMultiplier;
    return getMultiplier(3)(fare);
}

function selectDifferentDrivers(names, fn){
    return fn(names);
}