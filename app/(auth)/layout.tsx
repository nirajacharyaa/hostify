const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="image-bg min-h-screen flex items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
