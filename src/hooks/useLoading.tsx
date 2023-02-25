import { useSetRecoilState } from "recoil";
import { loadingState } from "../utils/atom";

const useLoading = () => {
  const setLoading = useSetRecoilState(loadingState);

  const showLoading = () => {
    setLoading(true);
  };

  const hideLoading = () => {
    setLoading(false);
  };

  return { showLoading, hideLoading };
};

export default useLoading;
