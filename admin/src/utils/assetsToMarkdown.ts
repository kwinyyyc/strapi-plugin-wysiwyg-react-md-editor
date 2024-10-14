import type { Schema } from "@strapi/types";
import typeFromMime from '../utils/typeFromMime';

function arrayToMarkdownList(lines: string[]): string {
  if (lines.length === 1) {
    return lines[0];
  }
  return '\n' + lines.map(line => `* ${line}`).join('\n');
}


function singleAssetToMarkdown(asset:Schema.Attribute.MediaValue): string {
  const type = typeFromMime(asset.mime);
  let output = '';

  switch(type){
    //media
    case 'image':
    case 'video':
    case 'audio':
      output = `![${asset.alt}](${asset.url})`;
    break;
    break;
    //doc
    default:
      output = `[${asset.alt}](${asset.url})`;
    break;
  }
  return output;
}

export default function assetsToMarkdown(assets: Schema.Attribute.MediaValue<true>): string {

  const lines = assets.map((asset) => {
    return singleAssetToMarkdown(asset);
  });

  return arrayToMarkdownList(lines);

};
