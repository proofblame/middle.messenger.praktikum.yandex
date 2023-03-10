export const tpl = `
<form class="form" id={{id}}>
  <p class="form__title">{{formTitle}}</p>
  <div class="form__fields">
    {{#each inputs}}
      {{{this}}}
    {{/each}}
  </div>
  <div class="form__buttons">
    <input type="submit" class="form__button" value={{buttonName}} />
    <a href={{routePath}} class="form__link">{{linkName}}</a>
  </div>
</form>
`;
