export const tpl = `
{{#each chats}}
<div class="chat-item" id='{{id}}'>
  <div class="chat-item__logo">
    <div class="chat-item__logo-img"></div>
  </div>
  <div class="chat-item__body">
    <div class="chat-item__main">
      <p class="chat-item__name">{{title}}</p>
      <p class="chat-item__time">{{getTime last_message.time}}</p>
    </div>
    <div class="chat-item__msg">
      <p class="chat-item__text">{{last_message.content}}</p>
      <div class="chat-item__new">
        {{#if unread_count}}
          <div>{{unread_count}}</div>
        {{/if}}
      </div>
    </div>
  </div>
</div>
{{/each}}
`;
