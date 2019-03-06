import Component from '@ember/component';

export default Component.extend({
  init() {
    this._super(...arguments);
    console.log('init!');
  },
  didReceiveAttrs() {
    this._super(...arguments);
    console.log('didReceiveAttrs!');
  },
  didInsertElement() {
    this._super(...arguments);
    console.log('didInsertElement!');
  },
  willRender() {
    this._super(...arguments);
    console.log('will render!');
  },
  didRender() {
    this._super(...arguments);
    console.log('did rendered!');
  },
  actions: {
    showPerson(person) {
      alert(person);
    }
  }
});
