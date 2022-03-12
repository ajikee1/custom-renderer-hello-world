/*
    Install react-reconciler

    Every platform renderer, be it dom, react native, etc has to have its own configuration called hostConfig along with the react-reconciler.
    Renderers are required to implement all the necessary platform specfic functions inside the hostConfig.
    The react-reconciler module inside the renderer will call the platform specific functions via the supplied hostConfig to
    perform changes or view updates.
 */

import { createElement } from '../utils/createElement';

/* Importing the react-reconciler */
const Reconciler = require('react-reconciler');

/* All custom renderer functions goes here.
*  There are a bunch of functions here. Not all need to be implemented
*  https://github.com/facebook/react/blob/dac9202a9c5add480f853bcad2ee04d371e72c0c/packages/react-reconciler/src/forks/ReactFiberHostConfig.custom.js
* */

let hostConfig = {

    /* This function lets you share some context with the other functions in this HostConfig.
        @nextRootInstance: Basically the root dom node you specify while calling render
    */
    getRootHostContext: function(nextRootInstance) {
        let rootContext = {}; //Any data to be passed on to immediate child
        return rootContext;
    },






    /*
        This function provides a way to access context from the parent and also a way to pass some context to the immediate children of the current node.
        Context is basically a regular object containing some information

        @parentContext: Context from parent. Example: This will contain rootContext for the immediate child of roothost.
        @rootInstance: rootInstance is basically the root dom node you specify while calling render. This is most commonly <div id="root"></div>
        @fiberType: This contains the type of fiber i.e, ‘div’, ‘span’, ‘p’, ‘input’ etc.
     */
    getChildHostContext: function(parentContext, fiberType, rootInstance) {
        let context = {}; //Any data that you want to pass down to immediate child
        return context
    },





    /*
        This function is called when we have made a in-memory render tree of all the views
        Here we can do any preparation that needs to be done on the rootContainer before attaching the in memory render tree
        @rootContainerInstance: root dom node you specify while calling render. This is most commonly <div id="root"></div>
     */
    prepareForCommit: function(rootContainerInstance) {
    },





    /*
        This function gets executed after the inmemory tree has been attached to the root dom element.
        Here we can do any post attach operations that needs to be done
        @rootContainerInstance: root dom node you specify while calling render. This is most commonly <div id="root"></div>
     */
    resetAfterCommit: function(rootContainerInstance) {
    },





    /*
        Create instance is called on all host nodes except the leaf text nodes. So we should return the correct view element for each host type here.

        @type: This contains the type of fiber i.e, ‘div’, ‘span’, ‘p’, ‘input’ etc.
        @newProps: Contains the props passed to the host react element.
        @rootContainerInstance: root dom node you specify while calling render. This is most commonly <div id="root"></div>
        @currentHostContext: contains the context from the parent node enclosing this node. This is the return value from getChildHostContext of the parent node.
        @workInProgress: The fiber node for the text instance. This manages work for this instance.

        Return Value This should be an actual dom element for the node.
     */
    createInstance: function( type, newProps, rootContainerInstance, currentHostContext, workInProgress) {
        const element = createElement(type, newProps);
        return element;
    },





    /*
        Here we will attach the child dom node to the parent on the initial render phase.
        This method will be called for each child of the current node.

        @parent: The current node in the traversal
        @child: The child dom node of the current node.
     */
    appendInitialChild: function(parent, child) {
        if (parent.appendChild) {
            parent.appendChild(child);
        } else {
            parent.document = child;
        }
    },





    /*
        @instance: The instance is the dom element after appendInitialChild.
        @type: This contains the type of fiber i.e, ‘div’, ‘span’, ‘p’, ‘input’ etc.
        @newProps: Contains the props passed to the host react element.
        @rootContainerInstance: root dom node you specify while calling render. This is most commonly <div id="root"></div>
        @currentHostContext: contains the context from the parent node enclosing this node. This is the return value from getChildHostContext of the parent node.
     */
    finalizeInitialChildren: function(instance, type, newProps, rootContainerInstance, currentHostContext) {
        return true;
    },



    /* It computes the diff for an instance. */
    prepareUpdate: function() {
        return true;
    },





    /*

        If the function returns true, the text would be created inside the host element and no new text element would be created separately.

        If this returned true, the next call would be to createInstance for the current element and traversal would stop at this node
        (children of this element wont be traversed).

        If it returns false, getChildHostContext and shouldSetTextContent will be called on the child elements and it will continue till
        shouldSetTextContent returns true or if the recursion reaches the last tree endpoint which usually is a text node.
        When it reaches the last leaf text node it will call createTextInstance

        @nextProps: Contains the props passed to the host react element.
        @type: This contains the type of fiber i.e, ‘div’, ‘span’, ‘p’, ‘input’ etc.

        Return Value This should be a boolean value.

     */
    shouldSetTextContent: function(type, nextProps) {
        return false;
    },




    shouldDeprioritizeSubtree: function() {
    },





    /*
        Here we specify how should renderer handle the text content.

        @newText: contains the text string that needs to be rendered.
        @rootContainerInstance: root dom node you specify while calling render. This is most commonly <div id="root"></div>
        @currentHostContext: contains the context from the host node enclosing this text node. For example, in the case of <p>Hello</p>: currentHostContext for Hello text node will be host context of p.
        @workInProgress: The fiber node for the text instance. This manages work for this instance.

        Return Value This should be an actual text view element. In case of dom it would be a textNode.
     */
    createTextInstance: function(newText, rootContainerInstance, currentHostContext, workInProgress) {
        return document.createTextNode(newText);
    },




    scheduleDeferredCallback: function() {
    },




    cancelDeferredCallback: function() {
    },




    scheduleTimeout: function() {
    },




    cancelTimeout: function() {
    },




    noTimeout: function() {
    },




    now: function() {
    },




    isPrimaryRenderer: function() {
    },




    supportsPersistence: function() {
    },




    supportsHydration: function() {
    },




    /*
        This function is called for every element that has set the return value of finalizeInitialChildren to true.
        This method is called after all the steps are done (ie after resetAfterCommit), meaning the entire tree has been attached to the dom.
        This method is mainly used in react-dom for implementing autofocus.

        @domElement: The rendered, attached dom element for this react element.
        @type: This contains the type of fiber i.e, ‘div’, ‘span’, ‘p’, ‘input’ etc.
        @newProps: Contains the props passed to the host react element.
        @fiberNode: The fiber node for the element. This manages work for this instance.
     */
    commitMount: (domElement, type, newProps, fiberNode) => {
    },




    /*
        Tells how to append our in-memory tree to the root div

        @parent: The root div or the container.
        @child: The child dom node tree or the in-memory tree.
     */
    appendChildToContainer: (parent, child) => {
        parent.appendChild(child)
    },



    supportsMutation: false,

    createContainerChildSet: () =>{},
    appendChildToContainerChildSet: () =>{},
    finalizeContainerChildren: () =>{},
    replaceContainerChildren: () =>{},

}

const CustomReconciler = Reconciler(hostConfig);

export default CustomReconciler;