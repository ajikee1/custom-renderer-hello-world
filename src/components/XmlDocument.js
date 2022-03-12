import xmlbuilder from "xmlbuilder";

/* Create the document instance */
class XmlDocument {
    constructor() {
        this.doc =  xmlbuilder.create('root');
    }
}

export default XmlDocument;