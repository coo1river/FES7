import React from "react";
import {
  BrowserRouter,
  Link,
  Outlet,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";

export default function 실습() {
  return (
    <div>
      <BrowserRouter>
        {/* a 태그와 Link 태그 차이: a는 새로고침 일어남, Link는 새로고침 안 일어남 */}
        <a href="/cart">카트페이지 이동</a>
        <Link to="/">홈</Link>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/users/*" element={<Users />}>
            {/* Outlet은 라우트에서 자식으로 있는 컴포넌트를 꺼내서 보여 주는 컴포넌트 */}
            {/* 이 안에 중첩할 라우트들이 들어갑니다! */}
            {/* <Route path="" element={<Users />} /> */}
            {/* 여기 주소는 /users */}
            <Route path="coupon" element={<CouponPage />} />
            {/* /users/question */}
            <Route path="question" element={<QuestionPage />} />
            {/* /users/notice */}
            <Route path="notice" element={<NoticePage />} />
          </Route>

          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route
            path="/products/:id/notice"
            element={<ProductDetailNoticePage />}
          />
        </Routes>
        {/* /user로 이동하는 버튼! useNavigate 이용 */}
        <Button />
      </BrowserRouter>
    </div>
  );
}

function HomePage() {
  return <h1>홈페이지</h1>;
}

function Cart() {
  return <h1>Cart</h1>;
}

function Users() {
  return (
    <div>
      <h1>Users</h1>
      <Outlet />
    </div>
  );
}

function Button() {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/users")}>유저 보기</button>;
}

function ProductDetailPage() {
  const { id } = useParams();
  return <h1>{id}번 상품입니다~!</h1>;
}

function CouponPage() {
  return <h1>쿠폰</h1>;
}

function NoticePage() {
  return <h1>알림</h1>;
}
function QuestionPage() {
  return <h1>?</h1>;
}

function ProductDetailNoticePage() {
  const { id } = useParams();
  return <h1>{id}번 상품 상세 알림 페이지</h1>;
}
