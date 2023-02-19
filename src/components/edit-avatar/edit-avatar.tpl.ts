export const tpl = `
<form class="update-avatar">
  <p class="update-avatar__title error">Загрузите файл</p>
  <label class="update-avatar__input">
    <span>Выбрать файл на компьютере</span>
    <input name="avatar" type="file" />
  </label>
  <div class="update-avatar__submit">
    {{{button}}}
  </div>
  <span class="update-avatar__error">Нужно выбрать файл</span>
</form>
`;
