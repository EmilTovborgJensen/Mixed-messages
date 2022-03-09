// Dictionary
const firstWords = ['You', 'I', 'Don\'t'];
// word matches
const youWordmatches = ['are', 'shouldn\'t', 'should', 'can', 'will', 'just'];
const iWordmatches = ['am', 'think', 'will', 'won\'t', 'know'];
const dontWordMatches = ['stop', 'even', 'think', 'ever'];
// word matches end

const chooseFirstWord = () => {
    const randomNumber = Math.floor(Math.random() * firstWords.length)
    return firstWords[randomNumber]
}

const createQuote = () => {
    const word = chooseFirstWord();
    if (word === 'You') {
        const randomWord1 = youWordmatches[Math.floor(Math.random() * youWordmatches.length)]
        if (randomWord1 === 'are') {
            const areWordMatches = ['perfect', 'amazing', 'beautiful', 'supporting', 'loving', 'hard working', 'disciplined']
            return `You are ${areWordMatches[Math.floor(Math.random() * areWordMatches.length)]}`
        } else if (randomWord1 === 'shouldn\'t') {
            const shouldntWordMatches = ['stop believing', 'stop trying', 'change for others', 'stop working towards your dream']
            return `You shouldn't ${shouldntWordMatches[Math.floor(Math.random() * shouldntWordMatches.length)]}`
        } else if (randomWord1 === 'should') {
            const shouldWordMatches = ['Never stop', 'keep doing what you love', 'keep doing what you do', 'keep going', 'be happy', 'be proud', 'be more loving']
            return `You should ${shouldWordMatches[Math.floor(Math.random() * shouldWordMatches.length)]}`
        } else if (randomWord1 === 'can') {
            const canWordMatches = ['do this', 'not stop now', 'what you want', 'what you will']
            return `You can ${canWordMatches[Math.floor(Math.random() * canWordMatches.length)]}`
        } else if (randomWord1 === 'will') {
            const willWordMatches = ['not stop now', 'continue', 'make it to the top', 'make it', 'make it if you keep going', 'keep going']
            return `You will ${willWordMatches[Math.floor(Math.random() * willWordMatches.length)]}`
        } else if (randomWord1 === 'just') {
            const justWordMatches = ['have to keep going', 'have to not stop', 'have to make it', 'have to keep doing what you do', 'have be happy', 'have to be loving']
            return `You just ${justWordMatches[Math.floor(Math.random() * justWordMatches.length)]}`
        } else {
            return 'error'
        }


    } else if (word === 'I') {
        const randomWord2 = iWordmatches[Math.floor(Math.random() * iWordmatches.length)]
        if (randomWord2 === 'am') {
            const amWordMatches = ['beautiful', 'loving', 'perfect', 'hardworking', 'disciplined', 'unstoppable']
            return `I am ${amWordMatches[Math.floor(Math.random() * amWordMatches.length)]}`
        } else if (randomWord2 === 'think') {
            const thinkWordMatches = ['you\'re amazing', 'you\'re perfect', 'you\'re hardworking']
            return `I think ${thinkWordMatches[Math.floor(Math.random() * thinkWordMatches.length)]}`
        } else if (randomWord2 === 'will') {
            const willWordMatches = ['Not stop', 'keep going', 'never stop', 'make it to the top', 'stay healthy', 'stay loving']
            return `I will ${willWordMatches[Math.floor(Math.random() * willWordMatches.length)]}`
        } else if (randomWord2 === 'won\'t') {
            const wontWordMatches = ['stop', 'stop working', 'stop impressing', 'stop going', 'quit']
            return `I won't ${wontWordMatches[Math.floor(Math.random() * wontWordMatches.length)]}`
        } else if (randomWord2 === 'know') {
            const knowWordMatches = ['I can do this', 'I can make it to the top', 'I won\'t stop', 'I\'ve got this']
            return `I know ${knowWordMatches[Math.floor(Math.random() * knowWordMatches.length)]}`
        } else {
            return 'error'
        } 
    }

    else if (word === 'Don\'t') {
        const randomWord3 = dontWordMatches[Math.floor(Math.random() * dontWordMatches.length)]
        if (randomWord3 === 'stop') {
            const stopWordMatches = ['learning', 'growing', 'making people happy', 'pursuing happiness']
            return `Don't stop ${stopWordMatches[Math.floor(Math.random() * stopWordMatches.length)]}`
        } else if (randomWord3 === 'even') {
            const evenWordMatches = ['think about it', 'think about quitting', 'think about the past']
            return `Don't even ${evenWordMatches[Math.floor(Math.random() * evenWordMatches.length)]}`
        } else if (randomWord3 === 'think') {
            const thinkWordMatches = ['about the past', 'about quitting']
            return `Don't think ${thinkWordMatches[Math.floor(Math.random() * thinkWordMatches.length)]}`
        } else if (randomWord3 === 'ever') {
            const everWordMatches = ['stop trying', 'think about the past']
            return `Don't  ever ${everWordMatches[Math.floor(Math.random() * everWordMatches.length)]}`
        } else {
            return 'error'
        } 
    }
}

const run = (numberOfRuns) => {
    for (let i = numberOfRuns; i > 0; i--) {
        console.log(createQuote())
    }
}

run(20)