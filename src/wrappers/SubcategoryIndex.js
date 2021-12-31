export default class SubcategoryIndex {
    _IndexName = "";
    _IndexDescription = "";

    constructor(indexName, indexDescription)
    {
        this._IndexName = indexName;
        this._IndexDescription = indexDescription;
    }

    get IndexName() {
        return this._IndexName;
    }

    set IndexName(value) {
        this._IndexName = value;
    }

    get IndexDescription() {
        return this._IndexDescription;
    }

    set IndexDescription(value) {
        this._IndexDescription = value;
    }
}
