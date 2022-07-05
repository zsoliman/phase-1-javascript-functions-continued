// code your solution here

const saturdayFun = (activity) => {

    if (!activity) {
        activity = 'roller-skate'
    } return `This Saturday, I want to ${activity}!`
}

const mondayWork = (work) => {
    if (!work) {
        work = 'go to the office'
    } return `This Monday, I will ${work}.`
}

const wrapAdjective = (emphatic) => {
    // let result = wrapAdjective()
    return ((result) => {
        if (!result) {
            result = 'special'
        }
        return `You are ${emphatic}${result}${emphatic}!`

    })
}