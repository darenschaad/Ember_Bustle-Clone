import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    update(post,params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined && params[key] !=="") {
          post.set(key,params[key]);
        }
      });
      post.save();
      this.transitionTo('admin/' + post_id);
    },
    destroyPost(post) {
      post.destroyRecord();
      this.transitionTo('admin');
    }
  }
});
