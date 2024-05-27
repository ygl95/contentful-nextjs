import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { TypeRecipe } from 'lib/types';
import React from 'react';

const RecipeDetails = ({ fields }: TypeRecipe) => {
  const { title, shortDescription, featuredImage, ingredients, method, cookingTime } = fields;

  return (
    <div className="w-full container max-w-screen-xl mx-auto flex flex-wrap justify-between mt-0 py-8 px-8">
      <div className="recipe-title">
        <h1 className="font-bold text-3xl">{title}</h1>
      </div>
      <div className="recipe-cookingtime">
        <span>{cookingTime}</span>
      </div>
      <div className="recipe-shortdescription">
        <p className="text-gray-500 text-sm">{shortDescription}</p>
      </div>
      <div className="recipe-featuredimage w-full">
        <img
          className="w-full h-32 sm:h-48 object-cover"
          src={`${featuredImage.fields.file.url}`}
        />
      </div>
      <div className="recipe-ingredients">
        <ul className="list-decimal">
          {ingredients.map((ing) => (
            <li key={ing}>{ing}</li>
          ))}
        </ul>
      </div>
      <div className="recipe-method">
        <div>{documentToReactComponents(method)}</div>
      </div>
    </div>
  );
};

export default RecipeDetails;
