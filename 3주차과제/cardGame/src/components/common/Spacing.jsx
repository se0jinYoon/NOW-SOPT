import styled from 'styled-components';

const Spacing = (spacingProps) => {
  const { marginBottom } = spacingProps;
  return <SpacingBox $marginBottom={marginBottom} />;
};

export default Spacing;

const SpacingBox = styled.div`
  margin-bottom: ${(props) => props.$marginBottom || '0'}rem;
`;
