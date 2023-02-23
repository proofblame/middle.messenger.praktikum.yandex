export const tpl = `
<div class="input">
  <label for={{id}}>{{title}}</label>
  <input type={{type}} id={{id}}
  {{#if required}}
   data-required="{{required}}"
  {{/if}}/>
  <span></span>
</div>`;
