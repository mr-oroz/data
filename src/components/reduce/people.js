const initialState = {
    data: [],
    loading: true
}

const listItem = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD" : {
            return {data: action.payload, loading: false}
        }

        case "ADD_PEOPLE": {
            return {data: action.payload}
        }
        default: {
          return state
        }
    }
}

export default listItem