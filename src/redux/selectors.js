export const getUserData = state => state.auth;
export const getAppSettings = state => state.appSettings;
export const getAppPageSettings = state => state.appPage;
export const getAppNotify = state => state.appNotify;
export const getIndexPage = state => state.appPage.indexPage;
export const getDevice = state => (state.appPage.isMobile ? 'mobile' : 'desktop');
export const getPageObjData = state => state.appPage.pageObjData;

export const usersSelector = state => state.users;
export const getAllUsers = state => state.users.users;

export const postsSelector = state => state.posts;
export const getAllPosts = state => state.posts.posts;
export const getPostById =
  id =>
  ({ posts }) =>
    posts.posts.find(post => post._id === id);

export const ordersSelector = state => state.orders;
export const getAllOrders = state => state.orders.orders;
export const getOrderById =
  id =>
  ({ orders }) =>
    orders.orders.find(order => order._id === id);

export const refundsSelector = state => state.refunds;
export const getAllRefunds = state => state.refunds.refunds;
export const getRefundById =
  id =>
  ({ refunds }) =>
    refunds.refunds.find(refund => refund._id === id);

export const categoriesSelector = state => state.categories;
export const getAllCategories = state => state.categories.categories;
