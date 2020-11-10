const initialState = {
    data: []
}

const listItem = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PEOPLE": {
            return {data: action.payload}
        }
        default: {
          return state
        }
    }
}

export default listItem