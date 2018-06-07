import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput'
import SelectInput from '../common/SelectInput'

const CourseForm = ({course, loading, onChange, onSave, errors, authors}) => {
  return(
    <form>
      <h1>Manage Course</h1>
      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
        error={errors.title}/>
      <SelectInput
        name="authorId"
        label="Author"
        defaultOption="Please select author"
        onChange={onChange}
        error={errors.author}
        options={authors}/>
      <TextInput
        name="category"
        label="Category"
        value={course.category}
        onChange={onChange}
        error={errors.category}/>
      <TextInput
        name="length"
        label="Length"
        value={course.length}
        onChange={onChange}
        error={errors.length}/>
      <input
        type="button"
        onClick={onSave}
        disabled={loading}
        value={loading ? 'Saving...' : 'Save'}
        className="btn btn-primary"/>
    </form>
  );
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  onChange: PropTypes.func,
  errors: PropTypes.array,
  authors: PropTypes.array,
  onSave: PropTypes.func
};

export default CourseForm;
