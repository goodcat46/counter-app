export const getUserData = state => state.auth;
export const getAppSettings = state => state.appSettings;
export const getAppPageSettings = state => state.appPage;
export const getIndexPage = state => state.appPage.indexPage;
export const getDevice = state => (state.appPage.isMobile ? 'mobile' : 'desktop');

export const usersSelector = state => state.users;
export const getAllUsers = state => state.users.users;

export const categoriesSelector = state => state.categories;
export const getAllCategories = state => state.categories.categories;
export const getCategoriesByOwnerId = ownerId => state =>
  state.categories.categories.filter(category => category?.owner === ownerId || category?.owner?._id === ownerId);
export const getFilteredCategories = state => {
  const { categories = [], isLoading, error } = state.categories;

  const mainCategories = categories.filter(category => !category.owner);
  const subCategories = categories.filter(category => category.owner);
  return { mainCategories, subCategories, isLoading, error };
};

export const countsSelector = state => state.counts;
export const getAllCounts = state => state.counts.counts;
export const getCountsByOwnerId = ownerId => state =>
  state.counts.counts.filter(count => count?.owner === ownerId || count?.owner?._id === ownerId);
export const getFilteredCounts = state => {
  const { counts = [], isLoading, error } = state.counts;

  const mainCounts = counts.filter(count => !count.owner);
  const subCounts = counts.filter(count => count.owner);
  return { mainCounts, subCounts, isLoading, error };
};

export const contractorsSelector = state => state.contractors;
export const getAllContractors = state => state.contractors.contractors;

export const documentsSelector = state => state.documents;
export const getAllDocuments = state => state.documents.documents;

export const transactionsSelector = state => state.transactions;
export const getAllTransactions = state => state.transactions.transactions;

// export const postsSelector = state => state.posts;
// export const getAllPosts = state => state.posts.posts;
// export const getPostById =
//   id =>
//   ({ posts }) =>
//     posts.posts.find(post => post._id === id);
