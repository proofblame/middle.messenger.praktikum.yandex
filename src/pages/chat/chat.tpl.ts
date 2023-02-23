export const tpl = `
<div class='chats-wrapper'>
  <div class='chats'>
    <div class='chats__header'>
    <div class="chats__header-buttons">
        <button class="chats__header__add-chat" id='chats-header--btn' title='Добавить новый чат'>+</button>
        <button class="chats__header__profile" id='chats-btn-profile'>Профиль</button>
      </div>
      <div class="chats__header-search">
      <form id="chats__header-form" class="chats__header-form">
        <input class="chats__header-input" type='text' placeholder='Введите имя и нажмите на кнопку' />
      </form>
      <div class="chats__header-lope">🔍</div>
     </div>
    </div>
    <div class='chats__body'>
    {{{chatsData}}}
    </div>
  </div>
  <div class='chats-messages'>
  <div class='chats-messages__hide'>Выберите или создайте чат</div>
    <div class='chats-messages__head'>
      <div class='chats-messages__logo'></div>
      <div class='chats-messages__name'>{{chatTitle}}</div>
      <div class='chats-messages__option'>⋮

      <div class='chats-messages__option-hide'>
        <div class='chats-messages__option-add'>Добавить пользователя</div>
        <div class='chats-messages__option-delete-user'>Удалить пользователя</div>
        <div class='chats-messages__option-delete'>Удалить чат</div>
    </div>
      </div>
    </div>
    <div class='chats-messages__body'>
    {{{messagesData}}}
    </div>
    {{{messageCompose}}}
  </div>
</div>`;
