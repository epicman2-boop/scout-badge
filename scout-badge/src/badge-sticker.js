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
        display: inline-block;
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

      

      .verfication-link {
        font-size: 10px;
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
        
        <div class="badge-date">${this.date}</div>
        <div class="badge-icon">${this.icon}
          <div class="badge-label">${this.title}</div>
          <div class="verification-link">${this.verificationLink}</div>
        </div>
      </div>
    `;
  }

}

customElements.define('badge-sticker', BadgeSticker);