function findMatching(array, name) {

    const lowerCaseName = name.toLowerCase();
    return array.filter(item => item.toLowerCase() === lowerCaseName);

}
function fuzzyMatch(array, name) {

    const firstCharName = name.charAt(0);
    return array.filter(item => item.charAt(0) === firstCharName);

}
function matchName(array, name) {

    return array.filter(item => item.name === name);
}