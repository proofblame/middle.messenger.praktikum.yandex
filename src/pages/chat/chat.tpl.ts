export const tpl = `<div class='chats-wrapper'>
  <div class='chats'>
    <div class='chats__header'>
      <button>Профиль ></button>
      <input type='text' placeholder='Поиск' />
    </div>
    <div class='chats__body'>
      {{#each chats}}
        <div class='chats__body-item'>
          {{{this}}}
        </div>
      {{/each}}
    </div>
  </div>
  <div class='chats-messages'>
    <div class='chats-messages__head'>
      <div class='chats-messages__logo'></div>
      <div class='chats-messages__name'>Вадим</div>
      <div class='chats-messages__option'>⋮</div>
    </div>
    <div class='chats-messages__body'>
      {{#each messages}}
        {{{this}}}
      {{/each}}
    </div>
    {{{messageCompose}}}
  </div>
</div>`;
