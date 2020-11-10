import Service from "./service";

const service = new Service()

const getPeople = (dispatch) => () => {
    service.getPeople().then((data) => {
        console.log(data)
        dispatch({type:"ADD_PEOPLE",payload:data.results})
    })
}

export {getPeople}