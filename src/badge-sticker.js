import { LitElement, html, css } from 'lit-element';


class BadgeSticker extends LitElement {

  static get properties() {
    return {
      title: { type: String },
      date: { type: String },
      skills: { type: Array },
      icon: { type: String },
      locked: { type: Boolean },
      verificationLink: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline;
        text-align: center;
        position: relative;
      }
      .badge {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 300px;
        height: 300px;
        background-color: var(--badge-color, #1198b0);
        border: 2px dashed var(--badge-stitch-color, #FFF);
        border-radius: 50%;
        box-shadow: 0px 0px 20px rgba(0.5, 0.5, 0.5, 0.5);
        overflow: hidden;
        cursor: pointer;
        
      }
      .badge.locked {
        opacity: 0.5;
        cursor: not-allowed;
      }
      .badge-icon {
        font-size: 50px;
        color: var(--badge-icon-color, #ffffff);
      }
      .badge-label {
        font-size: 18px;
        font-weight: bold;
        margin-top: 10px;
        color: var(--badge-label-color, #ffffff);
        text-align: center
        width: 120px;
      }
      .badge-date {
        font-size: 12px;
        margin-top: 5px;
        color: var(--badge-date-color, #ffffff);
      }

      path {
        /* fill: transparent; */
      }
      

      .verification-link {
        font-size: 12px;
        margin-top: 5px;
        color: var(--badge-ver-color, #ffffff);
      }
    `;
  }

  constructor() {
    super();
    this.locked = true;
  }

  render() {
    return html`
      <div class="badge ${this.locked ? 'locked' : ''}">
        <div class="badge-icon">
        
        <div class="badge-date">${this.date}</div>
        ${this.icon}
        <div class="verification-link">${this.verificationLink}</div>
          <div class="badge-label">
            <svg width="100" height="50" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <path id="intermediate" d="M 7 5 C 25 25, 75 25, 93 5" />
              </defs>
              <text font-size="12px">
                <textPath startOffset="50%" dominant-baseline="middle" text-anchor="middle" xlink:href="#intermediate">${this.title}</textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>
    `;
  }

}

customElements.define('badge-sticker', BadgeSticker);