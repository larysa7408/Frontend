const BlackSea = {
    name: 'Black `Sea',
    maxLengthKm: 1175,
    surfaceAreaSqKm: 436402,
    averageDepthM: 1253,
    maxDepthM: 2212,
    waterVolumeCuKm: 547000,
};
const getAnotherObj = (obj) => {
    const newObj = {};
    const newKeys = Object.keys(obj);
    const call1 = (key) => {
        newObj[key] = typeof obj[key];
    }
    newKeys.forEach(call1);
    return newObj;
}
console.log(getAnotherObj(BlackSea));