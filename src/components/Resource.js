import React from 'react';

const Resource = (props) => {
  return (
    <div>
      {Object.keys(props.resources).map(function(key, index) {
        var resource = props.resources[key]
        if (resource.display) {
          return <div key={index}>{resource.name}: {resource.amount}</div>
        }
        return null;
      })}
    </div>
  )
}

export default Resource
