function logger(reducer) {
    return (prevState, actions) => {
        console.group(actions.type)
        console.log('Prev State:', prevState)
        const nextState = reducer(prevState, actions);
        console.log('Next State:', nextState)
        console.groupEnd()
        return nextState;
    }
}

export default logger;