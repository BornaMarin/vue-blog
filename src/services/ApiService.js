import axios from "axios";

class BaseApiService {
  baseUrl = process.env.VUE_APP_BASE_URL;
  resource;
  constructor(resource) {
    if (!resource) throw new Error("Resource is not provided");
    this.resource = resource;
  }

  getUrl(id = "") {
    return `${this.baseUrl}${this.resource}/${id}`;
  }

  handleErrors() {
    throw new Error("we handle error logic here");
  }
}

class ReadOnlyApiService extends BaseApiService {
  constructor(resource) {
    super(resource);
  }
  async fetch(config = {}) {
    try {
      return await axios.get(this.getUrl(), { params: config });
    } catch (err) {
      this.handleErrors(err);
    }
  }
  async get(id) {
    try {
      if (!id) throw Error("Id is not provided");
      return await axios.get(this.getUrl(id));
    } catch (err) {
      this.handleErrors(err);
    }
  }
}

class UsersApiService extends ReadOnlyApiService {
  constructor() {
    super("users");
  }
}
class PostsApiService extends ReadOnlyApiService {
  constructor() {
    super("posts");
  }
}
class CommentsApiService extends ReadOnlyApiService {
  constructor() {
    super(`posts`);
  }
}

export const $apiService = {
  users: new UsersApiService(),
  posts: new PostsApiService(),
  comments: new CommentsApiService(),
};
