import { TypeRecipeTile } from 'lib/types';
import Link from 'next/link';
import React from 'react';

const Recipe = ({ fields }: TypeRecipeTile) => {
  const { title, shortDescription, thumbnail, cookingTime, ctaText, ctaLink } = fields;
  return (
    <div className="bg-white rounded overflow-hidden shadow-md relative">
      <article className="recide-details--container">
        <div className="recipe-grid__thumbnail">
          <img className="w-full h-32 sm:h-48 object-cover" src={`${thumbnail.fields.file.url}`} />
        </div>
        <div className="recipe-grid__details m-4">
          <div className="recipe-grid__title font-semibold">
            <h2>{title}</h2>
          </div>
          <div className="recipe-grid__description">
            <p className="text-gray-500 text-sm">{shortDescription}</p>
          </div>
          <div className="recipe-grid__author">
            <p>Vin Yaguel</p>
          </div>
          <div className="recipe-grid__readmore text-blue-600 underline">
            <Link href={`/${ctaLink}`}>{ctaText}</Link>
          </div>
        </div>
      </article>
      <div className="bg-gray-100 text-secondary-200 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2">
        <span>{cookingTime} mins</span>
      </div>
    </div>
  );
};

export default Recipe;
