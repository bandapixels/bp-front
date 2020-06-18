import { AxiosResponse } from "axios";
import request from "./request";
import api from "../shared/constants";

export class PostsRequest {
  public GetPosts = (): Promise<AxiosResponse> => {
    const url = api.schema + api.host + api.helpers.blog;

    return request.get(url);
  };
}

const instance = new PostsRequest();

export default instance;
