const LoadingSpinner = () => {
  return (
    <div className="w-full h-[80vh] flex items-center justify-center">
      <div className="w-15 h-15 border-4 border-[#FA9820] border-t-transparent rounded-full animate-spin" />
    </div>
  );
};

export default LoadingSpinner;
