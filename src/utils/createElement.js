import { Text, XmlDocument } from '../components/';


function createElement(type, props, root) {
    const COMPONENTS = {
        r: () => new XmlDocument(),
        text: () => new Text(new XmlDocument(), props),
        default: undefined,
    };

    return COMPONENTS[type]() || COMPONENTS.default;
}

export {createElement};
