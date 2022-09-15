document.addEventListener('DOMContentLoaded', () => {
  let nodes = Array.from(document.querySelectorAll('div.content-container'));
  console.log(nodes)
  const listeners = nodes.map(node => {
    const name = node.children[0].textContent;
    return {
      'update': () => window.open(`/egg/update/${name}`, '_self'),
      'delete': () => window.open(`/egg/delete/${name}`, '_self'),
      'view': () => window.open(`/egg/view/${name}`, '_self')
    };
  });
  console.log(document.querySelectorAll('div.content-container'))
  nodes = Array.from(document.querySelectorAll('div.action-container'));
  nodes.forEach((node, index) => {
    const buttons = node.children;
    buttons[2].addEventListener('click', listeners[index].update);
    buttons[1].addEventListener('click', listeners[index].delete);
    buttons[0].addEventListener('click', listeners[index].view);
  });
});


