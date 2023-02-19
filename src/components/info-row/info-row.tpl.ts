export const tpl = `
<div class="info-row">
  {{#if name}}
  <div class="info-row-wrapper">
    <label for="{{name}}" class="info-row-label">{{item}}
    </label>
    <input id="{{name}}" name="{{name}}" {{disabled}} class="info-row-input" value="{{info}}" {{#if required}}
      data-required="{{required}}"
      {{/if}}
      type="{{type}}" />
    <span class="info-row-error"></span>
  </div>
  {{else}}
  <button type="button" class="info-row-button {{className}}" onclick={{onClick}}>{{item}}</button>
  {{/if}}
</div>
`;
