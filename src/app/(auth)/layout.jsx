import Navbar from '@/components/shared/Navbar';

const AuthLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="animate-fade-in">{children}</div>
    </>
  );
};

export default AuthLayout;
