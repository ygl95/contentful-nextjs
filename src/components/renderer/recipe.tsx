import { TypeRecipe } from 'lib/types';
import React from 'react';

const Recipe = ({ fields }: TypeRecipe) => {
  const { title, thumbnail } = fields;
  return (
    <div>
      {title}
      <img className="" src={`${thumbnail.fields.file.url}?w=960`} />
    </div>
  );
};

export default Recipe;
