import { observable, action, runInAction } from "mobx";
import axios from 'axios';
import URI_CONFIG from '../config/uri';

class AboutStore {
    @observable searchText;
    @observable state = "pending"; // "pending" / "done" / "error"

    @action
    setSearchText = (searchText) => {
        this.searchText = searchText
    }
    @action
    fetchData = () => {
        // this.state = "pending";
        // 数据请求
        axios.get(URI_CONFIG.FETCH_DATA, {
            params: { ID: 12345 }
        }).then(projects => {
            runInAction(() => {
                // todo success
                // this.state = "done"
            })
        }, error => {
            runInAction(() => {
                // todo error
                // this.state = "error"
            })
        })
    }
}

export const aboutStore = new AboutStore();

