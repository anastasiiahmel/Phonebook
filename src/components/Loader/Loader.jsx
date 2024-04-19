import { FallingLines } from 'react-loader-spinner';
import { LodeWrapper } from './LoaderStyles.styled';

export const Loader = () => {
    return (
  <LodeWrapper>
       <FallingLines
  color="#696969"
  width="100"
  visible={true}
  ariaLabel="falling-circles-loading"
  />
        </LodeWrapper>
    );
  };