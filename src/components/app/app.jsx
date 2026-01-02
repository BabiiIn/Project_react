import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { Layout } from '../layout/layout';
import { HomePage } from '../../pages/home-page';
import { RestaurantsPage } from '../../pages/restaurants-page';
import { RestaurantPage } from '../../pages/restaurant-page';
import { DishPage } from '../../pages/dish-page';
import { ThemeProvider } from '../../context/theme-provider';
import { UserProvider } from '../../context/user-provider';
import { MenuPage } from '../../pages/menu-page';
import { ReviewsPage } from '../../pages/reviews-page';
import { ErrorBoundary } from '../error-boundary/error-boundary';

export const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Provider store={store}>
          <UserProvider>
            <ThemeProvider>
              <Routes>
                <Route element={<Layout />}>
                  <Route index element={<HomePage />} />
                  <Route path="/restaurants" element={<RestaurantsPage />}>
                    <Route index element={<div>Выберите ресторан</div>} />
                    <Route path=":restaurantId" element={<RestaurantPage />}>
                      <Route index element={<Navigate to="menu" replace />} />
                      <Route path="menu" element={<MenuPage />} />
                      <Route path="reviews" element={<ReviewsPage />} />
                    </Route>
                  </Route>
                  <Route path="/dish/:dishId" element={<DishPage />} />
                </Route>
              </Routes>
            </ThemeProvider>
          </UserProvider>
        </Provider>
      </BrowserRouter>
    </ErrorBoundary>
  );
};
