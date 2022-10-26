function transform(e, attrs) {
  if (!attrs) return e;

  if (attrs.num)
    return Number(e);
  if (attrs.script) {
    return Function(e)();
  }

  return e;
}

export function jsxML(tag, attrs, ...children) {
  let arrayChildName;
  let isArray = false;
  const fc = children[0];
  if (attrs?.array) {
    children.find(c => c && (arrayChildName = Object.keys(c)[0]) || true);
    isArray = true;
  } else if (
    tag?.endsWith("s") && fc?.[arrayChildName = tag.slice(0, -1)] ||
    tag?.endsWith("ies") && fc?.[arrayChildName = tag.slice(0, -3) + "y"]
  ) {
    isArray = true;
  }

  const o = isArray
    ? children.map(c => c[arrayChildName])
    : children.length === 1
      ? transform(children[0], attrs)
      : Object.assign({}, ...children);

  return tag ? { [tag]: o } : o;
}
