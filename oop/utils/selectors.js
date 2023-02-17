/**
 * 
 * @param { string } selector 
 * @param { HTMLElement | Document } node 
 * @returns { Element }
 */
export const $ = (selector, node = document.body) => {
  if((node instanceof Document) && selector[0] === '#')
    return node.getElementById(selector.slice(1))

  return node.querySelector(selector)
}

