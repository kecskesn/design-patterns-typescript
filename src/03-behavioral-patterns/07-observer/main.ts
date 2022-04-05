import { EmploymentAgency } from './employment-agency';
import { JobSeeker } from './job-seeker';

let johnDoe = new JobSeeker('John Doe');
let janeDoe = new JobSeeker('Jane Doe');

let employmentAgency = new EmploymentAgency();
employmentAgency.subscribe(johnDoe);
employmentAgency.subscribe(janeDoe);

employmentAgency.addJobAdvertisement('programmer');

employmentAgency.unsubscribe(johnDoe);

employmentAgency.addJobAdvertisement('human resource');
