class Text{
    constructor(root, props) {
        this.root = root;
        this.props = props;
    }


    appendChild(child) {
        // Platform specific API for appending child nodes
        // Note: This will vary in different host environments. For example - In browser, you might use document.appendChild(child)

        if (typeof child.textContent === 'string') {
            // Add the string and render the text node
            this.root.doc.ele(child.textContent);
        }

        console.log(this.root.doc.toString());
    }
}

export default Text;