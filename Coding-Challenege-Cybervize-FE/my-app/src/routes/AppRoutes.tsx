import { Route, Routes } from 'react-router-dom';
import PageNotFound from '../components/PageNotFound';
import Home from '../components/Home';

const AppRoutes = () => {
    return (
        <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route path="companies/new" element={<CreateEditDrug />} />
          <Route path="companies/:companyId" element={<CompanyDetail />} />
           */}
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    );
};

export default AppRoutes;