const reducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case 'INCREMENT':
            return { ...state, [payload]: state[payload] + 1 };
        case 'DECREMENT':
            return { ...state, [payload]: state[payload] - 1 };
        default:
            throw new Error('Unexpected action');
    }
}
export default reducer