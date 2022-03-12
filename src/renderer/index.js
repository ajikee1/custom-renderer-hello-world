import {createElement} from '../utils/createElement';
import CustomReconciler from "../reconciler/index";

const CustomRenderer = {
    /*
        @element: This is the react element for App component
        @renderDom: This is the host root element to which the rendered app will be attached.
        @callback: if specified will be called after render is done.
     */
    render(element) {

        /* Creating a root fiber node corresponding to the renderDom element
        * The root fiber node will be used by the reconciler to manage all the updates to the renderDom */
        const container = createElement('r');
        const node = CustomReconciler.createContainer(container);

        CustomReconciler.updateContainer(element, node, null)

       // container.doc.ele('ajith');
        // let xml = container.doc.end();


    },
}

export default CustomRenderer;