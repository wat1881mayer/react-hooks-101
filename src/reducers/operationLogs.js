import {
    ADD_OPERATION_LOGS,
    DELETE_ALL_EVENT,
    DELETE_ALL_OPERATION_LOGS
} from '../actions'

const operationsLogs = (state = [], action)=> {
    switch (action.type) {
        case ADD_OPERATION_LOGS:
            const operationLog = {
                description :action.description,
                operatedAt : action.operatedAt
            } 
            return [operationLog, ...state]
        case DELETE_ALL_EVENT:
            return []
            default:
                return state
    }
}

export default operationsLogs