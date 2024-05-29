import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { TypeRecipe } from 'lib/types';
import React from 'react';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

const RICHTEXT_OPTIONS = {
  renderNode: {
    [BLOCKS.HEADING_4]: (node, children) => {
      return <h2 className="font-bold text-xl">{children}</h2>;
    },
    [BLOCKS.UL_LIST]: (node, children) => {
      return (
        <ul className="space-y-4 text-gray-500 list-decimal list-inside dark:text-gray-400 mt-4">
          {children}
        </ul>
      );
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <>{children}</>;
    },
  },
};

const RecipeDetails = ({ fields }: TypeRecipe) => {
  const { title, shortDescription, featuredImage, ingredients, method, cookingTime } = fields;

  return (
    <div className="w-full container max-w-screen-xl mx-auto flex flex-wrap justify-between mt-0 py-8 px-8 relative">
      <div className="recipe-featuredimage w-full">
        <img
          className="w-full h-32 sm:h-48 object-cover"
          src={`${featuredImage.fields.file.url}`}
        />
      </div>
      <div className="recipe-title mt-4">
        <h1 className="font-bold text-3xl">{title}</h1>
      </div>
      <div className="recipe-cookingtime bg-gray-100 text-secondary-200 text-xs uppercase font-bold rounded-full p-2 absolute top-8 ml-2 mt-2">
        <span>{cookingTime} mins</span>
      </div>
      <div className="recipe-shortdescription mt-4">
        <p className="text-gray-500 text-sm">{shortDescription}</p>
      </div>
      <div className="recipe-ingredients mt-4">
        <h2 className="font-bold text-xl">Ingredients</h2>
        <ul className="flex flex-wrap text-gray-900 dark:text-white">
          {ingredients.map((ing) => (
            <li
              key={ing}
              className="bg-slate-200 hover:bg-slate-300 rounded-full p-3 pt-1 pb-1 mr-2 mt-2"
            >
              <span className="me-4 hover:font-medium md:me-6 lowercase">{ing}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="recipe-method mt-4">
        {documentToReactComponents(method, RICHTEXT_OPTIONS)}
      </div>
    </div>
  );
};

export default RecipeDetails;
