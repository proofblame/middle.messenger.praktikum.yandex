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
    <div class='chats-messages__input'>
      <div class='chats-messages__files'></div>
      <textarea class='chats-messages__textarea' placeholder='Сообщение' rows='1'></textarea>
      <div class='chats-messages__submit'>></div>
    </div>
  </div>
</div>`;
