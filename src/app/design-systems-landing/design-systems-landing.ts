import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineComponents, IgcAvatarComponent, IgcButtonComponent, IgcIconComponent, IgcInputComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcButtonComponent, IgcRippleComponent, IgcIconComponent, IgcInputComponent, IgcAvatarComponent);

@customElement('app-design-systems-landing')
export default class DesignSystemsLanding extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: stretch;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .design-systems-landing {
      justify-content: space-evenly;
      align-items: flex-start;
      align-content: flex-start;
      position: relative;
      padding: 0 0 0 180px;
      width: 100%;
      height: 100%;
      min-width: min-content;
    }
    .row-layout {
      display: flex;
    }
    .menu {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      width: 85.7%;
      height: 5.5%;
      min-width: 1080px;
      min-height: 56px;
    }
    .details {
      justify-content: space-between;
      align-items: flex-start;
      align-content: flex-start;
      position: relative;
      width: 49.7%;
      height: 41.7%;
      min-width: 626px;
      min-height: 427px;
    }
    .features {
      justify-content: space-between;
      align-items: flex-start;
      align-content: flex-start;
      position: relative;
      width: 85.7%;
      height: 23%;
      min-width: 1080px;
      min-height: 236px;
    }
    .group {
      justify-content: space-between;
      align-items: flex-start;
      align-content: flex-start;
      position: relative;
      width: 280px;
      height: 236px;
      min-width: min-content;
    }
    .rectangle {
      background-color: hsla(var(--ig-gray-300));
      position: relative;
      width: calc(78% - 840px);
      height: 100%;
      min-width: 2px;
      min-height: 236px;
    }
    .oval {
      right: 180px;
      top: calc(35% - 148px);
      position: absolute;
      width: 426px;
      height: 426px;
    }
    .button {
      position: relative;
      width: 96px;
      height: max-content;
      min-width: min-content;
    }
    .buttonflatenabled-copy {
      position: relative;
      margin: 0 0 0 40px;
      width: 152px;
      height: max-content;
      min-width: min-content;
    }
    .buttonflatenabled-copy-2 {
      position: relative;
      margin: 0 0 0 40px;
      width: 80px;
      height: max-content;
      min-width: min-content;
    }
    .buttonflatenabled-copy-3 {
      position: relative;
      margin: 0 0 0 40px;
      width: 72px;
      height: max-content;
      min-width: min-content;
    }
    .button_1 {
      right: 0;
      top: 0;
      position: absolute;
      width: max-content;
      height: max-content;
      min-width: min-content;
    }
    .input {
      position: relative;
      width: 57.5%;
      height: max-content;
    }
    .button_2::part(base) {
      color: #000000FF;
    }
    .buttonflatenabled-copy_1::part(base) {
      color: #000000FF;
    }
    .buttonflatenabled-copy-2_1::part(base) {
      color: #000000FF;
    }
    .buttonflatenabled-copy-3_1::part(base) {
      color: #000000FF;
    }
    .button_1_1::part(base) {
      color: #FFFFFFFF;
      background-color: hsla(var(--ig-primary-500));
    }
    .introducing-a-new-de {
      color: #E41C77FF;
      position: relative;
      width: 212px;
      height: max-content;
    }
    .build-beautiful-prod {
      color: #000000DE;
      position: relative;
      width: 100%;
      height: max-content;
      min-width: 626px;
    }
    .professional-design {
      color: #000000DE;
      position: relative;
      width: 586px;
      height: max-content;
    }
    .avatar {
      --background: none;
      --ig-gray-400: transparent;
      position: relative;
    }
    .design-guidelines {
      color: #000000DE;
      position: relative;
      width: 155px;
      height: max-content;
    }
    .we-created-design-gu {
      color: #000000DE;
      position: relative;
      width: 100%;
      height: max-content;
      min-width: 280px;
    }
    .ui-components {
      color: #000000DE;
      position: relative;
      width: 133px;
      height: max-content;
    }
    .tips-for-developers {
      color: #000000DE;
      position: relative;
      width: 168px;
      height: max-content;
    }
    .avatar_1::part(base) {
      color: hsla(var(--ig-gray-900));
      background-color: hsla(var(--ig-primary-300));
    }
    .avatar_2::part(base) {
      color: hsla(var(--ig-gray-900));
    }
    .avatar_3::part(base) {
      color: hsla(var(--ig-gray-900));
      background-color: hsla(var(--ig-secondary-300));
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout design-systems-landing">
        <div class="row-layout menu">
          <igc-button variant="flat" class="button button_2">
            COURSE
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" class="buttonflatenabled-copy buttonflatenabled-copy_1">
            RESOURCES
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" class="buttonflatenabled-copy-2 buttonflatenabled-copy-2_1">
            NEWS
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" class="buttonflatenabled-copy-3 buttonflatenabled-copy-3_1">
            JOBS
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="fab" class="button_1 button_1_1">
            <span>GET STARTED</span>
            <span class="material-icons">
              add
            </span>
            <igc-ripple></igc-ripple>
          </igc-button>
        </div>
        <div class="column-layout details">
          <p class="typography__overline introducing-a-new-de">
            INTRODUCING A NEW DESIGN SYSTEM
          </p>
          <h1 class="build-beautiful-prod">
            Build beautiful products, faster.
          </h1>
          <h4 class="professional-design">
            Professional design library for Designers
          </h4>
          <igc-input label="Label" ?outlined="${true}" class="input"></igc-input>
        </div>
        <div class="row-layout features">
          <div class="column-layout group">
            <igc-avatar shape="circle" class="avatar avatar_1">
              <span class="material-icons">color_lens</span>
            </igc-avatar>
            <h6 class="design-guidelines">
              Design Guidelines
            </h6>
            <p class="typography__body-1 we-created-design-gu">
              We created design guidelines to help you understand the design system and use it without frustration
            </p>
          </div>
          <div class="rectangle"></div>
          <div class="column-layout group">
            <igc-avatar shape="circle" class="avatar avatar_2">
              <span class="material-icons">dashboard</span>
            </igc-avatar>
            <h6 class="ui-components">
              UI Components
            </h6>
            <p class="typography__body-1 we-created-design-gu">
              We created design guidelines to help you understand the design system and use it without frustration
            </p>
          </div>
          <div class="rectangle"></div>
          <div class="column-layout group">
            <igc-avatar shape="circle" class="avatar avatar_3">
              <span class="material-icons">devices</span>
            </igc-avatar>
            <h6 class="tips-for-developers">
              Tips for Developers
            </h6>
            <p class="typography__body-1 we-created-design-gu">
              We created design guidelines to help you understand the design system and use it without frustration
            </p>
          </div>
        </div>
        <div class="oval"></div>
      </div>
    `;
  }
}
