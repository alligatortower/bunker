import React from 'react';
import Resource from './Resource.js';

const ResourceList = (props) => {
  return (
    <div>
      <h2>Resources: </h2>
      <Resource
        resources={props.resources}
      />
    </div>
  )
}

export default ResourceList
