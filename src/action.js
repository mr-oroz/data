import Service from "./service";

const service = new Service()

const loadProduct = (data) => {
    return {
        type: 'LOAD',
        payload: data
    }
}

const getPeople = (dispatch) => () => {
    service.getPeople().then((data) => {
        dispatch(loadProduct(data.results))
    })
}

export {getPeople}