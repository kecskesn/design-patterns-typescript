import Light from './light';
import { SwitchInvoker } from './switch-invoker';
import { SwitchOffCommand, SwitchOnCommand } from './switch-command';

// Create a receiver
let light = new Light();

// Create Commands
let switchOn = new SwitchOnCommand(light);
let switchOff = new SwitchOffCommand(light);

// Register the commands with the invoker
let switchInvoker = new SwitchInvoker();
switchInvoker.register('ON', switchOn);
switchInvoker.register('OFF', switchOff);

// Execute the commands that are registered on the Invoker
console.log('===Execute commands===');
switchInvoker.execute('ON');
switchInvoker.execute('OFF');
switchInvoker.execute('ON');
switchInvoker.execute('OFF');

// show history
console.log('===Show history===');
switchInvoker.showHistory();

// replay last two executed commands
console.log('===Replay last===');
switchInvoker.replayLast(3);
