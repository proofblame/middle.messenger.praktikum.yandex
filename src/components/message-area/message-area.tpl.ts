export const tpl = `{{#if isMe}}
  <div class="message-area message-area_me">
    <p>{{text}}<span>{{time}}</span></p>
  </div>
{{else}}
  <div class="message-area">
    <p>{{text}}<span>{{time}}</span></p>
  </div>
{{/if}}
`;
