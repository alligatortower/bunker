import React from 'react';

const Resource = (props) => {
  return (
    <div>
      {Object.keys(props.resources).map(function(key, index) {
        var resource = props.resources[key]
        if (resource.display) {
          var max = resource.max ? ' / ' + resource.max : null
          return <div key={index}>{resource.name}: {resource.amount}{max}</div>
        }
        return null;
      })}
    </div>
  )
}

export default Resource
