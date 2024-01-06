const mainContainer = document.querySelector('#root');
function customRender(reactElement, container){
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
}


const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },

    children : 'Click me to Visit Google.'
};

customRender(reactElement, mainContainer);
