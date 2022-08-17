function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export class startUp {
    constructor() {
        return this.jobs();
    }
    jobs() {
        this._log = console.debug,
        this._length = 20;

        this._log("startUp.jobs: 1/"+this._length);

        switch (getParam("page")) {
            case null:
            case "":
            case "home":
            case "Home":
                this.paged = "home";
                break;
            case "blog":
            case "Blog":
                this.paged = "blog";
                break;
            default:
                this.paged = "error";
                break;
        }
        this._log(this.paged);
    }
}