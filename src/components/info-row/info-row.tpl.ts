export const tpl = `
<div class="info__row">
  {{#if info}}
  <div class="info__row-wrapper">
    <label for="{{id}}" class="info__row-label">{{item}}
    </label>
    <input id="{{id}}" name="{{id}}" {{disabled}} class="info__row-input" value="{{info}}" {{#if required}}
      data-required="{{required}}"
      {{/if}}
      type="{{type}}" />
    <span class="info__row-error"></span>
  </div>
  {{else}}
  <button class="info__row-button {{className}}">{{item}}</button>
  {{/if}}
</div>
`;
