"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var AuthorApi = require('../api/authorApi');
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _authors = [];

var AuthorStore = assign({}, EventEmitter.prototype, {
     addChangeListener(callback) {
         this.on(CHANGE_EVENT, callback);
     },
     removeChangeListener(callback) {
         this.removeChangeListener(CHANGE_EVENT, callback);
     },
     emitChange() {
         this.emit(CHANGE_EVENT);
     },
     getAllAuthors() {
         return _authors;
     },
     getAuthorById(id) {
         return _.find(_authors, {id: id});
     }
});

Dispatcher.register((action) => {
    switch(action.actionType) {
        case ActionTypes.INITIALIZE:
            _authors = action.initialData.authors;
            AuthorStore.emitChange();
            break;
        case ActionTypes.CREATE_AUTHOR:
            _authors.push(action.author);
            AuthorStore.emitChange();
            break;
        case ActionTypes.UPDATE_AUTHOR:
            var existingAuthor = _.find(_authors, {id: action.author.id});
            var exostingAuthorIndex = _.indexOf(_authors, existingAuthor);
            _authors.splice(existingAuthor, 1, action.author);
            AuthorStore.emitChange();
            break;
        case ActionTypes.DELETE_AUTHOR:
            debugger;
            _.remove(_authors, {id: action.id});
            AuthorStore.emitChange();
            break;
        default:
            break;
    }
});

module.exports = AuthorStore;