import { observable, action } from "mobx";

class AboutStore {
    @observable searchText;

    @action
    setSearchText = (searchText) => {
        this.searchText = searchText
    }
}

export const aboutStore = new AboutStore();

