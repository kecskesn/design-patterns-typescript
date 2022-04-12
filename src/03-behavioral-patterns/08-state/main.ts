import { State, StateContext } from "./state";

let stateContext = new StateContext();
console.log('stateContext = ' + stateContext.getState());
stateContext.setState(State.STARTED);
stateContext.request();
stateContext.setState(State.RUNNING);
stateContext.request();
stateContext.setState(State.FINISHED);
stateContext.request();
stateContext.setState(State.STARTED);
stateContext.request();
stateContext.setState(State.RUNNING);
stateContext.request();
stateContext.setState(State.FINISHED);
stateContext.request();
