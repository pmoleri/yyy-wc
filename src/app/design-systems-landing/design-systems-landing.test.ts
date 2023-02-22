import { expect } from '@open-wc/testing';
import DesignSystemsLanding from './design-systems-landing.js';

describe('DesignSystemsLanding', () => {
  it('<app-design-systems-landing> is an instance of DesignSystemsLanding', async () => {
    const element = document.createElement('app-design-systems-landing');
    expect(element).to.be.instanceOf(DesignSystemsLanding);
  });
});
