import { observable, action } from "mobx";

class AboutState {
    @observable timer = 0;

    constructor() {
        setInterval(() => {
            this.timer += 1;
        }, 1000);
    }

    @action.bound
    reset() {
        this.timer = 0;
    }
}

export default AboutState;
