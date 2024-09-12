import { Client, Account, ID, Avatars, Databases } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.jozefu.aora",
  projectId: "66e0129c001461243452",
  databaseId: "66e014dc002994c10a96",
  userCollectionId: "66e01520003a6e4e0629",
  videoCollectionId: "66e01612002d19918175",
  storageId: "66e148df0026011b5ebd",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);
export const createUser = async ({ email, password, username }) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    if (!newAccount) throw new Error();

    const avatarsUrl = avatars.getInitials(username);
    await signIn({ email, password });
    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarsUrl,
      }
    );
    return newUser;
  } catch (error) {
    throw new Error(error);
  }
};

export async function signIn({ email, password }) {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    throw new Error(error);
  }
}
