import { Injectable } from "@angular/core";
import { BlogPost } from "./blogPost";

export interface PostWithID extends BlogPost {
  id: string;
}

@Injectable({
  providedIn: "root"
})
export class BlogpostsService {

  constructor() { }

  getDemoPost(): PostWithID {
    return {
      id: "13243jkehnj32r",
      title: "Test post",
      author: "Mick Evans",
      date: new Date().getFullYear().toString(),
      tags: ["test"],
      body: "Ipsum lorem something something"
    };
  }

  // create
  createPost(post: BlogPost) {

  }
  // read
  getPostById(id: string) {

  }
  // update
  updatePostContent(id: string) {

  }
  // delete
  deletePost(id: string) {

  }
}
