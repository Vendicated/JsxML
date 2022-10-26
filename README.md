# JsxML

XML-like object creation via JSX, because why the hell not!!

## How do I use this?

Clone, edit index.jsx and run via
```sh
npm i
node run.mjs
```

## Example

```jsx
// jsx doesn't support @ in the tag? criiinge
const TypesNode = "@types/node";
console.log(
    <>
        <name>JsxML</name>
        <description>XML-like object creation via JSX</description>
        <version>1.0.0</version>

        {/* If you want this as Number, mark it as num */}
        <number num>42</number>

        {/* Or maybe run some js? */}
        <scriptRes script>return Math.random() * 42;</scriptRes>

        {/* Automatically inferred as Array since authors is the plural of author */}
        <authors>
            <author>
                <name>Vendicated</name>
            </author>
        </authors>

        {/* Since this has no children, array type cannot be inferred. specify it manualy */}
        <keywords array />

        <dependencies>
            <esbuild>^0.15.12</esbuild>
        </dependencies>

        <devDependencies>
            <TypesNode>18.11.6</TypesNode>
        </devDependencies>
    </>
);
```

When you compile and run it, you get
```js
{
  name: 'JsxML',
  description: 'XML-like object creation via JSX',
  version: '1.0.0',
  number: 42,
  scriptRes: 30.36912272363861,
  authors: [ { name: 'Vendicated' } ],
  keywords: [],
  dependencies: { esbuild: '^0.15.12' },
  devDependencies: { '@types/node': '18.11.6' }
}
```

## Why?????

Why not ![](https://cdn.discordapp.com/emojis/1032974662122098698.webp?size=160&quality=lossless)

## Should I use this?

Absolutely, this is the most useful javascript library ever made