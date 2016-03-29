import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('admin');
  this.route('post', {path: '/post/:post_id'});
  this.route('adminpost', {path: '/admin/:post_id'});
});

export default Router;
