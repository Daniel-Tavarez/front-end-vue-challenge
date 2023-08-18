// store.ts
import PostModel from "@/models/post/post-model";
import User from "@/models/user/user-model";
import { blogService } from "@/services/blog/blogService";
import { userService } from "@/services/users/userService";
import { InjectionKey } from "vue";
import { toast } from 'vue3-toastify';
import { createStore, Store } from "vuex";
import { Action, Mutation } from "./types";

// define your typings for the store state
export interface State {
  showLoginModal: boolean;
  blogPosts: PostModel[];
  currentPost: PostModel;
  showOnlyFavorites: boolean;
  logged: boolean;
  currentUser: User;
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    showLoginModal: false,
    blogPosts: [] as PostModel[],
    currentPost: {} as PostModel,
    showOnlyFavorites: false,
    logged: false,
    currentUser: {} as User
  },
  mutations: {
    [Mutation.toogleLoginModalShow]: (state) => {
      state.showLoginModal = !state.showLoginModal;
    },
    [Mutation.setBlogPosts]: (state, posts) => {
      state.blogPosts = posts;
    },
    [Mutation.SetOnlyFavorites]: (state, value) => {
      state.showOnlyFavorites = value;
    },
    [Mutation.MarkUserAsLogged]: (state) => {
      state.logged = true;
    },
    [Mutation.MarkUserAsNotLogged]: (state) => {
      state.logged = false;
    },
    [Mutation.SetCurrentUser]: (state, user) => {
      state.currentUser = user;
    },
    [Mutation.RemoveCurrentUser]: (state) => {
      state.currentUser = {} as User;
    },
  },
  actions: {
    [Action.SetBlogPosts]: async (context, filters) => {
      const posts = await blogService.getAll(filters.elementsQuantity, filters.titleFIlter);
      context.commit(Mutation.setBlogPosts, posts);
      return posts.length;
    },
    [Action.UpdatePost]: async (context, post) => {
      await blogService.update(post.id, post);
      toast.success("Post editado correctamente", {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        autoClose: 1000
      });
    },
    [Action.CreatePost]: async (context, post) => {
      const postWithUserData = {
        ...post,
        createdBy: store.state.currentUser.fullName,
        userPicture: store.state.currentUser.picture,
        favorite: false,
        datePosted: new Date().toUTCString()
      } as PostModel;

      await blogService.create(postWithUserData).then(() => {
        toast.success("Post creado correctamente", {
          position: toast.POSITION.TOP_RIGHT,
          hideProgressBar: true,
          autoClose: 1000
        });
      });
    },
    [Action.GetPostById]: async (context, id) => {
      const post = await blogService.getById(id);
      return post;
    },
    [Action.SetShowOnlyFavorites]: async (context, value) => {
      context.commit(Mutation.SetOnlyFavorites, value);
    },
    [Action.SetPostFavorite]: async (context, postId) => {
      const post = await blogService.getById(postId);
      post.favorite = true;
      await blogService.update(postId, post);

      const postQuantity = {
        elementsQuantity: 6,
        titleFIlter: ''
      }

      context.dispatch(Action.SetBlogPosts, postQuantity);
    },
    [Action.SetPostUnFavorite]: async (context, postId) => {
      const post = await blogService.getById(postId);
      post.favorite = false;
      await blogService.update(postId, post);

      const postQuantity = {
        elementsQuantity: 6,
        titleFIlter: ''
      }

      context.dispatch(Action.SetBlogPosts, postQuantity);
    },
    [Action.LogUser]: async (context, userModel) => {
      const user = await userService.getByEmail(userModel.email);
      if (user[0]) {
        localStorage.setItem("currentUser", JSON.stringify(user[0]));
        context.commit(Mutation.MarkUserAsLogged);
        context.commit(Mutation.SetCurrentUser, user[0]);
        toast.success("Autenticado correctamente", {
          position: toast.POSITION.TOP_RIGHT,
          hideProgressBar: true,
          autoClose: 1000
        });
        context.commit(Mutation.toogleLoginModalShow);
      }
    },
    [Action.CreateUser]: async (context, userModel) => {
      await userService.create(userModel).then(() => {
        toast.success("Usuario creado correctamente", {
          position: toast.POSITION.TOP_RIGHT,
          hideProgressBar: true,
          autoClose: 1000
        });
        toast.success("Inicie sesión para poder realizar cambios", {
          position: toast.POSITION.TOP_RIGHT,
          hideProgressBar: true,
          autoClose: 5000
        });
      });
    },
    [Action.GetCurrentUser]: async (context) => {
      const user = localStorage.getItem("currentUser");
      if (user) {
        const parsedUser = JSON.parse(user);
        context.commit(Mutation.MarkUserAsLogged);
        context.commit(Mutation.SetCurrentUser, parsedUser);
      }
    },
    [Action.LogOut]: async (context) => {
      localStorage.removeItem('currentUser');
      context.commit(Mutation.MarkUserAsNotLogged);
      context.commit(Mutation.RemoveCurrentUser);
      toast.success("Ha cerrado sesión correctamente", {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        autoClose: 1000
      });
    },
  },
});
