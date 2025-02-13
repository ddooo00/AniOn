import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import AnimeRecommend from '../pages/AnimeRecommend';
import Board from '../pages/Board';
import MyPage from '../pages/MyPage';
import Shop from '../pages/Shop';
import WorldCup from '../pages/WorldCup';
import WriteBoard from '../pages/WriteBoard';
import NotFoundPage from '../pages/notfound/NotFoundPage';
import AnimeDetail from '../pages/AnimeDetail';
import BoardDetail from '../pages/BoardDetail';
import { GlobalStyle } from '../styles/globalstyle';
import ScrollToTop from '../components/ScrollTop';
import AniWorldCup from '../components/worldcup/AniWorldCup';
import WorldCupResult from '../pages/WorldCupResult';
import Layout from '../styles/Layout';
import NewPassword from '../components/myPage/NewPassword';
import AfterSocialLogin from '../pages/AfterSocialLogin';
import PrivateRoute from '../hoc/PrivateRoute';
const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <ScrollToTop />
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/recommend" element={<AnimeRecommend />} />
          <Route path="/board" element={<Board />} />
          <Route path="/recommend/:ani_id" element={<AnimeDetail />} />
          <Route path="/shop/:category" element={<Shop />} />
          <Route path="/worldcup" element={<WorldCup />} />
          <Route path="/worldcup/:gender" element={<AniWorldCup />} />
          <Route path="/worldcup/result/:gender" element={<WorldCupResult />} />

          {/* 인증을 반드시 해야지만 접속 가능한 페이지 정의 */}
          <Route element={<PrivateRoute authentication={true} />}>
            <Route path="/board/write" element={<WriteBoard />} />
            <Route path="/myPage/:user_id" element={<MyPage />} />
          </Route>
          <Route element={<PrivateRoute authentication={false} />}>
            <Route path="/sociallogin" element={<AfterSocialLogin />} />
          </Route>
          <Route path="/*" element={<NotFoundPage />} />
          <Route path="/board/:post_id" element={<BoardDetail />} />
          <Route path="/newPassword/:user_id" element={<NewPassword />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
