export enum Mutation {
    toogleLoginModalShow = 'toogleLoginModalShow',
    setBlogPosts = 'setBlogPosts',
    setCurrentPost = 'setCurrentPost',
    SetOnlyFavorites = 'SetOnlyFavorites',
    MarkUserAsLogged = 'MarkUserAsLogged',
    MarkUserAsNotLogged = 'MarkUserAsNotLogged',
    SetCurrentUser = 'SetCurrentUser',
    RemoveCurrentUser = 'RemoveCurrentUser',
}
export enum Action {
    SetBlogPosts = 'setBlogPostsAction',
    GetPostById = 'GetPostById',
    SetShowOnlyFavorites = 'SetShowOnlyFavorites',
    SetPostFavorite = 'SetPostFavorite',
    SetPostUnFavorite = 'SetPostUnFavorite',
    LogUser = 'LogUser',
    GetCurrentUser = 'GetCurrentUser',
    LogOut = 'LogOut',
    UpdatePost = 'UpdatePost'
}