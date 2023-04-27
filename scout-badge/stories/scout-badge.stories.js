import { html } from 'lit';
import '../src/scout-badge.js';

export default {
  title: 'ScoutBadge',
  component: 'scout-badge',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <scout-badge
      style="--scout-badge-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </scout-badge>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
