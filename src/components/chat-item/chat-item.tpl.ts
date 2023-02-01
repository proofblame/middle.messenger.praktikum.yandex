export const tpl = `<div class="chat-item">
  <div class="chat-item__logo">
    <div class="chat-item__logo-img"></div>
  </div>
  <div class="chat-item__body">
    <div class="chat-item__main">
      <p class="chat-item__name">{{name}}</p>
      <p class="chat-item__time">{{time}}</p>
    </div>
    <div class="chat-item__msg">
      <p class="chat-item__text">{{message}}</p>
      <div class="chat-item__new">
        {{#if newMessages}}
          <div>{{newMessages}}</div>
        {{/if}}
      </div>
    </div>
  </div>
</div>
`;
