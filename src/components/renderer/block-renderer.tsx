import _ from 'lodash';
import React from 'react';

import { Hero } from './hero';
import { Text } from './text';
import { Image } from './image';
import { Video } from './video';
import { Section } from './section';
import { PageContentTypes, ComponentContentTypes } from '../../lib/constants';
import Recipe from './recipe';
import { Column } from './column';

type BlockRendererProps = {
  block: any;
};

const BlockRenderer = ({ block }: BlockRendererProps) => {
  if (Array.isArray(block)) {
    return (
      <>
        {block.map((b) => (
          <BlockRenderer key={`block-${b.sys.id}`} block={b} />
        ))}
      </>
    );
  }

  const contentTypeId = _.get(block, 'sys.contentType.sys.id');
  const Component = ContentTypeMap[contentTypeId];

  if (!Component) {
    console.warn(`${contentTypeId} can not be handled`);
    return null;
  }

  const { id } = block.sys;

  const componentProps = {
    ...block,
    parent: block.parent,
  };

  return <Component key={`${contentTypeId}-${id}`} {...componentProps} />;
};

const ContentTypeMap = {
  [ComponentContentTypes.Hero]: Hero,
  [ComponentContentTypes.Section]: Section,
  [ComponentContentTypes.Column]: Column,
  [ComponentContentTypes.Text]: Text,
  [ComponentContentTypes.Image]: Image,
  [ComponentContentTypes.Video]: Video,
  [ComponentContentTypes.Recipe]: Recipe,
};

export { BlockRenderer };
