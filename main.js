//generate a random num

function randNumGenerate(number) {
    return Math.floor(Math.random() * number);
}

const wisdomList = {
    /*firstMess: ['sun', 'moon', 'comet', 'star'],
    luckWise: ['Good luck', 'bad luck', 'terrible luck', 'great luck', 'ok luck'],
    advice: ['trust no one', 'read this', 'go out and eat', 'play more']*/
    classList: ['five', 'nine', 'eleven', 'twelve'],
    activities: ['do cycling', 'play cricket', 'go to gym', 'swmimming'],
    needtoDo: ['study hard', 'focus on game', 'eat enough', 'take care']
}

//store the wishdome in a arrry
let perWish = []

//Iterate the object
for(let prp in wisdomList) {
    let optnIn = randNumGenerate(wisdomList[prp].length);

    //use the object properties to customize the message 
    switch(prp) {
        case 'classList':
            perWish.push(`Your are in class ${wisdomList[prp][optnIn].toUpperCase()}.`);
            break
        case 'activities':
            perWish.push(`You have to ${wisdomList[prp][optnIn].toUpperCase()}.`);
            break
        case 'needtoDo':
            perWish.push(`You should ${wisdomList[prp][optnIn].toUpperCase()}.`);
            break
        default:
            perWish.push('There is not enough information');
    }
}
//formatted func
function wisdom(wish) {
    const formatted = perWish.join('\n');
    console.log(formatted);
}
wisdom(perWish);