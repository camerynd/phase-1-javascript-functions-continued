function saturdayFun(funActivity = 'roller-skate') {
    return `This Saturday, I want to ${funActivity}!`
}
function mondayWork(workActivity = 'go to the office') {
    return `This Monday, I will ${workActivity}.`
}
function wrapAdjective(visualFlair = '*') {
    return function(adjective = 'special') {
        return `You are ${visualFlair}${adjective}${visualFlair}!`
    }
}
wrapAdjective('!!!')('really cool')