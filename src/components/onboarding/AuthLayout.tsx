const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="h-screen flex">
        {children}
      </div>
    );
  };
  
  export default AuthLayout;
  