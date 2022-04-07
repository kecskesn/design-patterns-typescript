import { State, StateContext } from "./state";

const STATE_CONTEXT = new StateContext();
console.log('STATE_CONTEXT = ' + STATE_CONTEXT.getState());
STATE_CONTEXT.setState(State.STARTED);
STATE_CONTEXT.request();
STATE_CONTEXT.setState(State.RUNNING);
STATE_CONTEXT.request();
STATE_CONTEXT.setState(State.FINISHED);
STATE_CONTEXT.request();
STATE_CONTEXT.setState(State.STARTED);
STATE_CONTEXT.request();
STATE_CONTEXT.setState(State.RUNNING);
STATE_CONTEXT.request();
STATE_CONTEXT.setState(State.FINISHED);
STATE_CONTEXT.request();
