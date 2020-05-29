import { combineReducers } from 'redux';
import ChangeStyleReducer from './ChangeStyleReducer';
import UserReducer from './UserReducer';
import UserCartReducer from './UserCartReducer';
import UserBuildReducer from './UserBuildReducer';
import UserWishlistReducer from './UserWishlistReducer';
import UserTransactionReducer from './UserTransactionReducer';
import CourierReducer from './CourierReducer';
import BrandReducer from './BrandReducer';
import BrandCatReducer from './BrandCatReducer';
import CategoryReducer from './CategoryReducer';
import ProductReducer from './ProductReducer';
import ProductCatReducer from './ProductCatReducer';
import ProductDetailReducer from './ProductDetailReducer';
import ManageUserReducer from './ManageUserReducer';
import FormProductReducer from './FormProductReducer';
import FormRegisterReducer from './FormRegisterReducer';
import CarouselReducer from './CarouselReducer';
import SearchBoxReducer from './SearchBoxReducer'

export default combineReducers({
	changeStyle: ChangeStyleReducer,
	user: UserReducer,
	userCart: UserCartReducer,
	userBuild: UserBuildReducer,
	userWishlist: UserWishlistReducer,
	userTransaction: UserTransactionReducer,
	courier: CourierReducer,
	brands: BrandReducer,
	brandCats: BrandCatReducer,
	categories: CategoryReducer,
	products: ProductReducer,
	productCats: ProductCatReducer,
	productDetail: ProductDetailReducer,
	manageUser: ManageUserReducer,
	formProduct: FormProductReducer,
	formRegister: FormRegisterReducer,
	carousel: CarouselReducer,
	search: SearchBoxReducer
});
