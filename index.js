// Your code here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}
saturday('bathe my dog');

function mondayWork(task='go to the office'){
    return `This Monday, I will ${task}.`
}
mondayWork(`work from home`)

function wrapAdjective(result='*'){
        return function inner(origin='special'){
            return `You are ${result}${origin}${result}!`
        }
}
wrapAdjective('||')('a dedicated programmer!');