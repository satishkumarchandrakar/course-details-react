import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import PropTypes from 'prop-types';

const CourseForm = ({course, allAuthors, onSave, onDelete, onChange, deleting, saving, errors}) => {
  
    return (
    <form>
      <h1> Manage Course</h1>
      <TextInput
        name="title"
        label="Title"
        onChange={onChange}
        />

      {/* <SelectInput
        name="authorId"
        label="Author"
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onChange}
        /> */}

      <TextInput
        name="category"
        label="Category"
        onChange={onChange}
        />

      <TextInput
        name="length"
        label="Length"
        onChange={onChange}
        />

      <input 
        type="submit"
        disabled={saving}
        value={saving ? "Saving..." : "Save"}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

CourseForm.propTypes = {
  course: PropTypes.object,
  allAuthors: PropTypes.array,
  onSave: PropTypes.func,
  onDelete: PropTypes.func,
  onChange: PropTypes.func,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default CourseForm;