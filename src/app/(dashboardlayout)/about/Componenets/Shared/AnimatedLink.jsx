



'use client';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import {
  goToResume,
  returnHome,
} from '../../../../(mainlayout)/Redux/counter/pageTransitionSlice';
import { showCurtain } from '../../../../(mainlayout)/Redux/counter/curtainSlice';

const AnimatedLink = ({ href, children }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(showCurtain());

    if (href === '/resume') {
      dispatch(goToResume());
    } else if (href === '/') {
      dispatch(returnHome());
    }

    setTimeout(() => {
      router.push(href);
    }, 800);
  };

  return (
    <button
      onClick={handleClick}
      className="text-sm sm:text-base md:text-lg px-2 py-1 sm:px-3 sm:py-2 
        hover:underline hover:text-green-400 transition-colors duration-300 
        w-full text-left sm:text-center"
    >
      {children}
    </button>
  );
};

export default AnimatedLink;
