import { MutatingDots } from 'react-loader-spinner';
import { LodeWrapper } from './LoaderStyles.styled';

export const Loader = () => {
    return (
  <LodeWrapper>
  <MutatingDots
  visible={true}
  height="100"
  width="100"
  color="#696969"
  secondaryColor="#696969"
  radius="12.5"
  ariaLabel="mutating-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
        </LodeWrapper>
    );
  };