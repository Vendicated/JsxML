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
