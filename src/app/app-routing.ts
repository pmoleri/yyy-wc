import { Route } from '@vaadin/router';
import './not-found/not-found.js';
import './designsystemslanding/designsystemslanding';

export const routes: Route[] = [
  { path: '', component: 'app-design-systems-landing', name: 'DesignSystemsLanding' },
  { path: 'designsystemslanding', component: 'app-design-systems-landing', name: 'DesignSystemsLanding' },
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' }
];
