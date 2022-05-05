import { Component, OnInit } from "@angular/core";
import { Ipost } from "../interface/post";
import { loadDB } from "../service/post.service";

@Component({
  template: `
    <div class="container mt-5">
      <div *ngFor="let post of posts">
        <div *ngIf="!post.active">
          <h5 class="card-header">Inactive post</h5>
          <div class="card-body">
            <h5 clas>{{ post.title }}</h5>
            <p class="card-text">{{ post.body }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class InactivePostPage implements OnInit {
  posts: Ipost[] = [];

  constructor() {
    loadDB().then((posts) => {
      this.posts = posts;
    });
  }

  ngOnInit(): void {}
}
