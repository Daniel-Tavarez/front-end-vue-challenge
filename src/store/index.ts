// store.ts
import PostModel from "@/models/post/post-model";
import { blogService } from "@/services/blog/blogService";
import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { Action, Mutation } from "./types";

// define your typings for the store state
export interface State {
  showLoginModal: boolean;
  blogPosts: PostModel[];
  currentPost: PostModel;
  showOnlyFavorites: boolean;
  logged: boolean;
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    showLoginModal: false,
    blogPosts: [] as PostModel[],
    currentPost: {} as PostModel,
    showOnlyFavorites: false,
    logged: false
  },
  mutations: {
    [Mutation.toogleLoginModalShow]: (state) => {
      state.showLoginModal = !state.showLoginModal;
    },
    [Mutation.setBlogPosts]: (state, posts) => {
      state.blogPosts = posts;
    },
    [Mutation.setCurrentPost]: (state, post) => {
      state.currentPost = post;
    },
    [Mutation.SetOnlyFavorites]: (state, value) => {
      state.showOnlyFavorites = value;
    },
  },
  actions: {
    [Action.SetBlogPosts]: async (context) => {
      const posts = await blogService.getAll();
      context.commit(Mutation.setBlogPosts, posts);
    },
    [Action.GetPostById]: async (context, id) => {
      const post = await blogService.getById(id);
      context.commit(Mutation.setCurrentPost, post);
    },
    [Action.SetShowOnlyFavorites]: async (context, value) => {
      context.commit(Mutation.SetOnlyFavorites, value);
    },
    [Action.SetPostFavorite]: async (context, postId) => {
      const post = await blogService.getById(postId);
      post.favorite = true;
      await blogService.update(postId, post);
      context.dispatch(Action.SetBlogPosts);
    },
    [Action.SetPostUnFavorite]: async (context, postId) => {
      const post = await blogService.getById(postId);
      post.favorite = false;
      await blogService.update(postId, post);
      context.dispatch(Action.SetBlogPosts);
    },
  },
});
