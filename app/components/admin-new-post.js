import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },

    save() {
      var params = {
        photo: this.get('photo'),
        title: this.get('title'),
        author: this.get('author'),
        date: this.get('date'),
        content: this.get('content'),
      };
      this.set('addNewPost', false);
      this.sendAction('save', params);
    }
  }
});
