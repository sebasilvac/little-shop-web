// loading component
import './style.css';

export const Loading = () => {
  return (
    <>
      <div className='w-full min-h-screen flex items-center justify-center bg-blue-500'>

        <div className="lds-roller ">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};
