# Basic Setup for This Site
- Made logo with [LogoAI](https://www.logoai.com/make)
- Removed WaterMark by selecting elemennts in inspect tools and deleting and copyin the remaining as new svg
- Made it correct style by [ReSizer](https://mediamodifier.com/svg-editor#) And slecting resize linked in style
- Removed Empty space with logo with [svgcrop](https://svgcrop.com/)

- Docs to refer : [Atopile](https://github.com/atopile/docs/)


## To modify 
sed -i 's/^#\(.*\)$/---\ntitle: "\1"\n---/' README.mdx
sed -i '0,/^#\(.*\)$/s//---\ntitle: "\1"\n---/' README.mdx

## For creating flow chats
used mermaid js to make flow charts
make this diagram as a mermaid js block diagram , make it look good and colorful to visualize
[Live Editor](https://mermaid.live/edi)