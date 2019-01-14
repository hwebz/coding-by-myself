import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
//import {Provider} from 'react-redux';
import {ManageCoursePage} from './ManageCoursePage';

describe('Manage Course Page', function() {
  it('sets error message when trying to save empty title', function() {
    const props = {
      authors: [],
      actions: { saveCourse: function() {
        return Promise.resolve();
      }},
      course: {
        id: '',
        watchHref: '',
        title: '',
        authorId: '',
        length: '',
        category: ''
      }
    };
    // const wrapper = mount(<Provider store={store}><ManageCoursePage /></Provider>);
    const wrapper = mount(<ManageCoursePage {...props} />);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('button');
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.')
  });
});
