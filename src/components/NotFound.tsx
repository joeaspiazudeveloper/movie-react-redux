import styled from 'styled-components';

function NotFound() {
  // styled components
  const NotFoundContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    height: 100vh;
    background-color: #6b8a7a;
  `;
  const H2 = styled.h2`
    font-size: 55px;
  `;
  const P = styled.div`
    font-size: 20px;
  `;

  return (
    <NotFoundContent>
        <H2>404</H2>
        <P>Page Not Found</P>
    </NotFoundContent>
  )
}

export default NotFound