const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

// const returnFirstTwoDrivers = function (drivers)
//     { return drivers.slice(0, 2) };

function returnFirstTwoDrivers() {
    const returnFirstTwoDrivers = function (drivers) {
        const firstTwoDrivers = drivers.slice(0, 2);
        return firstTwoDrivers 
    };
    return returnFirstTwoDrivers(drivers);
 
}

function returnLastTwoDrivers() {
    const returnLastTwoDrivers = function (drivers) {
        const lastTwoDrivers = drivers.slice((drivers.length - 2));
        return lastTwoDrivers
    };
    return returnLastTwoDrivers(drivers);

}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fareMultiplying) {
    const fareMultiplier = function createFareMultiplier (fare) {
        let newFare = fareMultiplying * fare;
        return newFare;
    }

    return fareMultiplier;
}

function fareDoubler(fare) {
    const fareDoubled = createFareMultiplier(2)(fare);
    return fareDoubled;
}

function fareTripler(fare) {
    const fareTripled = createFareMultiplier(3)(fare);
    return fareTripled;
}  

function selectDifferentDrivers(drivers, returnFirstTwoDrivers = null, returnLastTwoDrivers = null) {
    if (returnFirstTwoDrivers) {
        let twoDrivers = returnFirstTwoDrivers(drivers);
        return twoDrivers;
    }
    if (returnLastTwoDrivers) {
        let twoDrivers = returnLastTwoDrivers(drivers);
        return twoDrivers;
    }
    return selectDifferentDrivers;
}