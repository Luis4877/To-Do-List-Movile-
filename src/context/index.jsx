import { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem("@RNAuth:user");
      const storageToken = await AsyncStorage.getItem("@RNAuth:token");

      if (storageUser && storageToken) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }
    }

    loadStorageData();
  }, []);

  async function signIn(data) {
    setUser(data.user);

    await AsyncStorage.setItem("@RNAuth:user", JSON.stringify(data.user));
    await AsyncStorage.setItem("@RNAuth:token", data.token);
  }

  async function signOut() {
    await AsyncStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
        signOut,
        loading,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

const useMyContext = () => useContext(AuthContext);

export { AuthProvider, useMyContext };