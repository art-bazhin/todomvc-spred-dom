import 'todomvc-app-css/index.css';

import { clearElement } from 'spred-dom';
import { App } from './components/app/app';

clearElement(document.body);
document.body.appendChild(App());
