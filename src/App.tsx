import Router from "./Router";
import { useSetRecoilState } from "recoil";
import { useEffect } from "react";
import { appAuth, appFireStore } from "./firebase/config";
import { isLoginState, userDataState } from "./utils/atom";
import useLoading from "./hooks/useLoading";
import { doc, getDoc } from "firebase/firestore";

function App() {
  const setIsLogin = useSetRecoilState(isLoginState);
  const setUserData = useSetRecoilState(userDataState);
  const { showLoading, hideLoading } = useLoading();

  useEffect(() => {
    showLoading();
    appAuth.onAuthStateChanged(async (user) => {
      setIsLogin(user !== null);
      if (user) {
        const { uid, email, displayName } = user;
        setUserData({ uid, email, displayName });
      }
      hideLoading();
    });
  }, []);

  return <Router />;
}

export default App;
